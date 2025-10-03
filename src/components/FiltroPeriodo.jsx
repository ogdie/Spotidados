export default function FiltroPeriodo({ periodo, setPeriodo }) {
  const botoes = [
    { label: "Desde sempre", value: "sempre" },
    { label: "Último ano", value: "1ano" },
    { label: "Últimos 6 meses", value: "6meses" },
    { label: "Últimas 4 semanas", value: "4semanas" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {botoes.map((btn) => (
        <button
          key={btn.value}
          onClick={() => setPeriodo(btn.value)}
          className={`px-3 py-1 rounded-full border transition-colors font-semibold text-sm ${
            periodo === btn.value
              ? "bg-orange-400 text-white border-orange-400"
              : "bg-white text-black border-orange-400 hover:bg-orange-400 hover:text-white"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
