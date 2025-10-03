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
  // Adicione a propriedade 'imagem' para cada artista
  const artistas = top100Artistas().map((artista) => ({
    ...artista,
    imagem: artista.nome === "Kendrick" ? "/images/foto.kendrick.svg" : "/images/artista-placeholder.png"
  }));

  const [artistaSelecionado, setArtistaSelecionado] = useState(
    artistas.length > 0 ? artistas[0].nome : null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfoGeral, setShowInfoGeral] = useState(false);

  const artistaAtual = artistas.find(a => a.nome === artistaSelecionado);

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-6 relative max-w-md mx-auto">
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

      {/* OS SEUS FAVORITOS */}
      <div className="text-center mb-4">
          <img
            src="/images/favourites.svg"
            alt="Botão interativo"
            className="w-[215px] h-[71px] hover:scale-105 transition-transform"
          />
      </div>

      {/* Top Artistas */}
      <div className="text-center mb-4">
          <img
            src="/images/icon.top.artista.png"
            alt="Botão interativo"
          />
      </div>

      {/* Scroll horizontal de artistas */}
      <div className="flex gap-4 overflow-x-auto w-full max-w-md mb-6">
        {artistas.map((artista) => (
          <div
            key={artista.nome}
            className={`flex flex-col items-center cursor-pointer ${artistaSelecionado === artista.nome
              ? "ring-2 ring-green-500 rounded-full p-1"
              : ""
            }`}
            onClick={() => setArtistaSelecionado(artista.nome)}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={'/images/kendrick2.svg'}
                alt={'Kendrick Lamar'}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm mt-1">{artista.nome}</span>
          </div>
        ))}
      </div>

      {/* Card do artista selecionado */}
      {artistaAtual && (
        <div className="flex flex-col w-full max-w-md bg-white/20 backdrop-blur-md p-4 rounded-3xl shadow-md gap-4">
          {/* Imagem e nome do artista */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{artistaSelecionado}</h2>
              <span className="text-green-500 text-sm">Artista</span>
            </div>
            <div className="w-20 h-20 rounded-2xl overflow-hidden">
              <img
                src={'/images/kendrick2.svg'}
                alt={artistaSelecionado}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Botões (estilo oval padronizado) */}
          <div className="flex gap-3 w-full">
            <Link
              href={`/artistas/${encodeURIComponent(artistaSelecionado)}`}
              className="flex-1"
            >
              <div className="relative group w-full h-[60px]">
                <button className="w-full h-full rounded-full text-green-400 font-semibold border border-purple-400 shadow-lg relative z-10 transition-transform hover:scale-105 bg-gray-800">
                  TOP 20 MÚSICAS
                </button>
                <div className="absolute inset-0 rounded-full bg-green-700 opacity-0 group-hover:opacity-30 transition-opacity z-0"></div>
              </div>
            </Link>
            <div className="flex-1">
              <div className="relative group w-full h-[60px]">
                <button
                  onClick={() => setShowInfoGeral(!showInfoGeral)}
                  className="w-full h-full rounded-full text-green-400 font-semibold border border-purple-400 shadow-lg relative z-10 transition-transform hover:scale-105 bg-gray-800"
                >
                  INFORMAÇÕES GERAIS
                </button>
                <div className="absolute inset-0 rounded-full bg-green-700 opacity-0 group-hover:opacity-30 transition-opacity z-0"></div>
              </div>
            </div>
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
