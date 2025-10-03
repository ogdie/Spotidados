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
          className={`px-4 py-2 rounded-full border font-semibold text-sm transition-colors transition-transform hover:scale-105 ${
            periodo === btn.value
              ? "border-purple-400 text-green-400 bg-white/10"
              : "border-purple-400 text-white bg-transparent hover:bg-white/5"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
