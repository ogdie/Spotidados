import { useState } from "react";
import Link from "next/link";
import Voltar from "@/components/Voltar";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat text-black px-4 pt-6"
      style={{
        backgroundImage: "url('/images/background2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TOPO */}
      <div className="w-full flex items-center justify-between mb-8 px-4 relative">
        {/* Botão Voltar - Esquerda */}
        <div>
          <Voltar />
        </div>

        {/* Logo - Centro */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/images/logo.spot.svg"
            alt="Logo Spotidados"
            className="w-[100px] h-[100px]"
          />
        </div>

        {/* Menu com imagem SVG - Direita */}
        <div className="relative z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
          >
            <img
              src="/images/icon.menu.svg"
              alt="Abrir Menu"
              className="w-[40px] h-[40px] cursor-pointer hover:scale-105 transition-transform"
            />
          </button>

          {/* Dropdown estilizado */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/perfil"
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-green-100 hover:text-green-700 transition-colors"
                  >
                    Perfil
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* CLIQUE E DESCUBRA */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white leading-snug">
           <img
              src="/images/clique.descubra.svg"
              alt="clique"
              className="w-[50x] h-[50px] cursor-pointer hover:scale-105 transition-transform"
            />
          <span className="block text-green-400 text-lg mt-2">TEXTO ALTERAR</span>
        </h1>
      </div>

      {/* Botões principais com efeito hover */}
      <div className="flex flex-col gap-6 w-full max-w-xs mt-12">
        {[
          { href: "/surpreenda", label: "ME SURPREENDA" },
          { href: "/artistas", label: "SOBRE OS ARTISTAS" },
          { href: "/ranking", label: "RANKING" },
        ].map(({ href, label }) => (
          <Link
            href={href}
            key={label}
            className="relative group w-full block"
          >
            <button className="w-full py-4 rounded-full bg-white/80 text-green-700 font-semibold border border-yellow-500 shadow-md relative z-10">
              {label}
            </button>
            <div className="absolute inset-0 rounded-full bg-green-900/30 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
