---
name: Leandro Andrade — Portfolio
colors:
  bg: "#18181b"
  bg-elevated: "#27272a"
  bg-subtle: "#3f3f46"
  text: "#ffffff"
  text-muted: "#a1a1aa"
  text-secondary: "#52525b"
  accent: "#f43f5e"
  border: "#3f3f46"
  border-subtle: "#52525b"
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 42px
    fontWeight: "700"
    lineHeight: 48px
  body:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  nav:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: "500"
    lineHeight: 24px
  label:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: "700"
    lineHeight: 22px
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  section-y: 80px
  gap: 16px
grid:
  container-full: "max-w-[1600px] mx-auto px-[152px]"
  container-prose: "max-w-3xl mx-auto px-6"
  columns-hero: 2
  gap-hero: 64px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text}"
    border: "1px solid {colors.border}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  nav-link:
    textColor: "{colors.text-muted}"
    typography: "{typography.nav}"
  logo:
    textColor: "{colors.text}"
    accentColor: "{colors.accent}"
    typography: "{typography.nav}"
    letterSpacing: 3px
---

## Visão geral

Portfólio pessoal de Leandro Andrade, Product Designer. O estilo é **dark premium** — sério, contemporâneo e confiante. A interface deve transmitir profissionalismo sem ser fria, usando o contraste entre o fundo escuro e os elementos brancos para criar hierarquia clara.

## Cores

A paleta é construída sobre escuros neutros da família zinc, com um único acento vibrante.

- **bg (#18181b):** Fundo principal. Zinc-900 — quase preto, mas com leve temperatura. Evita o preto puro para não parecer pesado demais.
- **bg-elevated (#27272a):** Superfícies elevadas — cards, modais, áreas destacadas.
- **text (#ffffff):** Branco puro para títulos e elementos de alta hierarquia.
- **text-muted (#a1a1aa):** Cinza médio para corpo de texto, subtítulos e navegação em repouso.
- **accent (#f43f5e):** Rose-500. Usado com parcimônia — apenas no "/" do logo e em destaques críticos. É o ponto de calor da interface.
- **border (#3f3f46):** Bordas sutis que definem espaço sem competir com o conteúdo.

## Tipografia

**Plus Jakarta Sans** em todo o projeto. Escolhida por seu caráter geométrico com personalidade — menos neutro que Inter, mais legível que Bricolage em tamanhos menores. Funciona bem em dark mode por seus traços ligeiramente mais espessos.

- **Display (42px/700):** Títulos principais. Linha de 48px garante ritmo generoso.
- **Body (16px/400):** Texto corrido. Line-height 26px para máxima legibilidade.
- **Nav (16px/500):** Navegação e rótulos de seção.
- **Label (14px/700):** Botões e badges. Bold compensa o tamanho menor.

## Layout e Grid

Dois containers no projeto — cada seção usa um ou outro, nunca mistura:

- **container-full** (`max-w-[1600px] mx-auto px-[152px]`): usado no Hero. Ocupa toda a largura com padding nobre de 152px. Cria a sensação de "palco" para o conteúdo principal.
- **container-prose** (`max-w-3xl mx-auto px-6`): usado em Carreira, Projetos e demais seções de conteúdo. Largura máxima de 768px centralizada — ideal para leitura.

O Hero usa grid de 2 colunas com gap de 64px: texto à esquerda (coluna dominante), visual à direita. Seções de conteúdo são sempre coluna única dentro do container-prose.

## Componentes

### Botões

Dois estilos no Hero:
- **Primary:** Fundo branco, texto escuro. O maior contraste possível — para a ação principal.
- **Ghost:** Fundo transparente, borda sutil, texto branco. Para ação secundária. Nunca usar ghost como único botão na tela.

### Navegação

Links em `text-muted` em repouso, `text` (branco) no hover. Sem sublinhado. Tracking nenhum — já é espaçado o suficiente pelo tamanho.

### Logo

`/leandro andrade` em caixa alta com letter-spacing generoso. A barra `/` em accent cria uma assinatura visual única sem precisar de ícone ou logo gráfico.
