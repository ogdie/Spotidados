import { useRouter } from "next/router";

export default function Voltar() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer hover:scale-105 transition-transform"
    >
      <img
        src="/images/buttom.back.svg"
        alt="Botão Voltar"
        className="w-[70px] h-[60px] invert sepia saturate-200 hue-rotate-90"
        style={{ filter: "invert(50%) sepia(100%) saturate(500%) hue-rotate(120deg)" }}
      />
    </button>
  );
}
