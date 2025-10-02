import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTop: '1px solid #ccc',
        backgroundColor: '#fff',
      }}
    >
      <Link href="/">🏠</Link>
      <Link href="/pesquisa">🔍</Link>
      <Link href="/menu">📤</Link>
    </nav>
  );
}
