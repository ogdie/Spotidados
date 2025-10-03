import Voltar from "@/components/Voltar.jsx";
import Link from "next/link";

export default function Ranking() {
  return (
    <div
      className="flex flex-col items-center min-h-screen px-4 pt-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    >
      {/* Topo: botão voltar */}
      <div className="w-full max-w-md mx-auto mb-6">
        <Voltar />
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-6 text-white">🏆 Ranking</h1>

      {/* Botões principais */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/ranking/artistas">
          <button className="w-full py-4 rounded-full bg-white/80 text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
            #TOP 100 ARTISTAS
          </button>
        </Link>

        <Link href="/ranking/musicas">
          <button className="w-full py-4 rounded-full bg-white/80 text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
            #TOP 100 MÚSICAS
          </button>
        </Link>

        <Link href="/ranking/albuns">
          <button className="w-full py-4 rounded-full bg-white/80 text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
            #TOP 100 ÁLBUNS
          </button>
        </Link>
      </div>

      {/* Placeholder de fundo caso queira adicionar algum elemento decorativo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/placeholder.png"
          alt="placeholder background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
