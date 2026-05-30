"use client";

import { useState, useEffect } from "react";

// Icons as lightweight SVG components
const FileTextIcon = () => (
   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
   </svg>
);

const ScaleIcon = () => (
   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-2.24 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-2.24 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h18" />
   </svg>
);

const ShieldCheckIcon = () => (
   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7Z" />
      <path d="m9 12 2 2 4-4" />
   </svg>
);

const LineChartIcon = () => (
   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-7-3 3-7-7" />
      <path d="M12 5h8v8" />
   </svg>
);

const WhatsAppIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
   </svg>
);

export default function ReformaTributaria() {
   const [scrolled, setScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeTab, setActiveTab] = useState("pj");

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

   const profileDetails = {
      pj: {
         title: "Prestadores de Serviços (PJ)",
         impact: "O setor de serviços enfrentará o maior desafio de adaptação. A substituição do ISS por IBS + CBS trará uma mudança de alíquota nominal que pode exigir revisão profunda da estrutura de custos e preços.",
         points: [
            "Alíquota Padrão Unificada estimada entre 26% e 28% no novo sistema IVA.",
            "Possibilidade de repasse de créditos fiscais para os contratantes de seus serviços.",
            "Necessidade de planejar o modelo de contratação para continuar competitivo.",
            "Avaliação entre manter-se no Simples Nacional ou migrar para o Lucro Presumido para gerar créditos aos clientes."
         ]
      },
      simples: {
         title: "Empresas no Simples Nacional",
         impact: "O regime unificado continua existindo e protegendo micro e pequenas empresas, mas haverá regras de transição cruciais relacionadas à transferência de créditos tributários para empresas compradoras.",
         points: [
            "O Simples Nacional está garantido pela Constituição na Reforma.",
            "Créditos transferidos pelo Simples serão proporcionais ao imposto efetivamente pago.",
            "Opção de recolher o IBS e a CBS pelo regime regular (por fora) para transferir créditos integrais.",
            "Atenção redobrada na escolha do regime para não perder contratos com grandes empresas."
         ]
      },
      saude: {
         title: "Profissionais da Saúde",
         impact: "Médicos, dentistas, clínicas e profissionais de saúde contam com tratamentos diferenciados na Reforma Tributária, com reduções de alíquotas substanciais, mas que exigem cumprimento rigoroso de regras.",
         points: [
            "Redução prevista de 60% nas alíquotas de IBS e CBS para serviços de saúde.",
            "Impacto direto na emissão de notas fiscais e cálculo do Carnê-Leão.",
            "Clínicas médicas e laboratórios devem avaliar a estruturação de custos.",
            "Importância do planejamento preventivo para evitar fiscalizações ou perda de benefícios."
         ]
      },
      mei: {
         title: "Microempreendedores Individuais (MEI)",
         impact: "Os MEIs permanecem com o recolhimento fixo mensal sem grandes alterações diretas na sua guia DAS. Porém, o limite de faturamento e as relações comerciais como prestadores de serviços de grandes cadeias sofrerão impactos indiretos.",
         points: [
            "Manutenção do modelo de tributação simplificado com valor fixo.",
            "Impacto nas vendas interestaduais e no cálculo de insumos adquiridos de outras empresas.",
            "Atenção ao limite de faturamento anual que continua sob debate para reajuste.",
            "Regras mais claras para a emissão de notas fiscais de serviços em âmbito nacional."
         ]
      }
   };

   const checklistActions = [
      {
         title: "Mapeamento de Fornecedores",
         desc: "Identifique de quem você compra insumos e serviços, avaliando quais geram créditos de IBS/CBS para o seu negócio."
      },
      {
         title: "Simulação de Regimes Tributários",
         desc: "Realize simulações financeiras comparando o Simples Nacional convencional versus recolhimento de IBS/CBS pelo regime geral."
      },
      {
         title: "Revisão da Precificação",
         desc: "Analise como as novas alíquotas e a mecânica de créditos impactam a margem de lucro e os preços cobrados dos seus clientes."
      }
   ];

   return (
      <div className="wrapper dark-theme">
         {/* HEADER */}
         <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="container nav-container">
               <div className="logo-container">
                  <a href="/">
                     <img src="/images/logo_base.png" alt="PBContábeis" className="logo-img invert" />
                  </a>
               </div>

               <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                  <ul>
                     <li><a href="#" onClick={() => setIsMenuOpen(false)}>Início</a></li>
                     <li><a href="#pilares" onClick={() => setIsMenuOpen(false)}>Pilares</a></li>
                     <li><a href="#perfis" onClick={() => setIsMenuOpen(false)}>Perfis</a></li>
                     <li><a href="#cronograma" onClick={() => setIsMenuOpen(false)}>Cronograma</a></li>
                     <li><a href="#checklist" onClick={() => setIsMenuOpen(false)}>Preparação</a></li>
                     <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>Dúvidas</a></li>
                  </ul>
               </nav>

               <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Menu">
                  <span></span><span></span><span></span>
               </button>
            </div>
         </header>

         <main>
            {/* HERO SECTION */}
            <section className="hero-reforma">
               <div className="container hero-grid">
                  <div className="hero-content fade-in-up">
                     <h1 className="h1-premium">
                        Sua Empresa está pronta para a <br />
                        <span className="gradient-text">Reforma Tributária</span>?
                     </h1>
                     <p className="p-hero">
                        A maior mudança tributária dos últimos 40 anos já começou. Não espere a transição se tornar um problema para o seu faturamento. Planeje hoje a segurança fiscal do seu negócio.
                     </p>
                     <div className="hero-actions">
                        <a href="https://wa.me/5511949640360" className="btn-teal icon-btn">
                           <WhatsAppIcon />
                           Quero Diagnóstico de Impacto
                        </a>
                     </div>
                  </div>
                  <div className="hero-visual fade-in-up" style={{ animationDelay: "0.2s" }}>
                     <div className="visual-wrapper">
                        <img src="/images/reforma-concept.png" alt="Reforma Tributária Conceito" className="reforma-img" />
                     </div>
                  </div>
               </div>
            </section>

            {/* PILARES DA REFORMA */}
            <section id="pilares" className="pilares-section">
               <div className="container">
                  <div className="section-header-teal">
                     <h2 className="teal-text">Os Pilares da Reforma Tributária</h2>
                     <p className="p-subtitle-light">O que muda essencialmente no sistema tributário nacional?</p>
                  </div>
                  <div className="grid-pilares">
                     {[
                        { title: "Extinção de 5 Impostos", desc: "Fim gradual do ICMS, ISS, IPI, PIS e COFINS, simplificando a burocracia diária das empresas.", icon: <FileTextIcon /> },
                        { title: "Criação do IVA Dual", desc: "Instituição do IBS (estados e municípios) e do CBS (União), alinhando o Brasil aos padrões internacionais.", icon: <ScaleIcon /> },
                        { title: "Tributação no Destino", desc: "A cobrança do imposto passará a ser realizada onde o serviço ou produto é consumido, não mais na origem.", icon: <LineChartIcon /> },
                        { title: "Transição e Planejamento", desc: "A transição gradual se estenderá até 2033, exigindo planejamento fiscal antecipado para evitar sobressaltos.", icon: <ShieldCheckIcon /> }
                     ].map((item, i) => (
                        <div key={i} className="pilar-card glass-dark">
                           <div className="teal-icon-container">{item.icon}</div>
                           <h3 className="teal-text">{item.title}</h3>
                           <p className="pilar-desc">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* PERFIS DE IMPACTO - INTERACTIVE */}
            <section id="perfis" className="profiles-section">
               <div className="container">
                  <div className="section-header-teal">
                     <h2 className="teal-text">Como afeta o seu negócio?</h2>
                     <p className="p-subtitle-light">Selecione seu perfil profissional e veja os impactos e orientações estratégicas.</p>
                  </div>

                  <div className="tabs-container">
                     <div className="tabs-list">
                        <button className={`tab-btn ${activeTab === "pj" ? "active" : ""}`} onClick={() => setActiveTab("pj")}>Prestadores PJ</button>
                        <button className={`tab-btn ${activeTab === "simples" ? "active" : ""}`} onClick={() => setActiveTab("simples")}>Simples Nacional</button>
                        <button className={`tab-btn ${activeTab === "saude" ? "active" : ""}`} onClick={() => setActiveTab("saude")}>Profissionais da Saúde</button>
                        <button className={`tab-btn ${activeTab === "mei" ? "active" : ""}`} onClick={() => setActiveTab("mei")}>MEI</button>
                     </div>

                     <div className="tab-panel glass-dark fade-in-up">
                        <h3 className="teal-text panel-title">{profileDetails[activeTab].title}</h3>
                        <p className="panel-impact">{profileDetails[activeTab].impact}</p>
                        <div className="panel-points">
                           <h4 className="mint-text">Pontos de Atenção:</h4>
                           <ul>
                              {profileDetails[activeTab].points.map((pt, idx) => (
                                 <li key={idx}>
                                    <span className="check-mint">✓</span>
                                    <p>{pt}</p>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* CRONOGRAMA DE TRANSIÇÃO */}
            <section id="cronograma" className="timeline-section">
               <div className="container">
                  <div className="section-header-teal">
                     <h2 className="teal-text">Cronograma de Transição</h2>
                     <p className="p-subtitle-light">Prepare seu cronograma interno com base no calendário oficial de transição:</p>
                  </div>

                  <div className="timeline">
                     {[
                        { year: "2026", title: "Início dos Testes", desc: "Alíquota teste de 0,9% para a CBS e 0,1% para o IBS para adaptação e testes de sistemas." },
                        { year: "2027", title: "Entrada em Vigor da CBS", desc: "Extinção definitiva do PIS e da COFINS. Redução das alíquotas do IPI. Entrada plena da CBS federal." },
                        { year: "2029 a 2032", title: "Entrada Gradual do IBS", desc: "Redução proporcional e gradativa das alíquotas de ICMS e ISS, com aumento correspondente do IBS estadual/municipal." },
                        { year: "2033", title: "Vigência Plena do Novo Sistema", desc: "Extinção total do ICMS, ISS e do antigo modelo tributário. Consolidação completa do IBS e CBS." }
                     ].map((item, i) => (
                        <div key={i} className="timeline-item">
                           <div className="timeline-badge">{item.year}</div>
                           <div className="timeline-content glass-dark">
                              <h3 className="mint-text">{item.title}</h3>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* CHECKLIST DE PREPARAÇÃO */}
            <section id="checklist" className="checklist-section">
               <div className="container">
                  <div className="section-header-teal">
                     <h2 className="teal-text">Diagnóstico & Preparação</h2>
                     <p className="p-subtitle-light">Ações fundamentais que a PBContábeis executa para sua empresa transicionar com segurança:</p>
                  </div>
                  <div className="checklist-grid">
                     {checklistActions.map((action, i) => (
                        <div key={i} className="checklist-card glass-dark">
                           <div className="checklist-number">0{i+1}</div>
                           <h4 className="teal-text">{action.title}</h4>
                           <p>{action.desc}</p>
                        </div>
                     ))}
                  </div>
                  <div className="checklist-cta">
                     <a href="https://wa.me/5511949640360" className="btn-mint icon-btn">
                        <WhatsAppIcon />
                        Agendar Planejamento Tributário
                     </a>
                  </div>
               </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="faq-section">
               <div className="container">
                  <h2 className="teal-text">Dúvidas Frequentes da Reforma</h2>
                  <div className="faq-wrap">
                     {[
                        { q: "O Simples Nacional vai acabar?", a: "Não. O Simples Nacional está garantido. No entanto, ele sofre alterações mecânicas nas vendas para empresas que estão fora do regime, exigindo simulações para ver se a manutenção no Simples continua vantajosa." },
                        { q: "Vou pagar mais imposto sendo profissional liberal?", a: "Serviços em geral podem enfrentar um aumento da alíquota nominal se estiverem fora de regimes especiais ou do Simples Nacional. A avaliação prévia definirá o impacto exato." },
                        { q: "Quando preciso começar a me preocupar?", a: "A transição de sistemas e alíquotas de teste já inicia em 2026. Os contratos de longo prazo firmados hoje já devem prever cláusulas relativas à Reforma Tributária." },
                        { q: "Como a PBContábeis faz o diagnóstico?", a: "Analisamos seu faturamento, despesas operacionais e cadeia de clientes e fornecedores do último ano. A partir disso, simulamos a carga tributária no novo sistema para recomendar as melhores opções tributárias." },
                        { q: "Minha empresa terá que mudar de emissor de Nota Fiscal?", a: "Sim, a Reforma exigirá a adaptação dos sistemas de faturamento para calcular o IBS e a CBS de forma unificada e automatizada. A Receita Federal e os municípios devem disponibilizar novos padrões de documentos fiscais digitais durante o período de transição." },
                        { q: "Haverá alguma isenção ou imposto reduzido para setores específicos?", a: "Sim. Além da saúde, setores como educação, transporte público, produtos da cesta básica nacional, e insumos agropecuários terão reduções substanciais de alíquota ou isenção completa no novo modelo IVA." }
                     ].map((item, i) => (
                        <details key={i} className="faq-premium-teal">
                           <summary className="teal-text">{item.q}</summary>
                           <p>{item.a}</p>
                        </details>
                     ))}
                  </div>
               </div>
            </section>
         </main>

         <footer className="footer-dark">
            <div className="container">
               <div className="footer-bottom-teal">
                  <p>© 2026 PBContábeis • Excelência Contábil Digital & Humana • Todos os direitos reservados.</p>
               </div>
            </div>
         </footer>

         {/* WHATSAPP FLOAT - TEAL */}
         <a href="https://wa.me/5511949640360" className="whatsapp-teal" target="_blank" rel="noopener noreferrer">
            <span className="wa-text-teal">Dúvidas da Reforma? Fale Aqui</span>
            <span className="wa-icon-teal"><WhatsAppIcon /></span>
         </a>

         <style jsx>{`
            .wrapper.dark-theme {
               background-color: #040a15;
               color: #e2e8f0;
               min-height: 100vh;
               font-family: var(--font-inter), sans-serif;
            }

            .container {
               max-width: 1200px;
               margin: 0 auto;
               padding: 0 24px;
            }

            .teal-text { color: #00f2fe !important; }
            .mint-text { color: #10b981 !important; }
            
            .gradient-text {
               background: linear-gradient(135deg, #00f2fe 0%, #10b981 100%);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
            }

            .header {
               position: fixed;
               top: 0;
               left: 0;
               width: 100%;
               height: 90px;
               display: flex;
               align-items: center;
               z-index: 1000;
               transition: all 0.4s ease;
            }

            .header.scrolled {
               background: rgba(4, 10, 21, 0.95);
               backdrop-filter: blur(20px);
               height: 80px;
               border-bottom: 1px solid rgba(0, 242, 254, 0.15);
            }

            .logo-img.invert {
               filter: brightness(0) invert(1);
               height: 42px;
            }

            .nav-container {
               display: flex;
               justify-content: space-between;
               align-items: center;
               width: 100%;
            }

            .nav-menu ul {
               display: flex;
               list-style: none;
               gap: 32px;
            }

            .nav-menu a {
               text-decoration: none;
               color: #94a3b8;
               font-weight: 500;
               transition: color 0.3s;
            }

            .nav-menu a:hover { color: #00f2fe; }

            .hamburger {
               display: none;
               flex-direction: column;
               gap: 5px;
               background: none;
               border: none;
               cursor: pointer;
            }
            .hamburger span {
               width: 25px;
               height: 2px;
               background: #00f2fe;
               transition: 0.3s;
            }

            /* HERO */
            .hero-reforma {
               padding: 180px 0 100px;
               background: radial-gradient(circle at top right, rgba(0, 242, 254, 0.05), transparent 60%);
            }

            .hero-grid {
               display: grid;
               grid-template-columns: 1.2fr 0.8fr;
               gap: 80px;
               align-items: center;
            }

            .h1-premium {
               font-size: clamp(2.4rem, 4.5vw, 3.6rem);
               line-height: 1.15;
               font-weight: 800;
               color: #fff;
               margin: 15px 0 30px;
            }

            .subtitle {
               font-size: 1rem;
               text-transform: uppercase;
               letter-spacing: 0.15em;
               font-weight: 700;
            }

            .p-hero {
               font-size: 1.15rem;
               color: #94a3b8;
               margin-bottom: 40px;
               line-height: 1.7;
            }

            .hero-actions { display: flex; gap: 20px; }

            .btn-teal {
               background: linear-gradient(135deg, #00f2fe 0%, #00d2da 100%);
               color: #040a15;
               padding: 16px 32px;
               border-radius: 12px;
               font-weight: 700;
               text-decoration: none;
               transition: all 0.3s;
               box-shadow: 0 10px 25px rgba(0, 242, 254, 0.25);
            }
            .btn-teal:hover {
               transform: translateY(-2px);
               box-shadow: 0 15px 35px rgba(0, 242, 254, 0.4);
               filter: brightness(1.1);
            }

            .icon-btn {
               display: flex;
               align-items: center;
               gap: 12px;
            }

            .visual-wrapper {
               position: relative;
               display: flex;
               justify-content: center;
            }

            .reforma-img {
               width: 100%;
               max-width: 440px;
               border-radius: 24px;
               box-shadow: 0 30px 60px rgba(0, 242, 254, 0.15);
               border: 1px solid rgba(0, 242, 254, 0.1);
               transition: transform 0.5s ease;
            }
            .reforma-img:hover {
               transform: scale(1.02);
            }

            /* GLASS BOXES */
            .glass-dark {
               background: rgba(255, 255, 255, 0.02);
               backdrop-filter: blur(16px);
               -webkit-backdrop-filter: blur(16px);
               border: 1px solid rgba(255, 255, 255, 0.05);
               border-radius: 20px;
            }

            /* PILARES */
            .pilares-section {
               padding: 80px 0;
               background: #030811;
               border-top: 1px solid rgba(255, 255, 255, 0.02);
            }

            .section-header-teal {
               text-align: center;
               margin-bottom: 60px;
            }

            .section-header-teal h2 {
               font-size: 2.5rem;
               margin-bottom: 12px;
            }

            .p-subtitle-light {
               font-size: 1.1rem;
               color: #94a3b8;
            }

            .grid-pilares {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               gap: 30px;
            }

            .pilar-card {
               padding: 40px 30px;
               transition: all 0.3s ease;
            }

            .pilar-card:hover {
               transform: translateY(-5px);
               border-color: rgba(0, 242, 254, 0.3);
               box-shadow: 0 15px 30px rgba(0, 242, 254, 0.05);
               background: rgba(255, 255, 255, 0.03);
            }

            .teal-icon-container {
               margin-bottom: 24px;
               color: #10b981;
               display: flex;
            }

            .pilar-card h3 {
               font-size: 1.25rem;
               margin-bottom: 12px;
            }

            .pilar-desc {
               color: #94a3b8;
               font-size: 0.95rem;
               line-height: 1.6;
            }

            /* PROFILES TABS */
            .profiles-section {
               padding: 100px 0;
            }

            .tabs-container {
               max-width: 900px;
               margin: 0 auto;
            }

            .tabs-list {
               display: flex;
               justify-content: center;
               gap: 12px;
               margin-bottom: 40px;
               flex-wrap: wrap;
            }

            .tab-btn {
               background: rgba(255, 255, 255, 0.02);
               border: 1px solid rgba(255, 255, 255, 0.05);
               color: #94a3b8;
               padding: 14px 28px;
               border-radius: 50px;
               font-weight: 600;
               cursor: pointer;
               transition: all 0.3s;
            }

            .tab-btn:hover {
               border-color: rgba(0, 242, 254, 0.3);
               color: #00f2fe;
            }

            .tab-btn.active {
               background: #00f2fe;
               color: #040a15;
               border-color: #00f2fe;
               box-shadow: 0 5px 15px rgba(0, 242, 254, 0.2);
            }

            .tab-panel {
               padding: 50px;
               border: 1px solid rgba(0, 242, 254, 0.1);
               box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            }

            .panel-title {
               font-size: 1.8rem;
               margin-bottom: 20px;
            }

            .panel-impact {
               font-size: 1.1rem;
               line-height: 1.7;
               color: #cbd5e1;
               margin-bottom: 32px;
            }

            .panel-points h4 {
               font-size: 1.1rem;
               margin-bottom: 20px;
            }

            .panel-points ul {
               list-style: none;
            }

            .panel-points li {
               display: flex;
               gap: 16px;
               align-items: flex-start;
               margin-bottom: 16px;
            }

            .check-mint {
               color: #10b981;
               font-weight: 800;
               font-size: 1.2rem;
               line-height: 1;
            }

            .panel-points p {
               color: #94a3b8;
               font-size: 1rem;
               line-height: 1.5;
            }

            /* TIMELINE */
            .timeline-section {
               padding: 100px 0;
               background: #030811;
            }

            .timeline {
               max-width: 800px;
               margin: 60px auto 0;
               position: relative;
            }

            .timeline-item {
               position: relative;
               padding-left: 100px;
               margin-bottom: 48px;
            }

            .timeline-item:not(:last-child)::before {
               content: '';
               position: absolute;
               top: 20px;
               bottom: -48px;
               left: 40px;
               width: 2px;
               background: linear-gradient(to bottom, #00f2fe, #10b981);
               z-index: 1;
            }

            .timeline-badge {
               position: absolute;
               left: 40px;
               transform: translateX(-50%);
               top: 0;
               padding: 6px 12px;
               height: 38px;
               background: #00f2fe;
               color: #040a15;
               font-weight: 800;
               display: flex;
               align-items: center;
               justify-content: center;
               border-radius: 8px;
               font-size: 0.95rem;
               box-shadow: 0 4px 10px rgba(0, 242, 254, 0.3);
               white-space: nowrap;
               box-sizing: border-box;
               z-index: 2;
            }

            .timeline-content {
               padding: 30px;
            }

            .timeline-content h3 {
               font-size: 1.3rem;
               margin-bottom: 10px;
            }

            .timeline-content p {
               color: #94a3b8;
               line-height: 1.6;
            }

            /* CHECKLIST */
            .checklist-section {
               padding: 100px 0;
            }

            .checklist-grid {
               display: grid;
               grid-template-columns: repeat(3, 1fr);
               gap: 30px;
               margin-top: 50px;
            }

            .checklist-card {
               padding: 40px 30px;
               position: relative;
            }

            .checklist-number {
                position: absolute;
                top: 20px;
                right: 30px;
                font-size: 3.5rem;
                font-weight: 900;
                color: rgba(0, 242, 254, 0.15);
                line-height: 1;
             }

            .checklist-card h4 {
               font-size: 1.25rem;
               margin-bottom: 16px;
            }

            .checklist-card p {
               color: #94a3b8;
               font-size: 0.95rem;
               line-height: 1.6;
            }

            .checklist-cta {
               margin-top: 60px;
               text-align: center;
            }

            .btn-mint {
               background: linear-gradient(135deg, #10b981 0%, #059669 100%);
               color: #040a15;
               padding: 16px 36px;
               border-radius: 12px;
               font-weight: 750;
               text-decoration: none;
               transition: all 0.3s;
               box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
               display: inline-flex;
            }
            .btn-mint:hover {
               transform: translateY(-2px);
               box-shadow: 0 15px 35px rgba(16, 185, 129, 0.35);
               filter: brightness(1.1);
            }

            /* FAQ */
            .faq-section {
               padding: 100px 0;
               background: #030811;
            }

            .faq-wrap {
               display: grid;
               grid-template-columns: repeat(2, 1fr);
               gap: 24px;
               width: 100%;
               margin: 50px auto 0;
            }

            .faq-premium-teal {
               background: rgba(255, 255, 255, 0.02);
               border-radius: 16px;
               border: 1px solid rgba(255, 255, 255, 0.04);
               height: fit-content;
               transition: all 0.3s ease;
            }

            .faq-premium-teal:hover {
               transform: translateY(-3px);
               border-color: rgba(0, 242, 254, 0.3);
               box-shadow: 0 10px 30px rgba(0, 242, 254, 0.05);
            }

            .faq-premium-teal summary {
               padding: 24px;
               font-weight: 700;
               cursor: pointer;
               display: flex;
               justify-content: space-between;
               align-items: center;
               list-style: none;
            }

            .faq-premium-teal summary::after {
               content: "+";
               font-size: 1.4rem;
               color: #10b981;
               transition: 0.3s;
            }

            .faq-premium-teal[open] summary::after {
               transform: rotate(45deg);
            }

            .faq-premium-teal p {
               padding: 0 24px 24px;
               color: #94a3b8;
               font-size: 0.95rem;
               line-height: 1.6;
            }

            /* FOOTER */
            .footer-dark {
               padding: 60px 0;
               border-top: 1px solid rgba(255, 255, 255, 0.02);
               background: #02060c;
            }

            .footer-bottom-teal {
               text-align: center;
               color: #64748b;
               font-size: 0.9rem;
            }

            /* WHATSAPP FLOAT - TEAL */
            .whatsapp-teal {
               position: fixed;
               bottom: 40px;
               right: 40px;
               background: #00f2fe;
               color: #040a15;
               padding: 15px 30px;
               border-radius: 50px;
               display: flex;
               align-items: center;
               gap: 15px;
               text-decoration: none;
               font-weight: 800;
               box-shadow: 0 20px 40px rgba(0, 242, 254, 0.25);
               z-index: 2000;
               transition: all 0.3s;
            }
            .whatsapp-teal:hover {
               transform: scale(1.05) translateY(-5px);
               background: #fff;
               box-shadow: 0 25px 50px rgba(0, 242, 254, 0.4);
            }
            .wa-icon-teal {
               display: flex;
               align-items: center;
            }

            /* RESPONSIVE */
            @media (max-width: 992px) {
               .hero-grid {
                  grid-template-columns: 1fr;
                  text-align: center;
                  gap: 60px;
               }

               .hero-visual {
                  order: 2;
                  max-width: 440px;
                  margin: 0 auto;
               }

               .hero-actions {
                  justify-content: center;
               }

               .grid-pilares {
                  grid-template-columns: repeat(2, 1fr);
               }

               .checklist-grid {
                  grid-template-columns: 1fr;
               }

               .faq-wrap {
                  grid-template-columns: 1fr;
               }
            }

            @media (max-width: 768px) {
               .hamburger {
                  display: flex;
               }

               .grid-pilares {
                  grid-template-columns: 1fr;
                  gap: 20px;
               }

               .nav-menu {
                  position: fixed;
                  top: 90px;
                  left: 0;
                  width: 100%;
                  background: #040a15;
                  padding: 40px;
                  transform: translateY(-120%);
                  transition: 0.4s;
                  flex-direction: column;
                  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
               }

               .nav-menu.active {
                  transform: translateY(0);
               }

               .nav-menu ul {
                  flex-direction: column;
                  text-align: center;
                  gap: 24px;
               }

               .tab-panel {
                  padding: 30px 20px;
               }

               .panel-title {
                  font-size: 1.5rem;
               }

               .timeline-item {
                  padding-left: 60px;
               }

               .timeline-item:not(:last-child)::before {
                  left: 20px;
               }

               .timeline-badge {
                  left: 20px;
                  font-size: 0.8rem;
                  padding: 4px 8px;
                  height: 32px;
                  width: auto;
               }

               .wa-text-teal {
                  display: none;
               }

               .whatsapp-teal {
                  padding: 15px;
                  border-radius: 50%;
                  bottom: 20px;
                  right: 20px;
               }

               .h1-premium {
                  font-size: 2.2rem;
               }

               .section-header-teal h2 {
                  font-size: 2rem;
               }
            }
         `}</style>
      </div>
   );
}
