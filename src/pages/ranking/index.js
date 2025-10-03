import { useState } from "react";
import Voltar from "@/components/Voltar.jsx";
import Link from "next/link";

export default function Ranking() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-4 pt-6 text-white"
    >
      {/* TOPO */}
      <div className="w-full flex items-center justify-between mb-8 px-2">
        <Voltar />
        <div className="relative z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 no-hover">
            < img
              src="/images/icon.menu.svg"
              alt="Abrir Menu"
              className="w-[50px] h-[40px] cursor-pointer hover:scale-105 transition-transform invert sepia saturate-200 hue-rotate-90"
              style={{ filter: "invert(50%) sepia(100%) saturate(500%) hue-rotate(120deg)" }}
            />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-none overflow-hidden transition ease-out duration-200 transform origin-top-right z-50">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/perfil"
                    className="block px-4 py-3 text-sm text-purple-700 hover:bg-green-100 active:bg-green-200 transition-colors"
                  >
                    Perfil
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* TÍTULO RANKING */}
      <div className="w-full flex justify-start mb-4">
        <img
          src="/images/ranking.svg"
          alt="Ranking"
          className="w-[200px] h-[50px] cursor-pointer hover:scale-105 transition-transform"
        />
      </div>

      {/* BOTÕES PRINCIPAIS */}
      <div className="flex flex-col gap-6 w-full items-center max-w-md mt-20">
        {[
          { href: "/ranking/artistas", label: "#TOP 100 ARTISTAS" },
          { href: "/ranking/musicas", label: "#TOP 100 MÚSICAS" },
          { href: "/ranking/albuns", label: "#TOP 100 ÁLBUNS" },
        ].map(({ href, label }) => (
          <Link href={href} key={label} className="w-full">
            <div className="relative group w-full h-[80px]">
              <button
                className="w-full h-full rounded-full text-green-400 font-semibold border border-purple-400 shadow-lg relative z-10 transition-transform hover:scale-105 bg-gray-800 transition-colors hover:bg-green-500/10 active:bg-green-500/15"
              >
                {label}
              </button>
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-25 group-active:opacity-40 transition-opacity z-0"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
