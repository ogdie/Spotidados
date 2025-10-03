import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat text-black px-4 pt-6"
    >
      {/* Topo */}
      <div className="w-full flex items-center justify-between mb-6 px-4 relative">
        {/* Logo - Esquerda */}
        <div>
          <img
            src="/images/logo.spot.svg"
            alt="Logo Spotidados"
            className="w-[140px] h-[140px]"
          />
        </div>

        {/* Botão Menu - Direita */}
        <div className="ml-auto z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 no-hover">
          <img
              src="/images/icon.menu.svg"
              alt="Abrir Menu"
              className="w-[50px] h-[40px] cursor-pointer hover:scale-105 transition-transform invert sepia saturate-200 hue-rotate-90"
              style={{ filter: "invert(50%) sepia(100%) saturate(500%) hue-rotate(120deg)" }}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-none z-50 transition ease-out duration-200 transform origin-top-right">
              <Link
                href="/perfil"
                className="block px-4 py-3 text-sm text-purple-700 hover:bg-green-100 active:bg-green-200 transition-colors"
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
        <Link href="/perfil">
          <img
            src="/images/photo.profile.svg"
            alt="Foto do usuário"
            className="w-16 h-16 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Seção central com vinil, texto e controles */}
      <div className="mt-20 w-full max-w-md">
        {/* Vinil */}
        <div className="mb-4">
          <video
            src="/images/videovinil.mp4"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
            className="h-72 mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Texto abaixo do vinil */}
        <p className="text-green-400 text-xs text-center mx-auto max-w-sm leading-tight mb-4">
          O DISCO ESTÁ GIRANDO... SÓ FALTA VOCÊ DAR O PLAY!
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
              className="w-60 sm:w-28 md:w-32 lg:w-36 h-auto mx-auto cursor-pointer transition-transform hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
