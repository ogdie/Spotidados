import Link from "next/link";

export default function ListaArtista({ artistas }) {
  return (
    <ul>
      {artistas.map((artista) => (
        <li key={artista.nome}>
          <Link href={`/artistas/${encodeURIComponent(artista.nome)}`}>
            {artista.nome}
          </Link>
        </li>
      ))}
    </ul>
  );
}
