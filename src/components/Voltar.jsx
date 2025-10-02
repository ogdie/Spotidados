import { useRouter } from "next/router";

export default function Voltar() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-blue-600 hover:underline mb-4 inline-block"
    >
      ← Voltar
    </button>
  );
}
