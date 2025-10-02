import { useState } from "react";
import Link from "next/link";
import Voltar from "@/components/Voltar";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6"
      style={{ backgroundImage: "url('https://c.pxhere.com/photos/b1/ab/Abstract_Background_Backgrounds_energy_Science-1612259.jpg!d')" }}
    >
      {/* Topo com botão Voltar e menu 3 linhas */}
      <div className="w-full flex justify-between items-center mb-8 relative">
        {/* Botão Voltar */}
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
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black leading-snug">
          #CLIQUE E <br /> DESCUBRA
        </h1>
        <p className="text-green-500 text-lg mt-2">sua órbita musical</p>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <Link href="/surpreenda">
          <button className="w-full py-4 rounded-full bg-white text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 transition-colors">
            ME SURPREENDA
          </button>
        </Link>
        <Link href="/artistas">
          <button className="w-full py-4 rounded-full bg-white text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 transition-colors">
            SOBRE OS ARTISTAS
          </button>
        </Link>
        <Link href="/ranking">
          <button className="w-full py-4 rounded-full bg-white text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 transition-colors">
            RANKING
          </button>
        </Link>
      </div>
    </div>
  );
}
