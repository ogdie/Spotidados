import { useState } from "react";
import Voltar from "@/components/Voltar";
import Link from "next/link";

export default function Perfil() {
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState("Aurora Maria");
  const [email, setEmail] = useState("aurora.maria@gmail.com");
  const [telefone, setTelefone] = useState("8844662200");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6 text-white">
      
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-8 px-2 relative">
        <Voltar />
        <div className="relative z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <img
              src="/images/icon.menu.svg"
              alt="Abrir Menu"
              className="w-[50px] h-[40px] cursor-pointer hover:scale-105 transition-transform"
            />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-none overflow-hidden z-50 transition ease-out duration-200 transform origin-top-right">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/perfil"
                    className="block px-4 py-3 text-sm text-purple-700 hover:bg-green-100 active:bg-green-700 active:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Título e botão Edit */}
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Meu Perfil</h1>
        <button
          className="text-white"
          onClick={() => setEditando(!editando)}
        >
          Edit
        </button>
      </div>

      {/* Foto e nome */}
      <div className="flex flex-col items-center mb-6">
        <Link href="/perfil">
          <img
            src="/images/photo.profile.svg"
            alt="Foto do usuário"
            className="w-32 h-32 rounded-full object-cover mb-2 cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
        <span className="text-lg font-semibold">{nome}</span>
      </div>

      {/* Campos de edição ou exibição */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-8">
        {/* Nome */}
        <div className="flex flex-col">
          <label className="font-semibold">Nome</label>
          {editando ? (
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-black"
            />
          ) : (
            <span>{nome}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-semibold">Email</label>
          {editando ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-black"
            />
          ) : (
            <span>{email}</span>
          )}
        </div>

        {/* Telefone */}
        <div className="flex flex-col">
          <label className="font-semibold">Telefone</label>
          {editando ? (
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-black"
            />
          ) : (
            <span>{telefone}</span>
          )}
        </div>
      </div>

      {/* Configurações */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="font-bold text-lg mb-2">Configurações</h2>
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span>Linguagem</span>
          <span className="font-semibold">Português BR</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span>Sincronizado</span>
          <span className="font-semibold">Spotify</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span>Qualidade</span>
          <span className="font-semibold">HD</span>
        </div>
      </div>

    </div>
  );
}
