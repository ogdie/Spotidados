import { useState } from "react";
import Link from "next/link";

export default function Home() {
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
      {/* Topo */}
      <div className="w-full flex items-center justify-between mb-6 px-4 relative">

        {/* Logo - Esquerda */}
        <div>
          <img
            src="/images/logo.spot.svg"
            alt="Logo Spotidados"
            className="w-[100px] h-[100px]"
          />
        </div>

        {/* Botão Menu - Direita */}
        <div className="ml-auto z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
          >
            <img
              src="/images/icon.menu.svg"
              alt="Botão Menu"
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </button>


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
          <span className="text-white text-lg">Aurora Maria</span>
          <span className="text-green-500 text-sm">music is coming!</span>
        </div>
        <img
          src="/images/photo.profile.svg"
          alt="Foto do usuário"
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Vinil */}
      <div className="mb-4">
        <video
          src="/images/videovinil.mp4"
          controls
          autoPlay
          loop
          muted
          className="h-72 mx-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Texto abaixo do vinil */}
      <p className="text-green-500 text-center mb-4">
        O DISCO ESTÁ GIRANDO...SÓ FALTA VOCÊ DAR O PLAY!
      </p>

      {/* Barra de música */}
      <div className="w-full bg-gray-300 h-1 rounded-full mb-6">
        <div className="bg-green-500 h-1 rounded-full w-1/3"></div>
      </div>

      {/* Controles com SVG */}
      <div className="mb-10">
        <Link href="/menu">
          <img
            src="/images/playbutton.png"
            alt="Botão Play"
            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto mx-auto cursor-pointer transition-transform hover:scale-105"
          />
        </Link>
      </div>
    </div>
  );
}
