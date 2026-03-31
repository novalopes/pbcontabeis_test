import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PB Contábeis | Imposto de Renda e Contabilidade em São Paulo</title>
        <meta
          name="description"
          content="Contabilidade humana e descomplicada em São Paulo. Especialistas em Imposto de Renda para pessoas físicas, MEIs, MEs e trabalhadores informais. Fale conosco!"
        />
        <meta name="keywords" content="Imposto de Renda, Contabilidade MEI, Declaração IRPF, Contador São Paulo, Regularização CPF, Contabilidade Autônomo" />
        <meta property="og:title" content="PB Contábeis | Sua Contabilidade em Boas Mãos" />
        <meta property="og:description" content="Atendimento próximo e digital para você e sua pequena empresa. Sem burocracia, com total segurança." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={theme.wrapper}>
        {/* HEADER & NAV */}
        <header style={theme.header}>
          <div style={theme.container}>
            <nav style={theme.nav}>
              <div style={theme.logo}>PB <span style={theme.logoHighlight}>Contábeis</span></div>
              <ul style={theme.menu}>
                <li><a href="#servicos" style={theme.menuLink}>O que fazemos</a></li>
                <li><a href="#sobre" style={theme.menuLink}>Sobre nós</a></li>
                <li><a href="#faq" style={theme.menuLink}>Dúvidas</a></li>
              </ul>
              <a href="https://wa.me/5511949640360" style={theme.btnHeader}>Falar com Especialista</a>
            </nav>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section style={theme.heroSection}>
            <div style={theme.container}>
              <div style={theme.heroContent}>
                <div style={theme.heroText}>
                  <h1 style={theme.h1}>Contabilidade humana para quem foca no que importa.</h1>
                  <p style={theme.pLarge}>
                    Deixe a burocracia com a gente. Atendimento digital e próximo para trabalhadores informais, MEIs e pequenas empresas em São Paulo.
                  </p>
                  <div style={theme.heroActions}>
                    <a href="https://wa.me/5511949640360" style={theme.btnPrimary}>Quero Regularizar meu Negócio</a>
                    <p style={theme.pSmall}>Atendimento rápido via WhatsApp</p>
                  </div>
                </div>
                <div style={theme.heroImageContainer}>
                  {/* ESPAÇO PARA A FOTO DA CONTADORA */}
                  <div style={theme.imagePlaceholder}>
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>[FOTO DA CONTADORA]</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST BAR */}
          <section style={theme.trustBar}>
            <div style={theme.container}>
              <p style={theme.trustText}>Especialistas em situações complexas • +100 Clientes Satisfeitos • Suporte Personalizado</p>
            </div>
          </section>

          {/* PÚBLICOS E SERVIÇOS */}
          <section id="servicos" style={theme.section}>
            <div style={theme.container}>
              <div style={theme.sectionHeader}>
                <h2 style={theme.h2}>A quem ajudamos</h2>
                <p>Soluções sob medida para o seu momento profissional.</p>
              </div>

              <div style={theme.grid3}>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>Trabalho Informal</h3>
                  <p style={theme.pCard}>Regularize seus ganhos, declare seu imposto de renda e ganhe segurança fiscal sem sustos.</p>
                </div>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>MEIs / Autônomos</h3>
                  <h4 style={theme.h4}>Gestão Total</h4>
                  <p style={theme.pCard}>DAS mensal, Declaração Anual e assessoria completa para manter seu CNPJ em dia.</p>
                </div>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>ME / Pequenas Empresas</h3>
                  <p style={theme.pCard}>Abertura de empresa, folha de pagamento e planejamento tributário estratégico.</p>
                </div>
              </div>
            </div>
          </section>

          {/* DOR E SOLUÇÃO */}
          <section id="sobre" style={theme.sectionAlt}>
            <div style={theme.container}>
              <div style={theme.copySplit}>
                <div style={theme.copyText}>
                  <h2 style={theme.h2}>Você não precisa carregar o peso da burocracia sozinho.</h2>
                  <p style={theme.p}>
                    Sabemos que a rotina de quem empreende ou trabalha por conta própria já é desafiadora. O medo da malha fina ou de problemas com o CPF/CNPJ não deve te impedir de crescer.
                  </p>
                  <p style={theme.p}>
                    Na <strong>PB Contábeis</strong>, acreditamos na contabilidade como um serviço de apoio e parceria. Atuamos de forma próxima, tirando suas dúvidas e garantindo que cada documento esteja no lugar certo.
                  </p>
                </div>
                <div style={theme.copyStats}>
                  <div style={theme.statItem}>
                    <strong style={{ display: "block", fontSize: "1.2rem", color: "#2E7D32" }}>Agilidade</strong>
                    <span>Respostas rápidas, sem espera infinita.</span>
                  </div>
                  <div style={theme.statItem}>
                    <strong style={{ display: "block", fontSize: "1.2rem", color: "#2E7D32" }}>Segurança</strong>
                    <span>Sigilo total e precisão técnica.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (SEO DRIVEN) */}
          <section id="faq" style={theme.section}>
            <div style={theme.container}>
              <h2 style={{ ...theme.h2, textAlign: "center" }}>Dúvidas Frequentes</h2>
              <div style={theme.faqList}>
                <details style={theme.faqItem}>
                  <summary style={theme.faqSummary}>Preciso declarar Imposto de Renda sendo profissional autônomo?</summary>
                  <p style={theme.faqContent}>Sim, se seus rendimentos tributáveis ultrapassarem o limite estabelecido pela Receita Federal. Mesmo abaixo do limite, declarar pode ajudar a comprovar renda para financiamentos ou aluguéis.</p>
                </details>
                <details style={theme.faqItem}>
                  <summary style={theme.faqSummary}>O que acontece se meu MEI atrasar o DAS?</summary>
                  <p style={theme.faqContent}>Você pode perder benefícios previdenciários e ter o CNPJ cancelado. Ajudamos a parcelar dívidas e regularizar sua situação rapidamente.</p>
                </details>
                <details style={theme.faqItem}>
                  <summary style={theme.faqSummary}>Qual a diferença entre contador tradicional e a PB Contábeis?</summary>
                  <p style={theme.faqContent}>Nós unimos a agilidade do digital com o atendimento humano e próximo. Você fala diretamente com quem resolve o seu problema, sem intermediários ou termos técnicos complicados.</p>
                </details>
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={theme.ctaFinal}>
            <div style={theme.container}>
              <h2 style={theme.h2White}>Tire suas dúvidas agora mesmo com a nossa equipe</h2>
              <p style={theme.pWhite}>Não deixe para a última hora. Regularize seu negócio hoje.</p>
              <a href="https://wa.me/5511949640360" style={theme.btnLarge}>Falar no WhatsApp</a>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer style={theme.footer}>
          <div style={theme.container}>
            <div style={theme.footerContent}>
              <div style={theme.footerInfo}>
                <div style={theme.logo}>PB <span style={theme.logoHighlight}>Contábeis</span></div>
                <p>Contabilidade Próxima e Humana em São Paulo.</p>
              </div>
              <div style={theme.footerCopyright}>
                © 2026 PB Contábeis • Atendimento Digital e Humanizado
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        body { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}

