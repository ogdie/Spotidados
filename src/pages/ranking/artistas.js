import { useState, useEffect } from "react";
import Link from "next/link";
import Voltar from "../../components/Voltar.jsx";
import ListaRanking from "../../components/ListaRanking.jsx";
import FiltroPeriodo from "../../components/FiltroPeriodo.jsx";
import { top100Artistas } from "../../utils/dataProcessing.js";

export default function RankingArtistas() {
  const [periodo, setPeriodo] = useState("sempre");
  const [lista, setLista] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Carrega top 100 artistas de acordo com o período
  useEffect(() => {
    setLista(top100Artistas(periodo));
  }, [periodo]);

  // Artista em destaque (o primeiro da lista)
  const artistaDestaque = lista[0];

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background2.png')" }}
    >
      {/* Container centralizado */}
      <div className="flex flex-col items-center px-4 pt-6 w-full max-w-md mx-auto">
        {/* Topo: Voltar + Dropdown */}
        <div className="w-full flex justify-between items-center mb-6 relative">
          <Voltar href="/ranking" />
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

        {/* Artista em destaque */}
        {artistaDestaque && (
          <div className="flex flex-col items-center gap-2 mb-4">
            {/* Placeholder para SVG #TOP1 */}
            <div className="w-20 h-20">
              <img
                src="/images/top1.svg" // <- substitua pelo SVG real
                alt="#TOP1"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-green-500 text-lg mt-2">artista</span>
            <div className="flex items-center gap-4">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold leading-snug text-center">
                  {artistaDestaque.nome.split(" ")[0]} <br />
                  {artistaDestaque.nome.split(" ").slice(1).join(" ")}
                </h1>
              </div>
              <div className="relative w-[160px] h-40 overflow-visible">
                <img
                  src="/images/foto.kendrick.svg"
                  alt={artistaDestaque.nome}
                  className="rounded-3xl object-contain w-full h-full"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Três botões ovais: Artistas, Músicas, Álbuns */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["Artistas", "Músicas", "Álbuns"].map((btn, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full border border-orange-400 transition-colors ${
                btn === "Artistas"
                  ? "bg-orange-400 text-white hover:bg-orange-500"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Lista scroll vertical de artistas */}
      <div className="w-full max-w-md h-[60vh] overflow-y-auto px-4 mx-auto mb-4">
        <ListaRanking itens={lista} tipo="artistas" />
      </div>

      {/* Filtro de período */}
      <div className="px-4 w-full max-w-md mx-auto mb-6">
        <FiltroPeriodo periodo={periodo} setPeriodo={setPeriodo} />
      </div>
    </div>
  );
}
