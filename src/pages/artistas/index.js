import { useState } from "react";
import Link from "next/link";
import Voltar from "../../components/Voltar.jsx";
import CardEstatistica from "../../components/CardEstatistica.jsx";
import { 
  top100Artistas, 
  totalPlaysDoArtista, 
  totalMusicasDoArtista, 
  totalMinutosDoArtista, 
  horarioMaisOuvido, 
  estacaoMaisOuvidaDoArtista 
} from "../../utils/dataProcessing.js";

export default function Artistas() {
  const artistas = top100Artistas();
  const [artistaSelecionado, setArtistaSelecionado] = useState(
    artistas.length > 0 ? artistas[0].nome : null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfoGeral, setShowInfoGeral] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6">
      {/* Topo */}
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
              <Link href="/perfil" className="block px-4 py-2 hover:bg-green-100">
                Perfil
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Top Artistas */}
      <div className="flex items-center w-full max-w-md mb-4">
        <div className="mr-2 transform rotate-45 border-b-2 border-black w-4"></div>
        <span className="font-semibold text-lg text-black">Top Artistas</span>
      </div>

      {/* Scroll horizontal de artistas */}
      <div className="flex gap-4 overflow-x-auto w-full max-w-md mb-6">
        {artistas.map((artista) => (
          <div
            key={artista.nome}
            className={`flex flex-col items-center cursor-pointer ${artistaSelecionado === artista.nome
              ? "bg-green-100 rounded-full p-1"
              : ""
            }`}
            onClick={() => setArtistaSelecionado(artista.nome)}
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm">{artista.nome[0]}</span>
            </div>
            <span className="text-sm mt-1">{artista.nome}</span>
          </div>
        ))}
      </div>

      {/* Card do artista selecionado */}
      {artistaSelecionado && (
        <div className="flex flex-col w-full max-w-md bg-white p-4 rounded-3xl shadow-md gap-4">
          {/* Imagem e nome */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{artistaSelecionado}</h2>
              <span className="text-green-500 text-sm">Artista</span>
            </div>
            <div className="w-20 h-20 bg-gray-300 rounded-2xl flex items-center justify-center">
              <span>{artistaSelecionado[0]}</span>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-3 w-full">
            <Link
              href={`/artistas/${encodeURIComponent(artistaSelecionado)}`}
              className="flex-1 bg-green-400 text-purple-800 px-4 py-2 rounded-md font-semibold text-center"
            >
              TOP 20 MUSICAS
            </Link>
            <button
              onClick={() => setShowInfoGeral(!showInfoGeral)}
              className="flex-1 bg-purple-300 text-black px-4 py-2 rounded-md font-semibold"
            >
              INFORMAÇÕES GERAIS
            </button>
          </div>

          {/* Card com informações gerais */}
          {showInfoGeral && (
            <div className="w-full flex flex-col gap-2 mt-3">
              <CardEstatistica 
                titulo="Total de plays" 
                descricao={totalPlaysDoArtista(artistaSelecionado)} 
              />
              <CardEstatistica 
                titulo="Total de músicas diferentes" 
                descricao={totalMusicasDoArtista(artistaSelecionado)} 
              />
              <CardEstatistica 
                titulo="Total de minutos ouvidos" 
                descricao={totalMinutosDoArtista(artistaSelecionado)} 
              />
              <CardEstatistica 
                titulo="Horário mais ouvido" 
                descricao={horarioMaisOuvido()} 
              />
              <CardEstatistica 
                titulo="Estação mais ouvida" 
                descricao={estacaoMaisOuvidaDoArtista(artistaSelecionado)} 
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
