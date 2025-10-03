import dadosHistory from "../data/history.json";

// ---------- AUX: parse robusto do campo ts ----------
function parseTsToDate(ts) {
  if (!ts && ts !== 0) return null;

  if (typeof ts === "number") {
    return ts < 1e12 ? new Date(ts * 1000) : new Date(ts);
  }

  if (typeof ts === "string") {
    if (/^\d+$/.test(ts)) {
      const n = Number(ts);
      return n < 1e12 ? new Date(n * 1000) : new Date(n);
    }

    let d = new Date(ts);
    if (d.toString() !== "Invalid Date") return d;

    d = new Date(ts.replace(" ", "T"));
    if (d.toString() !== "Invalid Date") return d;

    d = new Date(ts.replace(" ", "T") + "Z");
    if (d.toString() !== "Invalid Date") return d;

    return null;
  }

  return null;
}

// ---------- pega a última data real do histórico ----------
function getUltimaData() {
  let maxDate = null;
  dadosHistory.forEach(m => {
    const d = parseTsToDate(m.ts);
    if (d && (!maxDate || d > maxDate)) {
      maxDate = d;
    }
  });
  return maxDate || new Date(); // fallback pro hoje se não tiver nada
}

// ---------- FUNÇÃO AUXILIAR PARA FILTRAR POR PERÍODO ----------
function filtrarPorPeriodo(periodo) {
  const agora = getUltimaData(); // usa a última data real do JSON
  let inicio;

  switch (periodo) {
    case "4semanas":
      inicio = new Date(agora.getTime() - 28 * 24 * 60 * 60 * 1000);
      break;
    case "6meses":
      inicio = new Date(agora);
      inicio.setMonth(agora.getMonth() - 6);
      break;
    case "1ano":
      inicio = new Date(agora);
      inicio.setFullYear(agora.getFullYear() - 1);
      break;
    default: // "sempre"
      return dadosHistory;
  }

  return dadosHistory.filter(m => {
    const d = parseTsToDate(m.ts);
    return d && d >= inicio && d <= agora;
  });
}

// ---------- DADOS GERAIS ----------
export function contarTotalPlays() {
  return dadosHistory?.length || 0;
}

export function contarTotalMusicas() {
  const musicas = new Set(dadosHistory.map(m => m.master_metadata_track_name));
  return musicas.size;
}

export function totalMinutosOuvidos() {
  const totalMs = dadosHistory.reduce((sum, m) => sum + (m.ms_played || 0), 0);
  return Math.floor(totalMs / 60000);
}

export function mediaDiariaPlays() {
  if (!dadosHistory || dadosHistory.length === 0) return 0;
  const dias = new Set(dadosHistory.map(m => {
    const d = parseTsToDate(m.ts);
    return d ? d.toDateString() : "invalid";
  }));
  return (dadosHistory.length / (dias.size || 1)).toFixed(2);
}

export function horarioMaisOuvido() {
  const contagemHora = {};
  dadosHistory.forEach(m => {
    const d = parseTsToDate(m.ts);
    if (!d) return;
    const h = d.getHours();
    contagemHora[h] = (contagemHora[h] || 0) + 1;
  });
  let max = 0, hora = 0;
  for (const h in contagemHora) {
    if (contagemHora[h] > max) {
      max = contagemHora[h];
      hora = h;
    }
  }
  return hora + ":00";
}

export function estacaoMaisOuvida() {
  const contagemEstacao = { "Verão": 0, "Outono": 0, "Inverno": 0, "Primavera": 0 };
  dadosHistory.forEach(m => {
    const d = parseTsToDate(m.ts);
    if (!d) return;
    const month = d.getMonth() + 1;
    if ([12, 1, 2].includes(month)) contagemEstacao["Verão"]++;
    else if ([3, 4, 5].includes(month)) contagemEstacao["Outono"]++;
    else if ([6, 7, 8].includes(month)) contagemEstacao["Inverno"]++;
    else contagemEstacao["Primavera"]++;
  });
  let max = 0, estacao = "";
  for (const e in contagemEstacao) {
    if (contagemEstacao[e] > max) {
      max = contagemEstacao[e];
      estacao = e;
    }
  }
  return estacao;
}

// ---------- ARTISTA MAIS OUVIDO ----------
export function artistaMaisOuvido() {
  const contagemArtistas = {};
  dadosHistory.forEach(m => {
    const artista = m.master_metadata_album_artist_name;
    if (artista) contagemArtistas[artista] = (contagemArtistas[artista] || 0) + 1;
  });
  let max = 0, artista = "";
  for (const a in contagemArtistas) {
    if (contagemArtistas[a] > max) {
      max = contagemArtistas[a];
      artista = a;
    }
  }
  return artista;
}

// ---------- OBTER PRIMEIRA MÚSICA ----------
export function obterPrimeiraMusica() {
  if (!dadosHistory || dadosHistory.length === 0) return "Nenhuma música encontrada";
  return dadosHistory[0].master_metadata_track_name || "Música desconhecida";
}

// ---------- TOPS COM FILTRO DE PERÍODO ----------

// Top 100 Artistas
export function top100Artistas(periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo);
  const contagemArtistas = {};

  dados.forEach(m => {
    const artista = m.master_metadata_album_artist_name;
    if (artista) contagemArtistas[artista] = (contagemArtistas[artista] || 0) + 1;
  });

  const lista = Object.keys(contagemArtistas).map(a => ({ nome: a, plays: contagemArtistas[a] }));
  lista.sort((a, b) => b.plays - a.plays);
  return lista.slice(0, 100);
}

