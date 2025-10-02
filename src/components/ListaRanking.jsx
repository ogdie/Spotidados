export default function ListaRanking({ itens, tipo }) {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index} className="mb-2">
          {tipo === "artistas" && (
            <div>
              {index + 1}. {item.nome} ({item.plays})
            </div>
          )}
          {tipo === "musicas" && (
            <div>
              {index + 1}. {item.nome}{" "}
              <span className="text-gray-500">
                ({Math.floor((item.ms_played || 0) / 60000)} min)
              </span>
            </div>
          )}
          {tipo === "albuns" && (
            <div>
              {index + 1}. {item.nome}{" "}
              <span className="text-gray-500">
                ({Math.floor((item.ms_played || 0) / 60000)} min)
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
