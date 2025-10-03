import { useState, useEffect } from "react";
import Link from "next/link";
import Voltar from "../../components/Voltar.jsx";
import ListaRanking from "../../components/ListaRanking.jsx";
import FiltroPeriodo from "../../components/FiltroPeriodo.jsx";
import { top100Albuns } from "../../utils/dataProcessing.js";

export default function RankingAlbuns() {
  const [periodo, setPeriodo] = useState("sempre");
  const [lista, setLista] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Carrega top 100 álbuns de acordo com o período
  useEffect(() => {
    setLista(top100Albuns(periodo));
  }, [periodo]);

  // Álbum em destaque (o primeiro da lista)
  const albumDestaque = lista[0];

  return (
    <div
      className="flex flex-col items-center min-h-screen px-4 pt-6 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/background.png')" }}
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

      {/* Álbum em destaque */}
      {albumDestaque && (
        <div className="flex flex-col items-center gap-2 mb-4">
          {/* Placeholder para SVG #TOP1 */}
          <div className="w-20 h-20">
            <img
              src="/images/top1.svg" // <- substitua pelo SVG real
              alt="#TOP1"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-green-500 text-lg">álbum</span>

          <div className="flex items-center gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold leading-snug text-center">
                {albumDestaque.nome}
              </h1>
            </div>

            {/* Placeholder para capa do álbum */}
            <div className="relative w-[160px] h-40 overflow-visible">
              <img
                src="/images/damn.photo.svg"
                alt={albumDestaque.nome}
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
              <button className="w-full h-full rounded-full text-green-400 font-semibold border border-purple-400 shadow-lg relative z-10 transition-transform hover:scale-105 bg-gray-800">
                {label}
              </button>
              <div className="absolute inset-0 rounded-full bg-green-700 opacity-0 group-hover:opacity-30 transition-opacity z-0"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lista scroll vertical dos álbuns */}
      <div className="w-full max-w-md overflow-y-auto h-[60vh] mb-4">
        <ListaRanking itens={lista} tipo="albuns" />
      </div>

      {/* Filtro de período com botões menores */}
      <div className="px-4 w-full max-w-md mx-auto mb-6">
        <FiltroPeriodo periodo={periodo} setPeriodo={setPeriodo} />
      </div>
    </div>
  );
}
