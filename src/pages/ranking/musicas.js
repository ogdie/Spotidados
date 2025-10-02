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
    <div className="flex flex-col items-center min-h-screen px-4 pt-6">
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

      {/* Música em destaque: #TOP1 + texto verde "música" + nome + foto do artista */}
      {musicaDestaque && (
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="text-black font-bold text-3xl">#TOP1</span>
          <span className="text-green-500 text-lg">música</span>
          <div className="flex items-center gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold leading-snug text-center">
                {musicaDestaque.nome}
              </h1>
            </div>
            <img
              src="/images/top1.svg" // arrumar fundo *Substituir pela foto do artista se disponível
              alt={musicaDestaque.nome}
              className="width:199 height=50" //SVG IMAGEM IMPORTADA TAMANHO.
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
      )}

      {/* Três botões ovais: Artistas, Músicas, Álbuns */}
      <div className="flex gap-2 mb-4">
        {["Artistas", "Músicas", "Álbuns"].map((btn, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full border border-orange-400 transition-colors ${
              btn === "Músicas"
                ? "bg-orange-400 text-white hover:bg-orange-500"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Lista scroll vertical das músicas */}
      <div className="w-full max-w-xl overflow-y-auto h-[60vh] mb-4">
        <ListaRanking itens={lista} tipo="musicas" />
      </div>

      {/* Filtro de período */}
      <FiltroPeriodo periodo={periodo} setPeriodo={setPeriodo} />
    </div>
  );
}
