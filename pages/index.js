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
              <div style={theme.nav}>
                <div style={theme.logoContainer}>
                  <img src="/images/logo_text.png" alt="PB Contábeis" style={{ height: "45px" }} />
                </div>
                <ul style={theme.menu}>
                  <li><a href="#servicos" style={theme.menuLink}>Serviços</a></li>
                  <li><a href="#diferenciais" style={theme.menuLink}>Diferenciais</a></li>
                  <li><a href="#sobre" style={theme.menuLink}>Sobre nós</a></li>
                  <li><a href="#faq" style={theme.menuLink}>Dúvidas</a></li>
                </ul>
                <a href="https://wa.me/5511949640360" style={theme.btnHeader}>Falar com Especialista</a>
              </div>
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
                  <div style={theme.heroImageFrame}>
                    <img src="/images/paula-bonifacio.png" alt="Paula Bonifácio - Contadora" style={theme.heroImage} />
                  </div>
                  <p style={theme.contadoraLabel}>Paula Bonifácio, a sua contadora.</p>
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
                  <h3 style={theme.h3}>Empresas</h3>
                  <p style={theme.pCard}>Abertura e encerramento de Empresa. Assessoria Trabalhista, Fiscal e Contábil total.</p>
                </div>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>Saúde</h3>
                  <p style={theme.pCard}>Legalização de Consultório, Clínica Médica ou Odontológica. DEMED (Declaração de Serviços Médicos).</p>
                </div>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>Pessoa Física</h3>
                  <p style={theme.pCard}>Regularização de CPF, Declaração de IRPF, Carnê-leão (DARF) e Malha Fiscal.</p>
                </div>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>Previdência</h3>
                  <p style={theme.pCard}>Orientação sobre Aposentadoria no RGPS e planejamento previdenciário.</p>
                </div>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>Doméstico</h3>
                  <p style={theme.pCard}>Gestão total de E-Social Doméstica para garantir todos os direitos e deveres.</p>
                </div>
                <div style={theme.featureCard}>
                  <h3 style={theme.h3}>Notas Fiscais</h3>
                  <p style={theme.pCard}>Emissão de Nota fiscal (NFe) ou Nota Fiscal Paulistana para o seu negócio.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* DIFERENCIAIS */}
          <section id="diferenciais" style={theme.sectionAlt}>
            <div style={theme.container}>
              <div style={theme.sectionHeader}>
                <h2 style={theme.h2}>Por que a PB Contábeis?</h2>
                <p>O que nos torna sua melhor parceira de negócios.</p>
              </div>
              <div style={theme.grid3}>
                <div style={theme.statItemFull}>
                  <img src="/images/logo_hd.png" alt="Selo" style={{ height: "60px", marginBottom: "15px" }} />
                  <h3 style={theme.h3}>Atendimento Humanizado</h3>
                  <p>Aqui você não é um ticket. Você fala diretamente com quem entende o seu negócio e cuida da sua tranquilidade.</p>
                </div>
                <div style={theme.statItemFull}>
                  <div style={{ height: "60px", marginBottom: "15px", fontSize: "2rem", color: "#0D47A1" }}>⚡</div>
                  <h3 style={theme.h3}>Agilidade Digital</h3>
                  <p>Processos modernos e rápidos para que você não perca tempo com papelada e foque apenas no seu crescimento.</p>
                </div>
                <div style={theme.statItemFull}>
                  <div style={{ height: "60px", marginBottom: "15px", fontSize: "2rem", color: "#0D47A1" }}>🛡️</div>
                  <h3 style={theme.h3}>Segurança Fiscal</h3>
                  <p>Conformidade total com a Receita Federal e órgãos reguladores, eliminando riscos para o seu CPF ou CNPJ.</p>
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
                    <strong style={{ display: "block", fontSize: "1.2rem", color: "#0D47A1" }}>Agilidade</strong>
                    <span>Respostas rápidas, sem espera infinita.</span>
                  </div>
                  <div style={theme.statItem}>
                    <strong style={{ display: "block", fontSize: "1.2rem", color: "#0D47A1" }}>Segurança</strong>
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

        {/* FOOTER EXPANDIDO */}
        <footer style={theme.footer}>
          <div style={theme.container}>
            <div style={theme.footerMain}>
              <div style={theme.footerColBrand}>
                <img src="/images/logo_text.png" alt="PB Contábeis" style={{ height: "35px", marginBottom: "15px" }} />
                <p style={{ fontSize: "0.95rem", color: "#666" }}>Contabilidade próxima e humana em São Paulo. Especialistas em descomplicar a vida de quem produz.</p>
              </div>
              <div style={theme.footerCol}>
                <h4 style={theme.footerH4}>Navegação</h4>
                <ul style={theme.footerList}>
                  <li><a href="#" style={theme.footerLink}>Início</a></li>
                  <li><a href="#servicos" style={theme.footerLink}>Serviços</a></li>
                  <li><a href="#diferenciais" style={theme.footerLink}>Diferenciais</a></li>
                  <li><a href="#sobre" style={theme.footerLink}>Sobre nós</a></li>
                </ul>
              </div>
              <div style={theme.footerCol}>
                <h4 style={theme.footerH4}>Contato</h4>
                <ul style={theme.footerList}>
                  <li style={{ color: "#666", marginBottom: "8px" }}>📞 11 94964-0360</li>
                  <li style={{ color: "#666", marginBottom: "8px" }}>📧 paula@pbcontabeis.com.br</li>
                  <li style={{ color: "#666", marginBottom: "8px" }}>📍 São Paulo / SP</li>
                </ul>
              </div>
            </div>
            <div style={theme.footerBottom}>
                © 2026 PB Contábeis • Atendimento Digital e Humanizado • Todos os direitos reservados.
            </div>
          </div>
        </footer>
        
        {/* WHATSAPP FLUTUANTE */}
        <a href="https://wa.me/5511949640360" style={theme.whatsappFloating} target="_blank" rel="noopener noreferrer">
          <span style={{ marginRight: "10px", fontSize: "0.9rem" }}>Dúvidas? Fale aqui</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: "30px", height: "30px" }} />
        </a>
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
  logoContainer: { display: "flex", alignItems: "center" },
  logoHighlight: { color: "#0D47A1" }, 
  menu: { display: "flex", listStyle: "none", gap: "30px", margin: 0, padding: 0 },
  menuLink: { textDecoration: "none", color: "#555", fontWeight: "500" },
  btnHeader: { backgroundColor: "#0D47A1", color: "#fff", textDecoration: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "600", fontSize: "0.9rem" },
  
  heroSection: { padding: "100px 0", backgroundColor: "#f9fafb" },
  heroContent: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "center" },
  heroText: { maxWidth: "600px" },
  heroImageContainer: { display: "flex", flexDirection: "column", alignItems: "center" },
  heroImageFrame: { width: "350px", height: "450px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" },
  heroImage: { width: "100%", height: "100%", objectFit: "cover" },
  contadoraLabel: { marginTop: "15px", fontWeight: "600", color: "#0D47A1", fontSize: "1.1rem" },
  
  h1: { fontSize: "3.2rem", lineHeight: "1.1", marginBottom: "20px", fontWeight: "850", letterSpacing: "-0.02em" },
  h2: { fontSize: "2.4rem", marginBottom: "20px", color: "#1a1a1a" },
  h2White: { fontSize: "2.4rem", marginBottom: "20px", color: "#fff" },
  h3: { fontSize: "1.5rem", marginBottom: "15px", color: "#0D47A1" },
  h4: { fontSize: "1rem", color: "#888", marginBottom: "10px", marginTop: "-10px" },
  p: { fontSize: "1.1rem", lineHeight: "1.6", color: "#444", marginBottom: "20px" },
  pLarge: { fontSize: "1.3rem", lineHeight: "1.5", color: "#666", marginBottom: "40px" },
  pSmall: { fontSize: "0.85rem", color: "#888", marginTop: "10px" },
  pWhite: { fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", marginBottom: "40px" },
  
  btnPrimary: { backgroundColor: "#0D47A1", color: "#fff", textDecoration: "none", padding: "18px 36px", borderRadius: "10px", fontWeight: "700", fontSize: "1.1rem", display: "inline-block", boxShadow: "0 10px 20px rgba(13, 71, 161, 0.2)" },
  btnLarge: { backgroundColor: "#fff", color: "#0D47A1", textDecoration: "none", padding: "18px 40px", borderRadius: "10px", fontWeight: "700", fontSize: "1.2rem", display: "inline-block" },

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
  statItem: { borderLeft: "4px solid #0D47A1", paddingLeft: "20px" },
  statItemFull: { padding: "30px", backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #eee", textAlign: "center" },

  faqList: { maxWidth: "800px", margin: "0 auto" },
  faqItem: { marginBottom: "20px", border: "1px solid #eee", borderRadius: "12px" },
  faqSummary: { padding: "20px", fontWeight: "600", cursor: "pointer", fontSize: "1.1rem" },
  faqContent: { padding: "0 20px 20px", color: "#666", lineHeight: "1.5" },

  ctaFinal: { backgroundColor: "#0D47A1", padding: "100px 0", textAlign: "center" },
  footer: { padding: "80px 0 40px", borderTop: "1px solid #eee", backgroundColor: "#fdfdfd" },
  footerMain: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr 1fr", gap: "60px", marginBottom: "60px" },
  footerCol: { display: "flex", flexDirection: "column" },
  footerColBrand: { maxWidth: "300px" },
  footerH4: { fontSize: "1.1rem", marginBottom: "20px", color: "#1a1a1a", fontWeight: "700" },
  footerList: { listStyle: "none", padding: 0, margin: 0 },
  footerLink: { textDecoration: "none", color: "#666", marginBottom: "10px", display: "inline-block", fontSize: "0.95rem" },
  footerBottom: { borderTop: "1px solid #eee", paddingTop: "30px", textAlign: "center", color: "#aaa", fontSize: "0.9rem" },
  whatsappFloating: { position: "fixed", bottom: "30px", right: "30px", backgroundColor: "#25D366", color: "#fff", padding: "15px 25px", borderRadius: "50px", textDecoration: "none", display: "flex", alignItems: "center", boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)", zIndex: 1000, fontWeight: "600" }
};