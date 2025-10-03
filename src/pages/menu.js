import { useState } from "react";
import Link from "next/link";
import Voltar from "@/components/Voltar";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-4 pt-6 text-white"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TOPO */}
      
      <div className="w-full flex items-center justify-between mb-8 px-2">
        <Voltar />
        <div className="relative z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <img
              src="/images/icon.menu.svg"
              alt="Abrir Menu"
              className="w-[50px] h-[40px] cursor-pointer hover:scale-105 transition-transform"
            />
            
            
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/perfil"
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-purple-100 hover:text-purple-700 transition-colors"
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
      <div className="w-full flex justify-start mb-4">
        <img
          src="/images/clique.descubra.svg"
          alt="clique"
          className="w-[200px] h-[50px] cursor-pointer hover:scale-105 transition-transform"
        />
      </div>

      {/* FRASE */}
      <div className="text-left w-full max-w-md mb-8">
        <span className="text-green-500 text-sm">music is coming!</span>       {/* ARRUMAR ALINHAMENTO */}

      </div>

     {/* BOTÕES PRINCIPAIS */}
<div className="flex flex-col gap-6 w-full items-center max-w-md mt-20">
  {[
    { href: "/surpreenda", label: "ME SURPREENDA" },
    { href: "/artistas", label: "SOBRE OS ARTISTAS" },
    { href: "/ranking", label: "RANKING" },
  ].map(({ href, label }) => (
    <Link href={href} key={label} className="w-full">
      <div className="relative group w-full h-[80px]">
        <button
          className="w-full h-full rounded-full text-green-400 font-semibold border border-purple-400 shadow-lg relative z-10 transition-transform hover:scale-105 bg-gray-800"
        >
          {label}
        </button>
        <div className="absolute inset-0 rounded-full bg-green-700 opacity-0 group-hover:opacity-30 transition-opacity z-0"></div>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
}
