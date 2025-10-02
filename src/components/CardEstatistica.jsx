export default function CardEstatistica({ titulo, descricao }) {
  return (
    <div className="border rounded p-4 mb-2 shadow">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}
