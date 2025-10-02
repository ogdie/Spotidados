import Voltar from "@/components/Voltar.jsx";
import Link from "next/link";

export default function Ranking() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Voltar />

      <h1 className="text-3xl font-bold mb-6">🏆 Ranking</h1>

      <div className="flex flex-col gap-4 max-w-xs mx-auto">
        <Link href="/ranking/artistas">
          <button className="w-full py-4 rounded-full bg-white text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
            #TOP 100 ARTISTAS
          </button>
        </Link>

        <Link href="/ranking/musicas">
          <button className="w-full py-4 rounded-full bg-white text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
            #TOP 100 MÚSICAS
          </button>
        </Link>

        <Link href="/ranking/albuns">
          <button className="w-full py-4 rounded-full bg-white text-green-500 font-semibold border border-orange-400 hover:bg-orange-400 hover:text-white transition-colors">
            #TOP 100 ÁLBUNS
          </button>
        </Link>
      </div>
    </div>
  );
}
