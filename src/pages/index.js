import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat text-black px-4 pt-6"
      style={{ backgroundImage: "url('/background-placeholder.png')" }}
    >
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-6 relative">
        {/* Logo e nome da empresa */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-placeholder.png"
            alt="Logo SPIRA"
            className="w-10 h-10"
          />
          <span className="font-bold text-xl">SPIRA</span>
        </div>

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

      {/* Usuário */}
      <div className="w-full flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">Aurora Maria</span>
          <span className="text-green-500 text-sm">music is coming!</span>
        </div>
        <img
          src="/user-placeholder.png"
          alt="Foto do usuário"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Vinil */}
      <div className="mb-4">
        <img
          src="/vinil-placeholder.gif"
          alt="Vinil tocando"
          className="w-72 h-72 mx-auto"
        />
      </div>

      {/* Texto abaixo do vinil */}
      <p className="text-green-500 text-center mb-4">
        O disco já está girando... Só falta você dar o Play!
      </p>

      {/* Barra de música */}
      <div className="w-full bg-gray-300 h-1 rounded-full mb-6">
        <div className="bg-green-500 h-1 rounded-full w-1/3"></div>
      </div>

      {/* Controles estilo Spotify */}
      <div className="flex justify-center items-center gap-6 mb-10">
        <button className="text-black text-xl">🔀</button>
        <button className="text-black text-2xl">⏮️</button>
        <Link href="/menu">
          <button className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
            ▶️
          </button>
        </Link>
        <button className="text-black text-2xl">⏭️</button>
        <button className="text-black text-xl">🔀</button>
      </div>
    </div>
  );
}
