"use client"; // se estiver no Next 13+, para garantir que roda no client

import Link from "next/link";

export default function Navbar() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Meu Projeto Spotify",
          text: "Confere esse projeto incrível!",
          url: window.location.href, // link da página atual
        });
      } catch (error) {
        console.log("Usuário cancelou ou deu erro:", error);
      }
    } else {
      alert("Seu navegador não suporta compartilhamento automático 😕");
    }
  };

  return (
    <nav
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #ccc",
        backgroundColor: "#fff",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Link href="/">🏠</Link>
      <Link href="/pesquisa">🔍</Link>
      <button
        onClick={handleShare}
        style={{
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        📤
      </button>
    </nav>
  );
}
