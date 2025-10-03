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

export default function Surpreenda() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cards = [
    { title: "Total de reproduções", value: contarTotalPlays(), color: "green" },
    { title: "Média diária de plays", value: mediaDiariaPlays(), color: "purple" },
    { title: "Número de músicas ouvidas", value: contarTotalMusicas(), color: "purple" },
    { title: "Estação mais ouvida", value: estacaoMaisOuvida(), color: "green" },
    { title: "Hora do dia mais ouvida", value: horarioMaisOuvido(), color: "green" },
    { title: "Artista mais ouvido", value: artistaMaisOuvido(), color: "purple" },
    { title: "Primeira música no histórico", value: obterPrimeiraMusica(), color: "green" },
  ];

  const colorMap = {
    green: "bg-green-200",
    purple: "bg-purple-200",
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6"
      style={{ backgroundImage: "url('/background-placeholder.png')" }}>

      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-6 relative">
        <Voltar />
        <div className="flex flex-col gap-1 relative">
          <button
            className="flex flex-col justify-center items-center p-1"
            onClick={() => setMenuOpen(prev => !prev)}
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

      {/* TUDO SOBRE SEUS PLAYS */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black leading-snug">
          TUDO SOBRE SEUS PLAYS
        </h1>
        <p className="text-green-500 text-lg mt-2 text-left">você em dados</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
        {cards.slice(0, 2).map((card, index) => (
          <div key={index} className={`border-2 border-orange-400 rounded-full p-4 flex flex-col items-center justify-center ${colorMap[card.color]}`}>
            <span className="text-2xl font-bold text-purple-700">{card.value}</span>
            <span className="text-center mt-2 text-green-800">{card.title}</span>
          </div>
        ))}
        {cards.slice(2, 4).map((card, index) => (
          <div key={index + 2} className={`border-2 border-orange-400 rounded-full p-4 flex flex-col items-center justify-center ${colorMap[card.color]}`}>
            <span className="text-2xl font-bold text-purple-700">{card.value}</span>
            <span className="text-center mt-2 text-green-800">{card.title}</span>
          </div>
        ))}
        {cards.slice(4, 6).map((card, index) => (
          <div key={index + 4} className={`border-2 border-orange-400 rounded-full p-4 flex flex-col items-center justify-center ${colorMap[card.color]}`}>
            <span className="text-2xl font-bold text-purple-700">{card.value}</span>
            <span className="text-center mt-2 text-green-800">{card.title}</span>
          </div>
        ))}
        {/* Último card ocupando duas colunas */}
        <div className={`border-2 border-orange-400 rounded-full p-4 flex flex-col items-center justify-center ${colorMap[cards[6].color]} col-span-2`}>
          <span className="text-2xl font-bold text-purple-700">{cards[6].value}</span>
          <span className="text-center mt-2 text-green-800">{cards[6].title}</span>
        </div>
      </div>
    </div>
  );
}
