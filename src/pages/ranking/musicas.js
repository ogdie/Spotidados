import { useState, useEffect } from "react";
import Link from "next/link";
import Voltar from "../../components/Voltar.jsx";
import ListaRanking from "../../components/ListaRanking.jsx";
import FiltroPeriodo from "../../components/FiltroPeriodo.jsx";
import { top100Musicas } from "../../utils/dataProcessing.js";

export default function RankingMusicas() {
  const [periodo, setPeriodo] = useState("sempre");
  const [lista, setLista] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Carrega top 100 músicas de acordo com o período
  useEffect(() => {
    setLista(top100Musicas(periodo));
  }, [periodo]);

  // Música em destaque (a primeira da lista)
  const musicaDestaque = lista[0];

  return (
    <div
      className="flex flex-col items-center min-h-screen px-4 pt-6 bg-cover bg-center bg-no-repeat text-white"
    >
      {/* Topo: Voltar + Dropdown */}
      <div className="w-full flex items-center justify-between mb-6 px-2 max-w-md mx-auto">
        <Voltar href="/ranking" />
        <div className="relative z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <img
              src="/images/icon.menu.svg"
              alt="Abrir Menu"
              className="w-[50px] h-[40px] cursor-pointer hover:scale-105 transition-transform"
            />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-none overflow-hidden z-50 transition ease-out duration-200 transform origin-top-right">
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

      {/* Música em destaque */}
      {musicaDestaque && (
        <div className="flex flex-col items-center gap-2 mb-4">
          {/* Placeholder para SVG #TOP1 */}
          <div className="w-30h-20">
            <img
              src="/images/top1.svg" // <- substitua pelo seu SVG real
              alt="#TOP1"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-green-500 text-xl mt-2 self-start ml-22">MÚSICA</span>
          <div className="flex items-center gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold leading-snug text-center font-modern text-gradient">
                {musicaDestaque.nome}
              </h1>
              {musicaDestaque.artista && (
                <p className="text-sm mt-1 text-center font-modern text-gradient-subtle">{musicaDestaque.artista}</p>
              )}
            </div>

            {/* Placeholder para imagem do artista */}
            <div className="relative w-[240px] h-60 overflow-visible">
              <img
                src="/images/7empest.svg"
                alt={musicaDestaque.nome}
                className="rounded-3xl object-contain w-full h-full"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Três botões ovais: Artistas, Músicas, Álbuns */}
      <div className="flex flex-col gap-4 w-full items-center max-w-md mb-4">
        {[
          { href: "/ranking/artistas", label: "ARTISTAS" },
          { href: "/ranking/musicas", label: "MÚSICAS" },
          { href: "/ranking/albuns", label: "ÁLBUNS" },
        ].map(({ href, label }) => (
          <Link href={href} key={label} className="w-full">
            <div className="relative group w-full h-[60px]">
              <button className="w-full h-full rounded-full text-green-400 font-semibold border border-purple-400 shadow-lg relative z-10 transition-transform hover:scale-105 bg-gray-800 transition-colors hover:bg-green-500/10 active:bg-green-500/15">
                {label}
              </button>
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-25 group-active:opacity-40 transition-opacity z-0"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lista scroll vertical das músicas */}
      <div className="w-full max-w-md overflow-y-auto h-[60vh] mb-4">
        <ListaRanking itens={lista} tipo="musicas" />
      </div>

      {/* Filtro de período com botões menores */}
      <div className="px-4 w-full max-w-md mx-auto mb-6">
        <FiltroPeriodo periodo={periodo} setPeriodo={setPeriodo} />
      </div>
    </div>
  );
}
