import { useState } from "react";
import Link from "next/link";
import Voltar from "../../components/Voltar.jsx";
import { top100Artistas } from "../../utils/dataProcessing.js";

export default function Artistas() {
  const artistas = top100Artistas();
  const [artistaSelecionado, setArtistaSelecionado] = useState(
    artistas.length > 0 ? artistas[0].nome : null
  );
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6">
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-6 relative">
        <Voltar />
        {/* Menu 3 linhas */}
        <div className="flex flex-col gap-1 relative">
          <button
            className="flex flex-col justify-center items-center p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black rounded block"></span>
            <span className="w-6 h-0.5 bg-black rounded block"></span>
            <span className="w-6 h-0.5 bg-black rounded block"></span>
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded border border-gray-200 z-50">
              <Link
                href="/perfil"
                className="block px-4 py-2 hover:bg-green-100"
              >
                Perfil
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Texto principal */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold leading-snug">
          #OS SEUS <br /> FAVORITOS
        </h1>
        <p className="text-green-500 text-lg mt-2">os imortais do seu fone</p>
      </div>

      {/* Top Artistas */}
      <div className="flex items-center w-full max-w-md mb-4">
        <div className="mr-2 transform rotate-45 border-b-2 border-black w-4"></div>
        <span className="font-semibold text-lg">Top Artistas</span>
      </div>

      {/* Scrol horizontal de artistas */}
      <div className="flex gap-4 overflow-x-auto w-full max-w-md mb-6">
        {artistas.map((artista) => (
          <div
            key={artista.nome}
            className={`flex flex-col items-center cursor-pointer ${
              artistaSelecionado === artista.nome
                ? "bg-green-100 rounded-full p-1"
                : ""
            }`}
            onClick={() => setArtistaSelecionado(artista.nome)}
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              {/* Aqui poderia colocar a imagem do artista, se tiver */}
              <span className="text-sm">{artista.nome[0]}</span>
            </div>
            <span className="text-sm mt-1">{artista.nome}</span>
          </div>
        ))}
      </div>

      {/* Card do artista selecionado */}
      {artistaSelecionado && (
        <div className="flex items-center w-full max-w-md justify-between bg-white p-4 rounded-3xl shadow-md">
          <Link
            href={`/artistas/${encodeURIComponent(artistaSelecionado)}`}
            className="bg-blue-200 px-4 py-2 rounded-md font-semibold"
          >
            TOP 20 MUSICAS
          </Link>
          <div className="w-20 h-20 bg-gray-300 rounded-2xl flex items-center justify-center">
            {/* Imagem do artista maior */}
            <span>{artistaSelecionado[0]}</span>
          </div>
        </div>
      )}
    </div>
  );
}
