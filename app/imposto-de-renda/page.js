"use client";

import { useState, useEffect } from "react";

export default function ImpostoDeRendaDark() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const checklistDocs = [
    {
      category: "Identificação",
      items: ["RG e CPF (Titular e Dependentes)", "Comprovante de Residência", "Última declaração enviada"]
    },
    {
      category: "Ganhos & Bens",
      items: ["Informe de Rendimentos", "Extratos de Corretoras (Bolsa/Cripto)", "Documentos de Imóveis e Veículos"]
    },
    {
      category: "Deduções",
      items: ["Recibos Médicos e Odontológicos", "Gastos com Educação", "Plano de Saúde"]
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
              <li><a href="#solucoes" onClick={() => setIsMenuOpen(false)}>Soluções</a></li>
              <li><a href="#documentos" onClick={() => setIsMenuOpen(false)}>Documentos</a></li>
              <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>Dúvidas</a></li>
            </ul>
            <a href="https://wa.me/5511949640360" className="btn-gold-black">Falar com Especialista</a>
          </nav>

          <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
             <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION - DARK & EXECUTIVE */}
        <section className="hero-dark">
          <div className="container hero-grid">
            <div className="hero-content fade-in-up">
              <h2 className="gold-text subtitle">Consultoria IRPF 2024</h2>
              <h1 className="h1-premium">
                Sua Declaração IRPF: <br />
                <span className="gold-text">Soluções Premium</span> e Especializadas.
              </h1>
              <p className="p-hero">
                Confie em especialistas experientes da <strong>PBContábeis</strong> para maximizar sua restituição e garantir total conformidade fiscal com atendimento exclusivo.
              </p>
              <div className="hero-actions">
                <a href="https://wa.me/5511949640360" className="btn-gold">Simule sua declaração</a>
                <a href="#solucoes" className="btn-outline">Saiba Mais</a>
              </div>
            </div>
            <div className="hero-visual fade-in-up" style={{ animationDelay: "0.2s" }}>
               <div className="executive-image-wrapper">
                  <img src="/images/executivo-irpf.png" alt="Especialista IRPF" className="exec-img" />
                  <div className="security-badge-suttle glass-dark">
                     <img src="/images/leao-irpf.png" alt="Leão" className="lion-suttle" />
                     <p>Proteção Total PBContábeis</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* QUATRO ICONES PREMIUM */}
        <section id="solucoes" className="icons-strip">
           <div className="container grid-icons">
              {[
                { label: "Consultoria Exclusiva", icon: "💎" },
                { label: "Declaração IRPF Completa", icon: "📑" },
                { label: "Planejamento Fiscal", icon: "📊" },
                { label: "Atendimento Personalizado", icon: "🤝" }
              ].map((item, i) => (
                 <div key={i} className="icon-card">
                    <div className="gold-icon-container">{item.icon}</div>
                    <h3 className="gold-text">{item.label}</h3>
                 </div>
              ))}
           </div>
        </section>

        {/* O Risco e a Solução */}
        <section className="content-split">
           <div className="container split-grid">
              <div className="split-text">
                 <h2 className="gold-text">Por que nos escolher?</h2>
                 <p>O Imposto de Renda não é apenas preencher um formulário. É uma estratégia de vida financeira. Na <strong>PBContábeis</strong>, entendemos que cada detalhe conta para evitar a malha fina e garantir que você pague apenas o que é justo.</p>
                 <div className="benefit-list">
                    <div className="benefit-item">
                       <span className="check-gold">✓</span>
                       <p>Análise preventiva de riscos</p>
                    </div>
                    <div className="benefit-item">
                       <span className="check-gold">✓</span>
                       <p>Otimização legal de restituição</p>
                    </div>
                    <div className="benefit-item">
                       <span className="check-gold">✓</span>
                       <p>Suporte jurídico e contábil completo</p>
                    </div>
                 </div>
              </div>
              <div className="split-visual glass-dark">
                 <div className="who-needs">
                    <h3 className="gold-text">Quem precisa declarar?</h3>
                    <ul className="needs-ul">
                       <li>Ganhos tributáveis {">"} R$ 30,6k</li>
                       <li>Posse de bens {">"} R$ 800k</li>
                       <li>Ganhos em Bolsa ou Cripto</li>
                       <li>Rendimentos do exterior</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* CHECKLIST DE DOCUMENTOS - DARK GLASSMOPHISM */}
        <section id="documentos" className="docs-dark">
           <div className="container">
              <div className="section-header-gold">
                 <h2 className="gold-text">Checklist de Documentos</h2>
                 <p>Sua segurança começa pela organização. Prepare o essencial:</p>
              </div>
              <div className="docs-grid-premium">
                 {checklistDocs.map((cat, i) => (
                    <div key={i} className="doc-card-premium glass-dark">
                       <h4 className="gold-text">{cat.category}</h4>
                       <ul>
                          {cat.items.map((item, idx) => (
                             <li key={idx}>• {item}</li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FAQ - BLACK STYLE */}
        <section id="faq" className="faq-dark">
           <div className="container">
              <h2 className="gold-text text-center">Dúvidas Frequentes</h2>
              <div className="faq-wrap">
                 {[
                   { q: "Quais os prazos regulamentares?", a: "A entrega deve ser realizada até 31 de maio. Recomendamos o envio precoce para prioridade na restituição." },
                   { q: "Como funciona o sigilo de dados?", a: "Seguimos rigorosamente a LGPD e protocolos de segurança bancária para proteger seus ativos financeiros." },
                   { q: "Tenho investimentos em Cripto, vocês fazem?", a: "Sim. Realizamos o cálculo de ganho de capital e a declaração detalhada de custódia de ativos digitais." }
                 ].map((item, i) => (
                    <details key={i} className="faq-premium">
                       <summary className="gold-text">{item.q}</summary>
                       <p>{item.a}</p>
                    </details>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <footer className="footer-dark">
         <div className="container">
            <div className="footer-top">
               <img src="/images/logo_base.png" alt="PBContábeis" className="footer-logo invert" />
               <div className="footer-social-gold">
                  <a href="#">Instagram</a>
                  <a href="#">LinkedInd</a>
               </div>
            </div>
            <div className="footer-bottom-gold">
               <p>© 2026 PBContábeis • Excelência em Contabilidade Premium • Todos os direitos reservados.</p>
            </div>
         </div>
      </footer>

      {/* WHATSAPP GOLD FLOAT */}
      <a href="https://wa.me/5511949640360" className="whatsapp-gold" target="_blank" rel="noopener noreferrer">
         <span className="wa-text-gold">Falar com Especialista</span>
         <span className="wa-icon-gold">💬</span>
      </a>

      <style jsx>{`
        .wrapper.dark-theme {
          background-color: #030a16;
          color: #e0e0e0;
          min-height: 100vh;
        }

        .container {
           max-width: 1200px;
           margin: 0 auto;
           padding: 0 24px;
        }

        .gold-text { color: #C5A037 !important; }
        
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
           background: rgba(3, 10, 22, 0.95);
           backdrop-filter: blur(20px);
           height: 80px;
           border-bottom: 1px solid rgba(197, 160, 55, 0.2);
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
           gap: 40px;
        }

        .nav-menu a {
           text-decoration: none;
           color: #fff;
           font-weight: 500;
           transition: color 0.3s;
        }

        .nav-menu a:hover { color: #C5A037; }

        .btn-gold-black {
           background: #C5A037;
           color: #000 !important;
           padding: 12px 24px;
           border-radius: 8px;
           font-weight: 700;
           text-decoration: none;
           margin-left: 40px;
           transition: transform 0.3s, background 0.3s;
        }
        .btn-gold-black:hover { transform: translateY(-2px); background: #d4af37; }

        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
        .hamburger span { width: 25px; height: 2px; background: #C5A037; }

        /* HERO AREA */
        .hero-dark {
           padding: 180px 0 100px;
        }

        .hero-grid {
           display: grid;
           grid-template-columns: 1.2fr 0.8fr;
           gap: 80px;
           align-items: center;
        }

        .h1-premium {
           font-size: clamp(2.5rem, 5vw, 3.8rem);
           line-height: 1.1;
           font-weight: 800;
           color: #fff;
           margin: 15px 0 30px;
        }

        .subtitle { font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 600; }

        .p-hero {
           font-size: 1.2rem;
           color: #cbd5e1;
           margin-bottom: 50px;
           line-height: 1.7;
        }

        .hero-actions { display: flex; gap: 20px; }
        
        .btn-gold {
           background: #C5A037;
           color: #000;
           padding: 18px 36px;
           border-radius: 10px;
           font-weight: 800;
           text-decoration: none;
           transition: all 0.3s;
        }
        .btn-gold:hover { background: #fff; box-shadow: 0 10px 30px rgba(197, 160, 55, 0.4); }

        .btn-outline {
           border: 1px solid rgba(255, 255, 255, 0.3);
           color: #fff;
           padding: 18px 36px;
           border-radius: 10px;
           font-weight: 700;
           text-decoration: none;
           transition: all 0.3s;
        }
        .btn-outline:hover { border-color: #C5A037; color: #C5A037; }

        .executive-image-wrapper {
           position: relative;
        }
        .exec-img {
           width: 100%;
           border-radius: 30px;
           box-shadow: 0 50px 100px rgba(0,0,0,0.5);
           border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .security-badge-suttle {
           position: absolute;
           bottom: 30px;
           right: -30px;
           padding: 15px 20px;
           border-radius: 15px;
           display: flex;
           align-items: center;
           gap: 12px;
           font-weight: 700;
           font-size: 0.85rem;
           color: #fff;
           box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .lion-suttle { height: 30px; opacity: 0.8; }

        /* DECORATION GLASS */
        .glass-dark {
           background: rgba(255, 255, 255, 0.03);
           backdrop-filter: blur(20px);
           border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* ICON STRIP */
        .icons-strip { background: rgba(3, 10, 22, 0.5); padding: 80px 0; border-top: 1px solid rgba(197, 160, 55, 0.1); border-bottom: 1px solid rgba(197, 160, 55, 0.1); }
        .grid-icons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        .icon-card { text-align: center; }
        .gold-icon-container { font-size: 2.5rem; margin-bottom: 15px; }

        /* SPLIT CONTENT */
        .split-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 80px; align-items: center; }
        .benefit-list { margin-top: 30px; }
        .benefit-item { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
        .check-gold { color: #C5A037; font-weight: 900; }

        .who-needs { padding: 50px 40px; border-radius: 20px; }
        .needs-ul { list-style: none; margin-top: 20px; }
        .needs-ul li { margin-bottom: 12px; font-weight: 600; font-size: 1.1rem; }
        .needs-ul li::before { content: "•"; color: #C5A037; margin-right: 15px; }

        /* DOCS GRID */
        .section-header-gold { text-align: center; margin-bottom: 60px; }
        .section-header-gold h2 { font-size: 2.8rem; margin-bottom: 15px; }
        .docs-grid-premium { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .doc-card-premium { padding: 40px; border-radius: 20px; transition: transform 0.3s; }
        .doc-card-premium:hover { transform: translateY(-10px); border-color: #C5A037; }
        .doc-card-premium ul { list-style: none; margin-top: 20px; }
        .doc-card-premium li { margin-bottom: 12px; opacity: 0.8; font-size: 0.95rem; }

        /* FAQ */
        .faq-wrap { max-width: 800px; margin: 40px auto 0; }
        .faq-premium { background: rgba(255, 255, 255, 0.02); border-radius: 12px; margin-bottom: 15px; border: 1px solid rgba(255, 255, 255, 0.05); }
        .faq-premium summary { padding: 25px; font-weight: 700; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-premium summary::after { content: "+"; font-size: 1.5rem; color: #C5A037; }
        .faq-premium[open] summary::after { content: "−"; }
        .faq-premium p { padding: 0 25px 25px; opacity: 0.8; }

        /* FOOTER */
        .footer-dark { padding: 100px 0 50px; border-top: 1px solid rgba(255, 255, 255, 0.05); }
        .footer-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 60px; }
        .footer-social-gold { display: flex; gap: 30px; }
        .footer-social-gold a { color: #fff; text-decoration: none; font-weight: 700; }
        .footer-bottom-gold { border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 40px; text-align: center; color: #666; font-size: 0.9rem; }

        /* WHATSAPP FLOAT - GOLD */
        .whatsapp-gold {
           position: fixed;
           bottom: 40px;
           right: 40px;
           background: #C5A037;
           color: #000;
           padding: 15px 30px;
           border-radius: 50px;
           display: flex;
           align-items: center;
           gap: 15px;
           text-decoration: none;
           font-weight: 800;
           box-shadow: 0 20px 40px rgba(197, 160, 55, 0.3);
           z-index: 2000;
           transition: all 0.3s;
        }
        .whatsapp-gold:hover { transform: scale(1.05) translateY(-5px); background: #fff; }
        .wa-icon-gold { font-size: 1.4rem; }

        /* RESPONSIVE */
        @media (max-width: 992px) {
           .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 60px; }
           .hero-visual { order: 2; max-width: 500px; margin: 0 auto; }
           .security-badge-suttle { right: -10px; }
           .hero-actions { justify-content: center; }
           .grid-icons { grid-template-columns: repeat(2, 1fr); }
           .split-grid { grid-template-columns: 1fr; }
           .docs-grid-premium { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
           .hamburger { display: flex; }
           .nav-menu {
              position: fixed;
              top: 90px;
              left: 0;
              width: 100%;
              background: #030a16;
              padding: 40px;
              transform: translateY(-120%);
              transition: 0.4s;
              flex-direction: column;
              height: 100vh;
           }
           .nav-menu.active { transform: translateY(0); }
           .nav-menu ul { flex-direction: column; text-align: center; }
           .btn-gold-black { margin: 30px 0 0 0; width: 100%; text-align: center; }
           .wa-text-gold { display: none; }
           .h1-premium { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}
