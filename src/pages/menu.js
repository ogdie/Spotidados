import { useState } from "react";
import Link from "next/link";
import Voltar from "@/components/Voltar";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/')",// deixei sem fundo pra gente ver a foto, que ta ruim a resolução
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
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
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded border border-purple-200 z-50">
              <Link
                href="/perfil"
                className="block px-4 py-2 hover:bg-green-400 text-purple-900 font-bold"
              >
                Perfil
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CLIQUE E DESCUBRA  */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black leading-snug">
          <img
            src="/images/clique.descubra.svg"
            alt="Botão interativo"
            className="w-[215px] h-[71px] hover:scale-105 transition-transform"
          />
        </h1>
        <p className="text-green-500 text-lg mt-2 text-left">sua órbita musical</p>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <Link href="/surpreenda">
          <button className="w-full py-4 rounded-full bg-white text-green-700 font-semibold border border-orange-400 hover:bg-orange-400 transition-colors">
            ME SURPREENDA
          </button>
        </Link>
        <Link href="/artistas">
          <button className="w-full py-4 rounded-full bg-white text-green-700 font-semibold border border-orange-400 hover:bg-orange-400 transition-colors">
            SOBRE OS ARTISTAS
          </button>
        </Link>
        <Link href="/ranking">
          <button className="w-full py-4 rounded-full bg-white text-green-700 font-semibold border border-orange-400 hover:bg-orange-400 transition-colors">
            RANKING
          </button>
        </Link>
      </div>
    </div>
  );
}
