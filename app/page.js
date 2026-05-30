"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="wrapper">
      {/* HEADER & NAV */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <div className="logo-container">
            <img src="/images/logo_base.png" alt="PB Contábeis" className="logo-img" />
          </div>

          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
              <li><a href="#diferenciais" onClick={() => setIsMenuOpen(false)}>Diferenciais</a></li>
              <li><a href="#reforma" onClick={() => setIsMenuOpen(false)} className="nav-highlight-teal">Reforma Tributária</a></li>
              <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>Dúvidas</a></li>
            </ul>
            <a href="https://wa.me/5511949640360" className="btn-header">Falar com Especialista</a>
          </nav>

          <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text fade-in-up">
              <h1 className="h1">Contabilidade humana e digital para quem foca no que importa.</h1>
              <p className="p-large">
                Deixe a burocracia com a gente. Atendimento próximo para trabalhadores informais, MEIs e empresas em São Paulo.
              </p>
              <div className="hero-actions">
                <a href="https://wa.me/5511949640360" className="btn-primary">Quero Regularizar meu Negócio</a>
                <p className="p-small">Atendimento rápido via WhatsApp</p>
              </div>
            </div>
            <div className="hero-image-container fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="hero-image-frame">
                <img src="/images/paula-bonifacio.png" alt="Paula Bonifácio - Contadora" className="hero-img-main" />
              </div>
              <div className="hero-floating-card glass">
                <span className="dot"></span>
                <p>Paula Bonifácio, a sua Contadora.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR SECTION */}
        <section className="trust-section">
          <div className="trust-bar">
            <div className="container">
              <div className="trust-content">
                <span>Especialistas em situações complexas</span>
                <span className="separator">•</span>
                <span>+3000 Clientes Satisfeitos</span>
                <span className="separator">•</span>
                <span>Suporte Personalizado</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="services">
          <div className="container">
            <div className="section-header">
              <h2 className="h2">A quem ajudamos</h2>
              <p className="p-subtitle">Soluções sob medida para o seu momento profissional.</p>
            </div>

            <div className="services-grid">
              {[
                { title: "Empresas", desc: "Abertura, encerramento e gestão contábil total de empresas (ME e EPP). Assessoria Trabalhista e Fiscal.", icon: "🏢" },
                { title: "Saúde", desc: "Legalização de consultórios e clínicas. Especialistas em carnê-leão e DEMED para profissionais da saúde.", icon: "🩺" },
                { title: "Pessoa Física", desc: "Declaração de IRPF, ganhos de capital, regularização de CPF e Malha Fiscal do IRPF.", icon: "👤" },
                { title: "Previdência", desc: "Planejamento previdenciário e assessoria para aposentadoria (RGPS).", icon: "🏦" },
                { title: "Doméstico", desc: "Gestão total de E-Social Doméstica para garantir todos os direitos e deveres.", icon: "🏠" },
                { title: "Notas Fiscais", desc: "Emissão de Nota fiscal (NFe) ou Nota Fiscal Paulistana para o seu negócio.", icon: "📄" }
              ].map((service, i) => (
                <div key={i} className="service-card glass">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="h3">{service.title}</h3>
                  <p className="p-card">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="diff-section">
          <div className="container">
            <div className="section-header">
              <h2 className="h2">Por que a PBContábeis?</h2>
              <p className="p-subtitle">O que nos torna sua melhor parceira de negócios.</p>
            </div>
            <div className="diff-grid">
              <div className="diff-card">
                <div className="diff-icon-bg">🤝</div>
                <h3 className="h3">Atendimento Humanizado</h3>
                <p>Aqui você não é um ticket. Você fala diretamente com quem entende o seu negócio e cuida da sua tranquilidade.</p>
              </div>
              <div className="diff-card">
                <div className="diff-icon-bg">⚡</div>
                <h3 className="h3">Agilidade Digital</h3>
                <p>Processos modernos e rápidos para que você não perca tempo com papelada e foque apenas no seu crescimento.</p>
              </div>
              <div className="diff-card">
                <div className="diff-icon-bg">🛡️</div>
                <h3 className="h3">Segurança Fiscal</h3>
                <p>Conformidade total com a Receita Federal e órgãos reguladores, eliminando riscos para o seu CPF ou CNPJ.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REFORMA TRIBUTÁRIA HIGHLIGHT SECTION */}
        <section id="reforma" className="reforma-highlight">
          <div className="container">
            <div className="reforma-card-dark">
              <div className="reforma-text">
                <h2 className="h2-teal">Reforma Tributária: Seu Negócio está Preparado?</h2>
                <p className="p-subtitle-light">
                  A maior mudança fiscal das últimas décadas já começou. Faça um planejamento tributário preventivo com nossos especialistas e proteja o faturamento da sua empresa.
                </p>
                <div className="reforma-features">
                  <span>✓ Análise de Impacto</span>
                  <span>✓ Planejamento e Transição</span>
                  <span>✓ Assessoria Especializada</span>
                </div>
                <div className="reforma-actions">
                  <a href="/reforma-tributaria" className="btn-teal-home">Saiba Mais sobre a Reforma</a>
                </div>
              </div>
              <div className="reforma-visual">
                <img src="/images/reforma-concept.png" alt="Reforma Tributária" className="reforma-concept-img" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq">
          <div className="container">
            <h2 className="h2 text-center">Dúvidas Frequentes</h2>
            <div className="faq-grid">
              {[
                { q: "Preciso declarar Imposto de Renda sendo profissional autônomo?", a: "Sim, se seus rendimentos tributáveis ultrapassarem o limite estabelecido pela Receita Federal. Mesmo abaixo do limite, declarar pode ajudar a comprovar renda para financiamentos ou aluguéis." },
                { q: "Como funciona a gestão do E-Social Doméstica?", a: "Cuidamos de todo o processo: desde o cadastro do empregador e empregado até a emissão mensal das guias DAE, controle de férias e rescisões, garantindo que você esteja 100% dentro da lei." },
                { q: "O que acontece se meu MEI atrasar o DAS?", a: "Você pode perder benefícios previdenciários e ter o CNPJ cancelado. Ajudamos a parcelar dívidas e regularizar sua situação rapidamente." },
                { q: "Posso migrar de MEI para ME com vocês?", a: "Com certeza! Cuidamos de todo o processo de desenquadramento e transição para o novo regime tributário, garantindo agilidade e economia." },
                { q: "Meu CPF está com status 'Irregular' ou 'Suspenso'. Como a PBContábeis ajuda?", a: "Analisamos a causa da irregularidade e realizamos todo o processo de regularização junto à Receita Federal para normalizar seu CPF e evitar bloqueios em contas bancárias." },
                { q: "Qual a diferença entre contador tradicional e a PBContábeis?", a: "Nós unimos a agilidade do digital com o atendimento humano e próximo. Você fala diretamente com quem resolve o seu problema, sem intermediários ou termos técnicos complicados." }
              ].map((item, i) => (
                <details key={i} className="faq-item glass">
                  <summary className="faq-summary">{item.q}</summary>
                  <p className="faq-content">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        {/* CTA FINAL
        <section className="cta-section">
          <div className="container overflow-hidden">
            <div className="cta-container glass">
                <h2 className="h2-white">Tire suas dúvidas agora mesmo com a nossa equipe</h2>
                <p className="p-white">Não deixe para a última hora. Regularize seu negócio hoje.</p>
                <a href="https://wa.me/5511949640360" className="btn-large">Falar no WhatsApp</a>
            </div>
          </div>
        </section>
        */}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/images/logo_base.png" alt="PBContábeis" className="footer-logo" />
              <p>Contabilidade próxima e humana em São Paulo. Especialistas em descomplicar a vida de quem produz.</p>
            </div>
            <div className="footer-nav">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="/imposto-de-renda">Imposto de Renda</a></li>
                <li><a href="/reforma-tributaria">Reforma Tributária</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#diferenciais">Diferenciais</a></li>
                <li><a href="#faq">Dúvidas</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <p>📞 <a href="tel:11949640360">11 94964-0360</a></p>
              <p>📧 <a href="mailto:paula@pbcontabeis.com.br">paula@pbcontabeis.com.br</a></p>
              <p>📸 <a href="https://www.instagram.com/pbcontabeis/" target="_blank" rel="noopener noreferrer">@pbcontabeis</a></p>
              <p>📍 São Paulo / SP</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 PBContábeis • Atendimento Digital e Humanizado • Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/5511949640360" className="whatsapp-floating" target="_blank" rel="noopener noreferrer">
        <span className="wa-text">Dúvidas? Fale aqui</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
        }
        
        .header.scrolled {
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(15px);
          height: 75px;
          box-shadow: 0 4px 20px rgba(13, 71, 161, 0.08);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 20px;
        }

        .logo-container { flex-shrink: 0; }
        .logo-img { height: 40px; }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-menu ul {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .nav-menu a {
          text-decoration: none;
          color: hsl(var(--text-main));
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
          white-space: nowrap;
        }

        .nav-menu a:hover { color: hsl(var(--primary)); }
        
        .nav-highlight {
          color: #C5A037 !important;
          font-weight: 700 !important;
          position: relative;
        }
        
        .nav-highlight::after {
          content: '•';
          position: absolute;
          top: -10px;
          right: -8px;
          font-size: 1.2rem;
          color: #C5A037;
        }
        
        .nav-highlight-teal {
          color: #00f2fe !important;
          font-weight: 700 !important;
          position: relative;
        }
        
        .nav-highlight-teal::after {
          content: '•';
          position: absolute;
          top: -10px;
          right: -8px;
          font-size: 1.2rem;
          color: #00f2fe;
        }

        .btn-header {
          background: hsl(var(--primary));
          color: white !important;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600 !important;
          transition: var(--transition);
          white-space: nowrap;
        }
        .btn-header:hover { transform: scale(1.05); }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .hamburger span {
          width: 28px;
          height: 3px;
          background: hsl(var(--primary));
          border-radius: 2px;
          transition: var(--transition);
        }

        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }

        /* HERO */
        .hero {
          padding-top: 170px;
          padding-bottom: 120px;
          background: radial-gradient(circle at top right, hsla(var(--primary), 0.05), transparent);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: center;
        }

        .h1 {
          font-size: clamp(2.5rem, 5vw, 3.6rem);
          line-height: 1.1;
          margin-bottom: 24px;
          color: hsl(var(--primary));
        }

        .p-large {
          font-size: 1.2rem;
          color: hsl(var(--text-muted));
          margin-bottom: 48px;
          max-width: 580px;
        }

        .hero-image-container { position: relative; display: flex; justify-content: center; }

        .hero-image-frame {
          width: 100%;
          max-width: 380px;
          aspect-ratio: 4/5;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 30px 60px -12px rgba(13, 71, 161, 0.2);
        }

        .hero-img-main { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
        .hero-image-container:hover .hero-img-main { transform: scale(1.05); }

        .hero-floating-card {
          position: absolute;
          bottom: 30px;
          left: 0px;
          padding: 16px 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          color: hsl(var(--primary));
          font-size: 0.95rem;
        }

        .dot { width: 10px; height: 10px; background: #25D366; border-radius: 50%; box-shadow: 0 0 10px #25D366; }

        /* TRUST BAR */
        .trust-bar {
          background: hsl(var(--bg-secondary));
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          padding: 24px 0;
        }

        .trust-content {
          display: flex;
          justify-content: center;
          gap: 24px;
          color: hsl(var(--text-muted));
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        /* SERVICES */
        .section-header { text-align: center; margin-bottom: 64px; }
        .h2 { font-size: 2.8rem; margin-bottom: 16px; color: hsl(var(--primary)); }
        .p-subtitle { font-size: 1.1rem; color: hsl(var(--text-muted)); }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .service-card {
          padding: 48px 32px;
          border-radius: 24px;
          transition: var(--transition);
          cursor: default;
        }

        .service-card:hover {
          transform: translateY(-8px);
          background: white;
          border-color: hsla(var(--primary), 0.2);
          box-shadow: 0 20px 40px rgba(13, 71, 161, 0.05);
        }

        .service-icon { font-size: 2.5rem; margin-bottom: 24px; }
        .p-card { color: hsl(var(--text-muted)); margin-top: 12px; font-size: 0.95rem; }

        /* DIFF SECTION */
        .diff-section { background: hsla(var(--primary), 0.02); }
        .diff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .diff-card { text-align: center; padding: 40px 20px; }
        .diff-icon-bg {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 2.2rem;
          box-shadow: 0 10px 20px rgba(13, 71, 161, 0.05);
        }

        /* CTA */
        .cta-section { padding-bottom: 0; }
        .cta-container {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          padding: 80px 48px;
          border-radius: 40px;
          text-align: center;
          color: white;
          width: 100%;
        }
        .h2-white { font-size: 3rem; margin-bottom: 24px; }
        .p-white { font-size: 1.3rem; margin-bottom: 48px; opacity: 0.9; }
        .btn-large {
          background: white;
          color: hsl(var(--primary));
          padding: 20px 48px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1.2rem;
          text-decoration: none;
          display: inline-block;
          transition: var(--transition);
        }
        .btn-large:hover { transform: scale(1.05); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }

        /* FAQ - GRID LAYOUT FOR WEB */
        .faq-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 20px; 
          width: 100%;
          margin: 0 auto; 
        }
        .faq-item { border-radius: 16px; overflow: hidden; height: fit-content; }
        .faq-summary { padding: 20px 24px; font-weight: 700; cursor: pointer; font-size: 1rem; list-style: none; display: flex; justify-content: space-between; }
        .faq-summary::after { content: "+"; font-size: 1.2rem; transition: var(--transition); }
        .faq-item[open] .faq-summary::after { transform: rotate(45deg); }
        .faq-content { padding: 0 24px 24px; color: hsl(var(--text-muted)); font-size: 0.95rem; }

        /* FOOTER */
        .footer { background: white; padding: 100px 0 60px; border-top: 1px solid #eee; }
        .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 80px; margin-bottom: 80px; }
        .footer-logo { height: 45px; margin-bottom: 24px; }
        .footer h4 { margin-bottom: 24px; font-size: 1.2rem; }
        .footer ul { list-style: none; }
        .footer li { margin-bottom: 12px; }
        .footer a { text-decoration: none; color: hsl(var(--text-muted)); transition: var(--transition); }
        .footer a:hover { color: hsl(var(--primary)); }
        .footer-bottom { border-top: 1px solid #eee; padding-top: 40px; text-align: center; color: #999; font-size: 0.9rem; }

        /* WHATSAPP FLOAT */
        .whatsapp-floating {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #25D366;
          color: white;
          padding: 12px 24px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          font-weight: 700;
          transition: var(--transition);
        }

        .whatsapp-floating img { width: 28px; height: 28px; }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .nav-menu { gap: 20px; }
          .nav-menu ul { gap: 20px; }
        }

        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .hero-text { order: 1; }
          .hero-image-container { order: 2; max-width: 400px; margin: 0 auto; }
          .hero-floating-card { left: 50%; transform: translateX(-50%); bottom: -20px; white-space: nowrap; }
          .hero-actions { display: flex; flex-direction: column; align-items: center; }
          .services-grid { grid-template-columns: 1fr; }
          .faq-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .footer-brand { grid-column: span 1; text-align: center; }
          .footer-logo { margin: 0 auto 24px; }
          .footer-nav, .footer-contact { text-align: center; }
          .h1 { font-size: 3rem; }
        }

        @media (max-width: 768px) {
          .header { background: white; border-bottom: 1px solid #eee; height: 75px; }
          .hamburger { display: flex; }
          
          .nav-menu {
            position: fixed;
            top: 75px;
            left: 0;
            width: 100%;
            background: white;
            padding: 40px 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transform: translateY(-120%);
            transition: var(--transition);
            display: flex;
            flex-direction: column;
            gap: 32px;
            align-items: center;
          }

          .nav-menu.active { transform: translateY(0); }
          .nav-menu ul { flex-direction: column; text-align: center; }
          .btn-header { margin-left: 0; padding: 15px 30px; width: 100%; text-align: center; }

          .service-card { cursor: default; }
          .whatsapp-floating { padding: 15px; border-radius: 50%; }

          .trust-content {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .separator { display: none; }

          .diff-grid { grid-template-columns: 1fr; gap: 20px; }

          .reforma-card-dark {
            padding: 40px 24px;
            text-align: center;
            flex-direction: column;
          }
          .reforma-visual { display: block; width: 100%; max-width: 350px; margin: 30px auto 0; flex: none; }
          .reforma-concept-img { width: 100%; height: auto; object-fit: contain; -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 100%); mask-image: radial-gradient(circle at center, black 60%, transparent 100%); }
          .cta-container { padding: 60px 24px; border-radius: 20px; }

          .wa-text { display: none; }
          .whatsapp-floating { padding: 15px; border-radius: 50%; bottom: 20px; right: 20px; }
        }

        /* REFORMA HIGHLIGHT SECTION STYLE */
        .reforma-highlight {
          padding: 40px 0;
          background-color: transparent;
        }
        .reforma-card-dark {
          background: #040a15;
          padding: 48px 60px;
          border-radius: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
          border: 1px solid rgba(0, 242, 254, 0.2);
          box-shadow: 0 40px 80px rgba(0, 242, 254, 0.1);
        }
        .h2-teal { font-size: 3rem; color: #00f2fe; margin: 0 0 24px; }
        .p-subtitle-light { color: #cbd5e1; font-size: 1.2rem; line-height: 1.6; }
        .reforma-features { display: flex; gap: 24px; margin: 32px 0; color: #fff; font-weight: 500; font-size: 0.95rem; }
        .reforma-visual { flex: 0 0 380px; display: flex; justify-content: center; position: relative; }
        .reforma-concept-img { 
          width: 100%; 
          height: auto; 
          border-radius: 24px; 
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          -webkit-mask-image: radial-gradient(circle at center, black 65%, transparent 100%);
          mask-image: radial-gradient(circle at center, black 65%, transparent 100%);
          transition: var(--transition);
        }
        .reforma-concept-img:hover {
          transform: scale(1.02);
          filter: brightness(1.1);
        }
        .btn-teal-home {
          background: linear-gradient(135deg, #00f2fe 0%, #10b981 100%);
          color: #040a15;
          padding: 20px 48px;
          border-radius: 14px;
          font-weight: 800;
          font-size: 1.1rem;
          text-decoration: none;
          display: inline-block;
          transition: var(--transition);
        }
        .btn-teal-home:hover { background: #fff; transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0, 242, 254, 0.3); }
        .overflow-hidden { overflow: hidden; }
      `}</style>
    </div>
  );
}
