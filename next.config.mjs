/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Força o Next.js a gerar apenas arquivos HTML/CSS/JS (sem servidor)
  output: 'export',

  // 2. Desativa a otimização de imagem (necessário para exportação estática no Cloudflare)
  images: {
    unoptimized: true,
  },
};

export default nextConfig; // Se for .js, use module.exports = nextConfig