import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Voltar from "../../components/Voltar.jsx";
import { top100Artistas, top20MusicasDoArtista } from "../../utils/dataProcessing.js";
import FiltroPeriodo from "../../components/FiltroPeriodo.jsx";
import { getArtistImage } from "../../utils/artistImages.js";

export default function ArtistaDetalhe() {
  const router = useRouter();
  const { id } = router.query; // id é o nome do artista
  const [menuOpen, setMenuOpen] = useState(false);
  const [periodo, setPeriodo] = useState("sempre");
  const [topMusicas, setTopMusicas] = useState([]);
  const [artistaSelecionado, setArtistaSelecionado] = useState(null);

  // Atualiza artista selecionado quando id mudar
  useEffect(() => {
    if (!id) return;
    const topArtistas = top100Artistas();
    const artista = topArtistas.find(a => a.nome === decodeURIComponent(id));
    setArtistaSelecionado(artista);
  }, [id]);

  // Atualiza top 20 músicas quando artista ou período mudar
  useEffect(() => {
    if (artistaSelecionado) {
      setTopMusicas(top20MusicasDoArtista(artistaSelecionado.nome, periodo));
    }
  }, [periodo, artistaSelecionado]);

  if (!artistaSelecionado) return <div>Artista não encontrado</div>;

  const periodos = ["sempre", "1ano", "6meses", "4semanas"];

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6 text-white">
      
      {/* Topo com botão voltar e dropdown perfil */}
      <div className="w-full flex items-center justify-between mb-6 px-2 relative">
        <Voltar />
        <div className="relative z-50">
          <button
            className="p-2 no-hover"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src={getArtistImage(artistaSelecionado.nome)}
              alt={artistaSelecionado.nome}
              className="w-36 h-36 rounded-2xl object-cover cursor-pointer hover:scale-105 transition-transform"
            />

          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-none overflow-hidden z-50 transition ease-out duration-200 transform origin-top-right">
              <ul className="flex flex-col">
                <li>
                  <Link href="/perfil" className="block px-4 py-3 text-sm text-purple-700 hover:bg-green-100 active:bg-green-200 transition-colors">Perfil</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Artista */}
      <div className="flex w-full max-w-3xl items-center mb-6 gap-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold leading-snug">
            #{artistaSelecionado.nome.split(" ")[0]} <br /> {artistaSelecionado.nome.split(" ")[1]}
          </h1>
          <span className="text-green-500 text-lg">artista</span>
        </div>
        <div className="ml-auto">
          <Link href="/perfil">
            <img
              src="/user-placeholder.png"
              alt={artistaSelecionado.nome}
              className="w-36 h-36 rounded-2xl object-cover cursor-pointer hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* Lista de músicas com scroll vertical */}
      <div className="w-full max-w-3xl h-96 overflow-y-auto mb-4">
        {topMusicas.map((musica, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-xl mb-2 shadow-md hover:bg-orange-100 transition-colors">
            <span className="font-semibold text-black">{musica.nome}</span>
            <span className="text-gray-500">{Math.floor((musica.ms_played || 0)/60000)} min</span>
          </div>
        ))}
      </div>

      {/* Filtro de período - mesmo componente e estilo do ranking */}
      <div className="px-4 w-full max-w-md mx-auto mb-6">
        <FiltroPeriodo periodo={periodo} setPeriodo={setPeriodo} />
      </div>
    </div>
  );
}
