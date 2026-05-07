export default function App() {
  const projetos = [
    {
      titulo: "Redesign de App Financeiro",
      descricao: "Reestruturação da experiência de onboarding, reduzindo abandono em 40%.",
      tags: ["UX Research", "Figma", "Testes A/B"],
    },
    {
      titulo: "Design System B2B",
      descricao: "Criação de um sistema de componentes unificado para plataforma SaaS.",
      tags: ["Design System", "Tokens", "Documentação"],
    },
    {
      titulo: "MVP de Marketplace",
      descricao: "Do discovery ao protótipo funcional em 6 semanas com time enxuto.",
      tags: ["Product Discovery", "Prototipagem", "MVP"],
    },
  ]

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: "var(--color-bg)" }}>

        {/* Header */}
        <header className="flex items-center justify-between px-[152px] py-6 border-b" style={{ borderColor: "var(--color-border)" }}>
          <a href="/" className="text-sm font-bold tracking-[3px] uppercase font-heading">
            <span style={{ color: "var(--color-accent)" }}>/</span>
            <span style={{ color: "var(--color-text)" }}>leandro andrade</span>
          </a>
          <nav className="flex items-center gap-10">
            {["Projetos", "Carreira", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium transition-colors hover:text-white"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* Conteúdo principal */}
        <div className="flex-1 grid grid-cols-2 items-center px-[152px] gap-16" style={{ paddingTop: "40px", paddingBottom: "40px" }}>

          {/* Coluna esquerda — texto */}
          <div className="flex flex-col gap-6">
            <h1 className="font-heading font-bold leading-tight" style={{ fontSize: "42px", lineHeight: "48px", color: "var(--color-text)" }}>
              Olá, eu sou<br />
              Leandro Andrade<br />
              product designer.
            </h1>
            <p className="text-base leading-relaxed max-w-md" style={{ color: "var(--color-text-muted)" }}>
              Transformo problemas complexos em experiências simples e significativas.
              Trabalho na interseção entre pesquisa, estratégia e execução.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="mailto:seuemail@email.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-text)", color: "var(--color-bg)" }}
              >
                Entrar em contato
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-bold border transition-colors hover:border-white"
                style={{ backgroundColor: "transparent", color: "var(--color-text)", borderColor: "var(--color-border)" }}
              >
                Ver projetos
              </a>
            </div>
          </div>

          {/* Coluna direita — mockups do Figma */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src="https://www.figma.com/api/mcp/asset/e99f65dd-39ae-4a8f-88b1-1117b1fb25db"
              alt="UI mockups"
              className="absolute inset-0 w-full h-full object-cover object-left-top"
            />
            {/* Fade lateral para fundir com o fundo escuro */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, var(--color-bg) 0%, transparent 20%, transparent 80%, var(--color-bg) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, var(--color-bg) 0%, transparent 15%, transparent 85%, var(--color-bg) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Carreira */}
      <section id="carreira" className="max-w-3xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-bold mb-2 font-heading" style={{ color: "var(--color-text)" }}>
          Carreira
        </h2>
        <p className="mb-16" style={{ color: "var(--color-text-muted)" }}>
          Onde estive, o que aprendi, o que construí.
        </p>

        <div className="relative">

          {/* Linha vertical da timeline */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{ backgroundColor: "var(--color-border)" }}
          />

          <div className="flex flex-col gap-12">

            {[
              {
                periodo: "2022 — hoje",
                empresa: "Nubank",
                cargo: "Senior Product Designer",
                descricao: "Liderança do design de novas features para o app principal, com foco em crédito e investimentos. Responsável por pesquisa, ideação e entrega de fluxos para mais de 80 milhões de usuários.",
                tags: ["Design System", "Research", "Crédito"],
              },
              {
                periodo: "2018 — 2022",
                empresa: "Resultados Digitais",
                cargo: "Product Designer",
                descricao: "Atuei no redesign completo do RD Station Marketing, conduzindo mais de 40 entrevistas com usuários e entregando um novo sistema de componentes adotado por 3 squads.",
                tags: ["B2B SaaS", "Design System", "Pesquisa"],
              },
              {
                periodo: "2014 — 2018",
                empresa: "Agência Ueno",
                cargo: "UI/UX Designer",
                descricao: "Projetos para clientes como Spotify, Airbnb e startups de série A. Especialização em identidade visual de produtos digitais e prototipagem de alta fidelidade.",
                tags: ["Branding", "Prototipagem", "Figma"],
              },
              {
                periodo: "2010 — 2014",
                empresa: "TOTVS",
                cargo: "Designer Jr → Pleno",
                descricao: "Início da carreira em software corporativo B2B. Primeiro contato com design de sistemas complexos, acessibilidade e documentação de padrões de interface.",
                tags: ["Enterprise", "Acessibilidade", "B2B"],
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 pl-8 relative">

                {/* Ponto na timeline */}
                <div
                  className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 shrink-0"
                  style={{
                    backgroundColor: i === 0 ? "var(--color-accent)" : "var(--color-bg)",
                    borderColor: i === 0 ? "var(--color-accent)" : "var(--color-border)",
                  }}
                />

                <div className="flex flex-col gap-3 flex-1">

                  {/* Período */}
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: i === 0 ? "var(--color-accent)" : "var(--color-text-muted)" }}
                  >
                    {item.periodo}
                  </span>

                  {/* Empresa e cargo */}
                  <div>
                    <h3 className="text-lg font-bold font-heading" style={{ color: "var(--color-text)" }}>
                      {item.empresa}
                    </h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {item.cargo}
                    </p>
                  </div>

                  {/* Descrição */}
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.descricao}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "var(--color-bg-elevated)",
                          color: "var(--color-text-muted)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2 font-heading" style={{ color: "var(--color-text)" }}>
          Projetos selecionados
        </h2>
        <p className="mb-10" style={{ color: "var(--color-text-muted)" }}>
          Alguns trabalhos que me orgulho de ter feito.
        </p>

        <div className="flex flex-col gap-5">
          {projetos.map((projeto, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 cursor-pointer transition-all hover:border-white"
              style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-elevated)" }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                {projeto.titulo}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                {projeto.descricao}
              </p>
              <div className="flex flex-wrap gap-2">
                {projeto.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-bg-subtle)",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <hr className="mb-10" style={{ borderColor: "var(--color-border)" }} />
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Feito com React + Tailwind · {new Date().getFullYear()}
        </p>
      </footer>

    </div>
  )
}