// Top 100 Músicas
export function top100Musicas(periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo);
  const musicaAcumuladaPorNome = {};

  dados.forEach(m => {
    const nome = m.master_metadata_track_name;
    const artista = m.master_metadata_album_artist_name;
    const ms = m.ms_played || 0;
    if (!nome) return;

    if (!musicaAcumuladaPorNome[nome]) {
      musicaAcumuladaPorNome[nome] = { ms_played: 0, artistas: {} };
    }
    musicaAcumuladaPorNome[nome].ms_played += ms;
    if (artista) {
      musicaAcumuladaPorNome[nome].artistas[artista] = (musicaAcumuladaPorNome[nome].artistas[artista] || 0) + ms;
    }
  });

  const lista = Object.keys(musicaAcumuladaPorNome).map(nome => {
    const entry = musicaAcumuladaPorNome[nome];
    // escolhe o artista com maior tempo acumulado para essa faixa
    let artistaPrincipal = "";
    let max = -1;
    for (const artista in entry.artistas) {
      if (entry.artistas[artista] > max) {
        max = entry.artistas[artista];
        artistaPrincipal = artista;
      }
    }
    return { nome, ms_played: entry.ms_played, artista: artistaPrincipal };
  });

  lista.sort((a, b) => b.ms_played - a.ms_played);
  return lista.slice(0, 100);
}

// Top 100 Albuns
export function top100Albuns(periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo);
  const albumAcumuladoPorNome = {};

  dados.forEach(m => {
    const nome = m.master_metadata_album_album_name;
    const artista = m.master_metadata_album_artist_name;
    const ms = m.ms_played || 0;
    if (!nome) return;
    if (!albumAcumuladoPorNome[nome]) {
      albumAcumuladoPorNome[nome] = { ms_played: 0, artistas: {} };
    }
    albumAcumuladoPorNome[nome].ms_played += ms;
    if (artista) {
      albumAcumuladoPorNome[nome].artistas[artista] = (albumAcumuladoPorNome[nome].artistas[artista] || 0) + ms;
    }
  });

  const lista = Object.keys(albumAcumuladoPorNome).map(nome => {
    const entry = albumAcumuladoPorNome[nome];
    let artistaPrincipal = "";
    let max = -1;
    for (const artista in entry.artistas) {
      if (entry.artistas[artista] > max) {
        max = entry.artistas[artista];
        artistaPrincipal = artista;
      }
    }
    return { nome, ms_played: entry.ms_played, artista: artistaPrincipal };
  });

  lista.sort((a, b) => b.ms_played - a.ms_played);
  return lista.slice(0, 100);
}

// Top 20 músicas de um artista
export function top20MusicasDoArtista(artista, periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo).filter(
    m => m.master_metadata_album_artist_name === artista
  );
  const contagemMusicas = {};

  dados.forEach(m => {
    const nome = m.master_metadata_track_name;
    const ms = m.ms_played || 0;
    if (nome) contagemMusicas[nome] = (contagemMusicas[nome] || 0) + ms;
  });

  const lista = Object.keys(contagemMusicas).map(n => ({ nome: n, ms_played: contagemMusicas[n] }));
  lista.sort((a, b) => b.ms_played - a.ms_played);
  return lista.slice(0, 20);
}

// ---------- NOVAS FUNÇÕES PARA INFORMAÇÕES DO ARTISTA ----------

// Total de plays do artista
export function totalPlaysDoArtista(artista, periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo).filter(
    m => m.master_metadata_album_artist_name === artista
  );
  return dados.length;
}

// Total de músicas diferentes do artista
export function totalMusicasDoArtista(artista, periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo).filter(
    m => m.master_metadata_album_artist_name === artista
  );
  const musicas = new Set(dados.map(m => m.master_metadata_track_name));
  return musicas.size;
}

// Total de minutos ouvidos do artista
export function totalMinutosDoArtista(artista, periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo).filter(
    m => m.master_metadata_album_artist_name === artista
  );
  const totalMs = dados.reduce((sum, m) => sum + (m.ms_played || 0), 0);
  return Math.floor(totalMs / 60000);
}

// % das plays do artista dentro do total
export function percentualPlaysDoArtista(artista, periodo = "sempre") {
  const total = filtrarPorPeriodo(periodo).length;
  if (!total) return 0;
  const totalArtista = totalPlaysDoArtista(artista, periodo);
  return ((totalArtista / total) * 100).toFixed(1);
}

// Estação mais ouvida do artista
export function estacaoMaisOuvidaDoArtista(artista, periodo = "sempre") {
  const dados = filtrarPorPeriodo(periodo).filter(
    m => m.master_metadata_album_artist_name === artista
  );
  const contagemEstacao = { "Verão": 0, "Outono": 0, "Inverno": 0, "Primavera": 0 };
  dados.forEach(m => {
    const d = parseTsToDate(m.ts);
    if (!d) return;
    const month = d.getMonth() + 1;
    if ([12, 1, 2].includes(month)) contagemEstacao["Verão"]++;
    else if ([3, 4, 5].includes(month)) contagemEstacao["Outono"]++;
    else if ([6, 7, 8].includes(month)) contagemEstacao["Inverno"]++;
    else contagemEstacao["Primavera"]++;
  });
  let max = 0, estacao = "";
  for (const e in contagemEstacao) {
    if (contagemEstacao[e] > max) {
      max = contagemEstacao[e];
      estacao = e;
    }
  }
  return estacao;
}

// Posição do artista no top 100 (desde sempre)
export function posicaoNoTop100(artista) {
  const top100 = top100Artistas("sempre");
  const index = top100.findIndex(a => a.nome === artista);
  return index >= 0 ? index + 1 : null;
}
