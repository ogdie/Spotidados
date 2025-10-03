import { useRouter } from "next/router";

export default function Voltar() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer"
    >
      <img
        src="/images/buttom.back.svg"
        alt="Botão Voltar"
        className="w-[70px] h-[60px]"
      />
    </button>
  );
}
