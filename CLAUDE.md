# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev      # servidor local em localhost:5173
npm run build    # gera a pasta dist/ para produção
npm run preview  # pré-visualiza o build de produção
npm run lint     # verifica erros de código com ESLint
```

## Stack

- **React 19** + **Vite 8** — sem roteador, aplicação de página única (SPA)
- **Tailwind CSS v4** via plugin Vite (`@tailwindcss/vite`) — sem `tailwind.config.js`
- Fontes via Google Fonts: **Bricolage Grotesque** (títulos) e **Inter** (corpo)

## Arquitetura

Toda a interface vive em `src/App.jsx`. Não há componentes separados ainda — o conteúdo (projetos, textos) fica no topo do arquivo como arrays/objetos, e o JSX abaixo consome esses dados.

## Tokens de design

`src/index.css` é o único lugar para mudar cores e fontes — usa `@theme` do Tailwind v4:

```css
@theme {
  --color-primary: oklch(55% 0.2 270); /* mudar 270 muda o matiz de toda a UI */
  --font-heading: "Bricolage Grotesque", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

Tokens de cor são usados no JSX como `text-(--color-primary)`, `bg-(--color-bg)` etc.
Tokens de fonte são usados como classes utilitárias: `font-heading`, `font-body`.

## Contexto do projeto

Portfólio pessoal de **Leandro Andrade**, Product Designer.
Usuário é iniciante em desenvolvimento — explicar conceitos de forma simples, com analogias ao universo de design quando possível.