// THEME / DESIGN SYSTEM (Clean & Professional)
const theme = {
  wrapper: { fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: "#1a1a1a", backgroundColor: "#fff" },
  container: { maxWidth: "1140px", margin: "0 auto", padding: "0 20px" },
  header: { height: "80px", borderBottom: "1px solid #eee", position: "sticky", top: 0, backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(5px)", zIndex: 100 },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" },
  logo: { fontSize: "1.5rem", fontWeight: "800", color: "#1a1a1a" },
  logoHighlight: { color: "#2E7D32" }, 
  menu: { display: "flex", listStyle: "none", gap: "30px", margin: 0, padding: 0 },
  menuLink: { textDecoration: "none", color: "#555", fontWeight: "500" },
  btnHeader: { backgroundColor: "#2E7D32", color: "#fff", textDecoration: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "600", fontSize: "0.9rem" },
  
  heroSection: { padding: "100px 0", backgroundColor: "#f9fafb" },
  heroContent: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "center" },
  heroText: { maxWidth: "600px" },
  heroImageContainer: { display: "flex", justifyContent: "center" },
  imagePlaceholder: { width: "350px", height: "450px", backgroundColor: "#e5e7eb", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" },
  
  h1: { fontSize: "3.2rem", lineHeight: "1.1", marginBottom: "20px", fontWeight: "850", letterSpacing: "-0.02em" },
  h2: { fontSize: "2.4rem", marginBottom: "20px", color: "#1a1a1a" },
  h2White: { fontSize: "2.4rem", marginBottom: "20px", color: "#fff" },
  h3: { fontSize: "1.5rem", marginBottom: "15px", color: "#2E7D32" },
  h4: { fontSize: "1rem", color: "#888", marginBottom: "10px", marginTop: "-10px" },
  p: { fontSize: "1.1rem", lineHeight: "1.6", color: "#444", marginBottom: "20px" },
  pLarge: { fontSize: "1.3rem", lineHeight: "1.5", color: "#666", marginBottom: "40px" },
  pSmall: { fontSize: "0.85rem", color: "#888", marginTop: "10px" },
  pWhite: { fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", marginBottom: "40px" },
  
  btnPrimary: { backgroundColor: "#2E7D32", color: "#fff", textDecoration: "none", padding: "18px 36px", borderRadius: "10px", fontWeight: "700", fontSize: "1.1rem", display: "inline-block", boxShadow: "0 10px 20px rgba(46, 125, 50, 0.2)" },
  btnLarge: { backgroundColor: "#fff", color: "#2E7D32", textDecoration: "none", padding: "18px 40px", borderRadius: "10px", fontWeight: "700", fontSize: "1.2rem", display: "inline-block" },

  trustBar: { padding: "20px 0", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" },
  trustText: { textAlign: "center", color: "#888", fontSize: "0.95rem", letterSpacing: "0.05em", margin: 0 },

  section: { padding: "100px 0" },
  sectionAlt: { padding: "100px 0", backgroundColor: "#f3f4f6" },
  sectionHeader: { textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" },
  
  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" },
  featureCard: { padding: "40px", backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #eee" },
  pCard: { color: "#666", fontSize: "1rem", lineHeight: "1.5" },

  copySplit: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" },
  copyText: { maxWidth: "550px" },
  copyStats: { display: "flex", flexDirection: "column", justifyContent: "center", gap: "30px" },
  statItem: { borderLeft: "4px solid #2E7D32", paddingLeft: "20px" },

  faqList: { maxWidth: "800px", margin: "0 auto" },
  faqItem: { marginBottom: "20px", border: "1px solid #eee", borderRadius: "12px" },
  faqSummary: { padding: "20px", fontWeight: "600", cursor: "pointer", fontSize: "1.1rem" },
  faqContent: { padding: "0 20px 20px", color: "#666", lineHeight: "1.5" },

  ctaFinal: { backgroundColor: "#2E7D32", padding: "100px 0", textAlign: "center" },
  footer: { padding: "60px 0", borderTop: "1px solid #eee" },
  footerContent: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  footerInfo: { maxWidth: "400px" },
  footerCopyright: { fontSize: "0.9rem", color: "#aaa" }
};