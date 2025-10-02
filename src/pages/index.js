import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat text-black px-4 pt-6"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-6 relative">
        <div className="flex items-center gap-2">
          <img
            src="/logo-placeholder.png"
            alt="Logo SPIRA"
            className="w-10 h-10"
          />
          <span className="font-bold text-xl">SPIRA</span>
        </div>

        <div className="flex flex-col gap-1 relative">
          <button
            className="flex flex-col justify-center items-center p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black rounded block"></span>
            <span className="w-6 h-0.5 bg-black rounded block"></span>
            <span className="w-6 h-0.5 bg-black rounded block"></span>
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
        O DISCO ESTÁ GIRANDO...SÓ FALTA VOCÊ DAR O PLAY!
      </p>

      {/* Barra de música */}
      <div className="w-full bg-gray-300 h-1 rounded-full mb-6">
        <div className="bg-green-500 h-1 rounded-full w-1/3" ></div>

      </div>

      {/* Controles com SVG  codigo de cada botao do inicio --- FALTA ADC MINUTOS DA PAGINA INICIAL, TEMPORIZADOR CONFORME FIGMA*/}
      <div className="mb-10">
        <Link href="/menu">
          <svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="87.3881" y="0.57959" width="45.2805" height="47.4203" rx="22.6402" fill="#40D551" />
            <path d="M106.667 32.7575C106.115 33.1126 105.388 32.716 105.388 32.0593V17.0999C105.388 16.4432 106.115 16.0466 106.667 16.4017L118.302 23.8814C118.81 24.2081 118.81 24.951 118.302 25.2778L106.667 32.7575Z" fill="#003306" />
            <path d="M150.592 17.1126C150.592 16.4173 151.393 16.0278 151.94 16.4573L161.078 23.6344C161.503 23.968 161.503 24.6114 161.078 24.9451L151.94 32.1222C151.393 32.5517 150.592 32.1622 150.592 31.4669V17.1126Z" fill="black" fillOpacity="0.75" />
            <path d="M164.742 16.8804V31.6992" stroke="grey" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M69.4646 31.4668C69.4646 32.1621 68.6633 32.5517 68.1165 32.1222L58.9788 24.9451C58.554 24.6114 58.554 23.968 58.9788 23.6344L68.1165 16.4573C68.6633 16.0278 69.4646 16.4173 69.4646 17.1126V31.4668Z" fill="black" fillOpacity="0.75" />
            <path d="M55.3144 31.6991V16.8803" stroke="grey" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="196" y="12" width="24" height="25">
              <rect x="196.816" y="12.4347" width="22.6402" height="23.7101" fill="grey" fillOpacity="0.75" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M203.419 34.169L199.646 30.2173L203.419 26.2656L204.74 27.6981L203.278 29.2294H212.853V25.2777H214.739V31.2052H203.278L204.74 32.7365L203.419 34.169ZM201.533 23.3018V17.3743H212.994L211.532 15.843L212.853 14.4105L216.626 18.3622L212.853 22.3139L211.532 20.8814L212.994 19.3501H203.419V23.3018H201.533Z" fill="black" fillOpacity="0.25" />
            </g>
            <mask id="mask1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="12" width="24" height="25">
              <rect x="0.600563" y="12.4347" width="22.6402" height="23.7101" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask1)">
              <path d="M13.8073 32.1931V30.2173H16.26L13.2649 27.0806L14.6092 25.6728L17.5807 28.7848V26.2656H19.4674V32.1931H13.8073ZM5.6946 32.1931L4.37392 30.81L16.26 18.3622H13.8073V16.3864H19.4674V22.3139H17.5807V19.7453L5.6946 32.1931ZM9.25572 22.8819L4.37392 17.7694L5.6946 16.3864L10.5764 21.4989L9.25572 22.8819Z" fill="black" fillOpacity="0.75" />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
