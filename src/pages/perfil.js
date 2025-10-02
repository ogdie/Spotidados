import { useState } from "react";
import Voltar from "@/components/Voltar";

export default function Perfil() {
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState("Aurora Maria");
  const [email, setEmail] = useState("aurora.maria@gmail.com");
  const [telefone, setTelefone] = useState("8844662200");

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-6" style={{ backgroundImage: "url('/background-placeholder.png')" }}>
      
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-8">
        <Voltar />
        {/* Menu 3 linhas */}
        <div className="flex flex-col gap-0.5">
          <span className="w-3 h-0.5 bg-black rounded"></span>
          <span className="w-3 h-0.5 bg-black rounded"></span>
          <span className="w-3 h-0.5 bg-black rounded"></span>
        </div>
      </div>

      {/* Título e botão Edit */}
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Meu Perfil</h1>
        <button
          className="flex items-center gap-1 text-green-500 font-semibold"
          onClick={() => setEditando(!editando)}
        >
          ✏️ Edit
        </button>
      </div>

      {/* Foto e nome */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/user-placeholder.png"
          alt="Foto do usuário"
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <span className="text-black text-lg font-semibold">{nome}</span>
      </div>

      {/* Campos de edição ou exibição */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-8">
        {/* Nome */}
        <div className="flex flex-col">
          <label className="text-black font-semibold">Nome</label>
          {editando ? (
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <span className="text-black">{nome}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-black font-semibold">Email</label>
          {editando ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <span className="text-black">{email}</span>
          )}
        </div>

        {/* Telefone */}
        <div className="flex flex-col">
          <label className="text-black font-semibold">Telefone</label>
          {editando ? (
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <span className="text-black">{telefone}</span>
          )}
        </div>
      </div>

      {/* Configurações */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-black font-bold text-lg mb-2">Configurações</h2>
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span className="text-black">Linguagem</span>
          <span className="text-black font-semibold">Português BR</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span className="text-black">Sincronizado</span>
          <span className="text-black font-semibold">Spotify</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 py-2">
          <span className="text-black">Qualidade</span>
          <span className="text-black font-semibold">HD</span>
        </div>
      </div>

    </div>
  );
}
