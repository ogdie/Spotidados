import { useState } from "react";
import Link from "next/link";
import Voltar from "@/components/Voltar";
import dadosHistory from "../data/history.json";
import { getArtistImage } from "@/utils/artistImages.js"; // utilitário das imagens

export default function Pesquisa() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const termoBusca = search.toLowerCase();

  // 🔑 cria um mapa pra evitar duplicados (música + artista)
  const resultadosUnicos = [];
  const seen = new Set();

  for (const m of dadosHistory) {
    const nomeMusica = m.master_metadata_track_name?.toLowerCase() || "";
    const nomeArtista = m.master_metadata_album_artist_name?.toLowerCase() || "";
    const nomeAlbum = m.master_metadata_album_album_name?.toLowerCase() || "";

    const chave = `${nomeMusica}-${nomeArtista}`;

    if (
      !seen.has(chave) &&
      (nomeMusica.includes(termoBusca) ||
        nomeArtista.includes(termoBusca) ||
        nomeAlbum.includes(termoBusca))
    ) {
      seen.add(chave);
      resultadosUnicos.push(m);
    }
  }

  // corta para no máximo 10 resultados, mas todos únicos
  const musicasFiltradas = resultadosUnicos.slice(0, 10);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6 text-white">
      {/* Topo */}
      <div className="w-full flex items-center justify-between mb-6 px-2 relative">
        <Voltar />
        <div className="relative z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 no-hover">
            <img
              src="/images/icon.menu.svg"
              alt="Abrir Menu"
              className="w-[50px] h-[40px] cursor-pointer hover:scale-105 transition-transform"
              style={{
                filter:
                  "invert(50%) sepia(100%) saturate(500%) hue-rotate(120deg)",
              }}
            />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-none overflow-hidden z-50">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/perfil"
                    className="block px-4 py-3 text-sm text-purple-700 hover:bg-green-100 active:bg-green-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Caixa de pesquisa */}
      <div className="w-full max-w-md mx-auto mb-6">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white text-black">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Pesquise sons, artistas, álbuns..."
            className="flex-1 outline-none bg-transparent text-black placeholder:text-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Lista */}
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-20">
        {musicasFiltradas.length > 0 ? (
          musicasFiltradas.map((m, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white/90 rounded-lg p-2 shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm overflow-hidden">
                  <img
                    src={getArtistImage(m.master_metadata_album_artist_name)}
                    alt={m.master_metadata_track_name || "Música desconhecida"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-black">
                    {m.master_metadata_track_name || "Música desconhecida"}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {m.master_metadata_album_artist_name || "Artista desconhecido"}
                  </span>
                  <span className="text-gray-400 text-xs italic">
                    {m.master_metadata_album_album_name || "Álbum desconhecido"}
                  </span>
                </div>
              </div>
              <button className="text-gray-500 text-xl">⋮</button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 mt-10">
            Nenhum resultado encontrado.
          </div>
        )}
      </div>
    </div>
  );
}
