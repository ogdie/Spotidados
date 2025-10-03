// Mapeamento de imagens dos artistas
// Adicione o caminho da imagem para cada artista aqui

export const artistImages = {
  "Kendrick Lamar": "/images/kendrick2.svg",
  "Eminem": "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
  "TOOL": "https://i.scdn.co/image/ab6761610000e5eb13f5472b709101616c87cba3",
  "System Of A Down": "https://i.scdn.co/image/ab6761610000e5eb60063d3451ade8f9fab397c2",
  "J. Cole": "/images/j.cole.jpg",
  "Earl Sweatshirt": "https://i.scdn.co/image/ab67616d00001e02619b353c405fd6b7ec17a262",
  "BROCKHAMPTON": "https://i.scdn.co/image/ab676161000051745685a95f87c28ae5efc5ba48",
  "Vince Staples": "https://i.scdn.co/image/ab6761610000517453054f8bc7e0153daefe12cc",
  "Kanye West": "https://i.scdn.co/image/ab67616d0000b273fd61ea11e50ba0b7eade9466",
  "Slow J": "https://i.scdn.co/image/ab6761610000e5eb9bb4a919c5e5e9e9d6185186",
  "Isaiah Rashad": "https://i.scdn.co/image/ab6761610000e5eb1ff1685224034e6c12538722",
  "ScHoolboy Q": "https://i.scdn.co/image/ab6761610000e5eba59f2f483877c8d0142f71f3",
  "Logic": "https://i.scdn.co/image/ab67616d00001e0241c0ad3e39388ab332ffb023",
  "Tyler, The Creator": "https://i.scdn.co/image/ab6761610000e5ebdf2728294ff77dd11eeb18fb",
  "Denzel Curry": "https://i.scdn.co/image/ab67616d00001e020c6e0cd5449874d89060e864",
  "XXXTENTACION": "https://i.scdn.co/image/ab6761610000e5ebf0c20db5ef6c6fbe5135d2e4",
  "Machine Gun Kelly": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d85c767aca79c48ac2d71f9d",
  "G-Eazy": "https://i.scdn.co/image/ab6761610000e5ebd0f55babbbdcfab188016110",
  "Joey Bada$$": "https://i.scdn.co/image/ab6761610000e5ebae01fe0d10cd8ebb4707c461",
  "Drake": "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
  "ProfJam": "https://i.scdn.co/image/ab6761610000e5eb8acc3dbec1fffb4000e57495"
};

// Imagem padrão para artistas sem foto
export const defaultArtistImage = "/images/artista-placeholder.png";

// Função helper para pegar a imagem do artista
export function getArtistImage(artistName) {
  return artistImages[artistName] || defaultArtistImage;
}