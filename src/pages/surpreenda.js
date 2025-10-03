import { useState } from "react";
import Link from "next/link";
import Voltar from "../components/Voltar.jsx";
import {
  contarTotalPlays,
  contarTotalMusicas,
  mediaDiariaPlays,
  estacaoMaisOuvida,
  horarioMaisOuvido,
  artistaMaisOuvido,
  obterPrimeiraMusica
} from "../utils/dataProcessing.js";

function createSlug(text) {
  if (typeof text !== 'string' || text === null) return 'default-path';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function Surpreenda() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cards = [
    { title: "TOTAL DE REPRODUÇÕES", value: contarTotalPlays() },
    { title: "MÉDIA DIÁRIA DE PLAYS", value: mediaDiariaPlays() },
    { title: "NÚMERO DE MÚSICAS OUVIDAS", value: contarTotalMusicas() },
    { title: "ESTAÇÃO MAIS OUVIDA", value: estacaoMaisOuvida() },
    { title: "HORA DO DIA MAIS OUVIDA", value: horarioMaisOuvido() },
    { title: "ARTISTA MAIS OUVIDO", value: artistaMaisOuvido() },
    { title: "PRIMEIRA MÚSICA NO HISTÓRICO", value: obterPrimeiraMusica() },
  ];

  return (
    <div
      className="flex flex-col items-center min-h-screen px-4 pt-6 text-white"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-6 px-2">
        <Voltar />
        <div className="relative z-50">
          <button onClick={() => setMenuOpen(prev => !prev)} className="p-2">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white rounded"></span>
              <span className="block w-6 h-0.5 bg-white rounded"></span>
              <span className="block w-6 h-0.5 bg-white rounded"></span>
            </div>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded border border-gray-200 z-50">
              <Link href="/perfil" className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-700">
                Perfil
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Título */}
      <div className="flex justify-start items-center w-full mb-4">
        <img
          src="/images/about.plays.svg"
          alt="plays"
          className="w-[200px] h-[50px] cursor-pointer hover:scale-105 transition-transform"
        />
      </div>

      {/* Cards estilizados como botões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md mb-8">
        {cards.map((card, index) => (
          <Link href={`/surpreenda/${createSlug(card.title)}`} key={index} className="group">
            <div className="relative w-full h-[86px]">
              <button
                className="w-full h-full rounded-full text-green-400 font-semibold border border-purple-400 shadow-lg relative z-10 transition-transform hover:scale-105 bg-gray-800"
              >
                <div className="text-center">
                  <div className="text-xl font-bold">{card.value}</div>
                  <div className="text-xs mt-1 uppercase">{card.title}</div>
                </div>
              </button>
              <div className="absolute inset-0 rounded-full bg-green-700 opacity-0 group-hover:opacity-30 transition-opacity z-0"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
