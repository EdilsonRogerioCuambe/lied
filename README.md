## Ambiente Spotify

Crie um arquivo `.env.local` na raiz com:

```
SPOTIFY_CLIENT_ID=seu_client_id
SPOTIFY_CLIENT_SECRET=seu_client_secret
SPOTIFY_PLAYLIST_ID=37i9dQZF1DXcBWIGoYBM5M
```

No front, as chamadas usam `/api/spotify/playlist?endpoint=...`, que obtém o token no servidor.

# Lied - Grupo de Pagode

[![Deploy](https://vercel.com/button)](https://vercel.com/import/project?template=nextjs)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-blue)](https://nextjs.org/)
[![Node](https://img.shields.io/badge/Node-18%2B-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/edilsonrogeriocuambes-projects/lied)

> **Versão:** 0.1.0

Site oficial do Grupo Lied, com galeria, vídeos, Spotify, membros, história, stories e mais. Feito com Next.js, React, Tailwind e Framer Motion.

---

## 🚀 Deploy na Vercel

1. Instale a CLI da Vercel:
   ```bash
   npm install -g vercel
   ```
2. Faça login:
   ```bash
   vercel login
   ```
3. Faça o deploy:
   ```bash
   vercel --prod --yes
   ```

Ou conecte o repositório no painel da Vercel para deploy automático a cada push.

---

## 🛠️ Comandos úteis

```bash
npm run dev     # Desenvolvimento local
npm run build   # Build de produção
npm start       # Rodar build local
npm run lint    # Checagem de código
```

---

## 📦 Tecnologias

- Next.js 15
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- Spotify Web API

---

## 📄 Licença

MIT. Veja o arquivo [LICENSE](LICENSE).

---

## ✨ Sobre

Projeto desenvolvido para o Grupo Lied, com foco em performance, SEO e experiência moderna.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
