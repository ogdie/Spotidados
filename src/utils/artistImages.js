// Mapeamento de imagens dos artistas
// Adicione o caminho da imagem para cada artista aqui

export const artistImages = {
  "Kendrick Lamar": "/images/kendrick2.svg",
  "Eminem": "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
  "TOOL": "https://i.scdn.co/image/ab6761610000e5eb13f5472b709101616c87cba3",
  "System of a Down": "https://i.scdn.co/image/ab6761610000e5eb60063d3451ade8f9fab397c2",
  "J. Cole": "/images/j.cole.jpg"
};

// Imagem padrão para artistas sem foto
export const defaultArtistImage = "/images/artista-placeholder.png";

// Função helper para pegar a imagem do artista
export function getArtistImage(artistName) {
  return artistImages[artistName] || defaultArtistImage;
}