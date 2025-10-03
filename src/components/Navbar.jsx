"use client";

import Link from "next/link";

export default function Navbar() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Meu Projeto Spotify",
          text: "Confere esse projeto incrível!",
          url: window.location.href,
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
        borderTop: "1px solid rgba(255,255,255,0.15)",
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
      <Link href="/">
        <img
          src="/images/HOME.SVG"
          alt="Home"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </Link>

      <Link href="/pesquisa">
        <img
          src="/images/SEARCH.SVG"
          alt="Pesquisar"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </Link>

      <button
        onClick={handleShare}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img
          src="/images/SHARE.svg"
          alt="Compartilhar"
          style={{ width: "24px", height: "24px" }}
        />
      </button>
    </nav>
  );
}
