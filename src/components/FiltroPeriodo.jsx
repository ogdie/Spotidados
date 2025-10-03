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
          className={`px-4 py-2 rounded-full border font-semibold text-sm
            border-purple-400 shadow-lg transition-colors transition-transform hover:scale-105
            ${
              periodo === btn.value
                ? "text-green-400 bg-gray-800 hover:bg-green-500/10 active:bg-green-500/15"
                : "text-green-400 bg-gray-800 hover:bg-green-500/10 active:bg-green-500/15"
            }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
