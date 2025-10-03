import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Voltar from "../../components/Voltar.jsx";
import { top100Artistas, top20MusicasDoArtista } from "../../utils/dataProcessing.js";

export default function ArtistaDetalhe() {
  const router = useRouter();
  const { id } = router.query; // id é o nome do artista
  const [menuOpen, setMenuOpen] = useState(false);
  const [periodo, setPeriodo] = useState("sempre");
  const [topMusicas, setTopMusicas] = useState([]);
  const [artistaSelecionado, setArtistaSelecionado] = useState(null);

  // Atualiza artista selecionado quando id mudar
  useEffect(() => {
    if (!id) return;
    const topArtistas = top100Artistas();
    const artista = topArtistas.find(a => a.nome === decodeURIComponent(id));
    setArtistaSelecionado(artista);
  }, [id]);

  // Atualiza top 20 músicas quando artista ou período mudar
  useEffect(() => {
    if (artistaSelecionado) {
      setTopMusicas(top20MusicasDoArtista(artistaSelecionado.nome, periodo));
    }
  }, [periodo, artistaSelecionado]);

  if (!artistaSelecionado) return <div>Artista não encontrado</div>;

  const periodos = ["sempre", "1ano", "6meses", "4semanas"];

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6"
         style={{ backgroundImage: "url('/background2.png')" }}>
      
      {/* Topo com botão voltar e dropdown perfil */}
      <div className="w-full flex justify-between items-center mb-6 relative">
        <Voltar />

        <div className="flex flex-col gap-1 relative">
          <button
            className="flex flex-col justify-center items-center p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black rounded block"></span>
            <span className="w-6 h-0.5 bg-black rounded block"></span>
            <span className="w-6 h-0.5 bg-black rounded block"></span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded border border-gray-200 z-50">
              <Link href="/perfil" className="block px-4 py-2 hover:bg-green-100">Perfil</Link>
            </div>
          )}
        </div>
      </div>

      {/* Artista */}
      <div className="flex w-full max-w-3xl items-center mb-6 gap-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold leading-snug">
            #{artistaSelecionado.nome.split(" ")[0]} <br /> {artistaSelecionado.nome.split(" ")[1]}
          </h1>
          <span className="text-green-500 text-lg">artista</span>
        </div>
        <div className="ml-auto">
          <img
            src="/user-placeholder.png"
            alt={artistaSelecionado.nome}
            className="w-28 h-28 rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Lista de músicas com scroll vertical */}
      <div className="w-full max-w-3xl h-96 overflow-y-auto mb-4">
        {topMusicas.map((musica, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-xl mb-2 shadow-md hover:bg-orange-100 transition-colors">
            <span className="font-semibold">{musica.nome}</span>
            <span className="text-gray-500">{Math.floor((musica.ms_played || 0)/60000)} min</span>
          </div>
        ))}
      </div>

      {/* Filtro de período como botões roxo pastel */}
      <div className="flex gap-3 mb-6">
        {periodos.map(p => (
          <button
            key={p}
            onClick={() => setPeriodo(p)}
            className={`px-4 py-2 rounded-full font-semibold border transition-colors ${
              periodo === p
                ? "bg-orange-400 border-orange-400 text-white"
                : "bg-purple-200 border-orange-400 text-black hover:bg-orange-400 hover:text-white"
            }`}
          >
            {p === "sempre" ? "Desde Sempre" :
             p === "1ano" ? "Último Ano" :
             p === "6meses" ? "Últimos 6 Meses" :
             "Últimas 4 Semanas"}
          </button>
        ))}
      </div>
    </div>
  );
}
