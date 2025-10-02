import { useState } from "react";
import Link from "next/link";
import Voltar from "@/components/Voltar";
import dadosHistory from "../data/history.json";

export default function Pesquisa() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // controla o dropdown

  // Pega apenas as 10 primeiras músicas do JSON
  const musicasFiltradas = dadosHistory
    .slice(0, 10)
    .filter((m) =>
      m.master_metadata_track_name?.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6"
      style={{ backgroundImage: "url('/background-placeholder.png')" }}
    >
      {/* Topo com botão Voltar e dropdown de perfil */}
      <div className="w-full flex justify-between items-center mb-6 relative">
        <Voltar />

        {/* Menu 3 linhas com dropdown */}
        <div className="flex flex-col gap-0.5 relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="w-3 h-0.5 bg-black rounded block"></span>
            <span className="w-3 h-0.5 bg-black rounded block"></span>
            <span className="w-3 h-0.5 bg-black rounded block"></span>
          </button>

          {/* Dropdown só aparece quando menuOpen === true */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded border border-gray-200 z-50">
              <Link
                href="/perfil"
                className="block px-4 py-2 hover:bg-green-100"
                onClick={() => setMenuOpen(false)} // fecha ao clicar
              >
                Perfil
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Caixa de pesquisa */}
      <div className="w-full max-w-md mx-auto mb-6">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Pesquise sons, artistas, álbuns..."
            className="flex-1 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de músicas */}
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-20">
        {musicasFiltradas.map((m, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white rounded-lg p-2 shadow"
          >
            <div className="flex items-center gap-3">
              {/* Placeholder de capa */}
              <div className="w-12 h-12 bg-gray-300 rounded-sm flex-shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-semibold text-black">
                  {m.master_metadata_track_name || "Música desconhecida"}
                </span>
                <span className="text-gray-500 text-sm">
                  {m.master_metadata_album_artist_name || "Artista desconhecido"}
                </span>
              </div>
            </div>
            {/* Dropdown / 3 pontinhos */}
            <button className="text-gray-500 text-xl">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
}
