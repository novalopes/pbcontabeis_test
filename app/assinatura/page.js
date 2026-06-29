"use client";

import { useState, useEffect } from "react";

export default function AssinaturaPage() {
  const [name, setName] = useState("Paula Bonifácio");
  const [role, setRole] = useState("Contadora e Fundadora");
  const [phone, setPhone] = useState("(11) 94964-0360");
  const [email, setEmail] = useState("paula@pbcontabeis.com.br");
  const [copiedRich, setCopiedRich] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);

  // Filter phone digits for WhatsApp URL
  const phoneDigits = phone.replace(/\D/g, "");

  // Generate the clean HTML code for signature
  const getSignatureHtml = () => {
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; line-height: 1.4; color: #333333; font-size: 14px; max-width: 500px; border-collapse: collapse;">
  <tr>
    <td valign="middle" style="padding-right: 20px; vertical-align: middle;">
      <a href="https://pbcontabeis.com.br" target="_blank" style="text-decoration: none;">
        <img src="https://pbcontabeis.com.br/images/pbc_logo_reduced.png" alt="PB Contábeis" width="110" style="border: 0; display: block; width: 110px; height: auto;" />
      </a>
    </td>
    <td valign="middle" style="border-left: 2px solid #0D47A1; width: 2px; padding: 0; vertical-align: middle;"></td>
    <td valign="middle" style="padding-left: 20px; vertical-align: middle;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
        <tr>
          <td style="padding-bottom: 2px;">
            <span style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #0D47A1; display: block; line-height: 1.2;">${name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 12px;">
            <span style="font-family: Arial, sans-serif; font-size: 13px; color: #555555; display: block; font-weight: 500; line-height: 1.2;">${role}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 0;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
              ${phone ? `
              <tr>
                <td style="padding-bottom: 4px; font-family: Arial, sans-serif; font-size: 13px; color: #555555; line-height: 1.2; vertical-align: middle;">
                  <span style="color: #0D47A1; font-weight: bold; margin-right: 4px; font-size: 14px;">📞</span>
                  <a href="https://wa.me/55${phoneDigits}" target="_blank" style="color: #555555; text-decoration: none; font-weight: 500;">${phone}</a>
                </td>
              </tr>` : ''}
              ${email ? `
              <tr>
                <td style="padding-bottom: 4px; font-family: Arial, sans-serif; font-size: 13px; color: #555555; line-height: 1.2; vertical-align: middle;">
                  <span style="color: #0D47A1; font-weight: bold; margin-right: 4px; font-size: 14px;">📧</span>
                  <a href="mailto:${email}" style="color: #555555; text-decoration: none; font-weight: 500;">${email}</a>
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding-bottom: 4px; font-family: Arial, sans-serif; font-size: 13px; color: #555555; line-height: 1.2; vertical-align: middle;">
                  <span style="color: #0D47A1; font-weight: bold; margin-right: 4px; font-size: 14px;">🌐</span>
                  <a href="https://pbcontabeis.com.br" target="_blank" style="color: #555555; text-decoration: none; font-weight: 500;">pbcontabeis.com.br</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 0; font-family: Arial, sans-serif; font-size: 13px; color: #555555; line-height: 1.2; vertical-align: middle;">
                  <span style="color: #0D47A1; font-weight: bold; margin-right: 4px; font-size: 14px;">📍</span>
                  <span style="color: #555555; font-weight: 500;">São Paulo / SP</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
  };

  const copyRichText = async () => {
    const signatureElement = document.getElementById("signature-preview-container");
    if (!signatureElement) return;

    try {
      const htmlContent = signatureElement.innerHTML;
      const plainText = signatureElement.innerText;

      const htmlBlob = new Blob([htmlContent], { type: "text/html" });
      const textBlob = new Blob([plainText], { type: "text/plain" });

      const item = new ClipboardItem({
        "text/html": htmlBlob,
        "text/plain": textBlob,
      });

      await navigator.clipboard.write([item]);
      setCopiedRich(true);
      setTimeout(() => setCopiedRich(false), 3000);
    } catch (err) {
      console.error("Falha ao copiar como rich text:", err);
      // Fallback
      try {
        await navigator.clipboard.writeText(getSignatureHtml());
        alert("Copiado como código HTML como fallback devido a restrições do navegador.");
      } catch (fallbackErr) {
        alert("Erro ao copiar. Por favor, copie manualmente.");
      }
    }
  };

  const copyHtmlCode = async () => {
    try {
      await navigator.clipboard.writeText(getSignatureHtml());
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 3000);
    } catch (err) {
      console.error("Falha ao copiar HTML:", err);
      alert("Erro ao copiar o código.");
    }
  };

  return (
    <div className="generator-wrapper">
      <header className="generator-header">
        <div className="generator-container header-flex">
          <a href="/">
            <img src="/images/logo_base.png" alt="PBContábeis Logo" className="brand-logo" />
          </a>
          <span className="badge">Gerador de Assinatura</span>
        </div>
      </header>

      <main className="generator-main">
        <div className="generator-container main-grid">
          {/* Controls Column */}
          <div className="control-card glass fade-in-up">
            <h2 className="title-section">Dados da Assinatura</h2>
            <p className="subtitle-section">Personalize as informações que aparecerão na sua assinatura de e-mail.</p>
            
            <div className="form-group">
              <label htmlFor="name-input">Nome Completo</label>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Paula Bonifácio"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role-input">Cargo / Função</label>
              <input
                id="role-input"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Ex: Contadora e Fundadora"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone-input">Telefone / WhatsApp</label>
              <input
                id="phone-input"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: (11) 94964-0360"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email-input">E-mail</label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: paula@pbcontabeis.com.br"
              />
            </div>

            <div className="action-buttons">
              <button className="btn-primary-action" onClick={copyRichText}>
                {copiedRich ? "✓ Copiado com Sucesso!" : "Copiar Assinatura (Recomendado)"}
              </button>
              <button className="btn-secondary-action" onClick={copyHtmlCode}>
                {copiedHtml ? "✓ Código Copiado!" : "Copiar Código HTML"}
              </button>
            </div>
            
            <p className="help-text">
              <strong>Dica:</strong> O botão recomendado copia a assinatura formatada. Depois de clicar nele, basta abrir as configurações do Gmail/Outlook e colar com <code>Ctrl + V</code>.
            </p>
          </div>

          {/* Preview Column */}
          <div className="preview-column fade-in-up" style={{ animationDelay: "0.15s" }}>
            <h2 className="title-section">Visualização</h2>
            <p className="subtitle-section">Veja em tempo real como sua assinatura aparecerá nos seus e-mails.</p>

            {/* Email Client Mockup */}
            <div className="email-mockup shadow">
              <div className="mockup-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="mockup-subject">Novo E-mail - PBContábeis</div>
              </div>
              <div className="mockup-fields">
                <div><strong>De:</strong> {name || "Seu Nome"} &lt;{email || "seu-email@pbcontabeis.com.br"}&gt;</div>
                <div><strong>Para:</strong> cliente@email.com.br</div>
                <div className="divider-line"></div>
              </div>
              <div className="mockup-body">
                <p>Olá,</p>
                <p>Segue abaixo o modelo da minha assinatura padrão de e-mail.</p>
                <p>Qualquer dúvida, estou à disposição.</p>
                <br />
                <p className="sign-off">Atenciosamente,</p>
                
                {/* Visual signature rendering container */}
                <div className="signature-border-box">
                  <div 
                    id="signature-preview-container"
                    dangerouslySetInnerHTML={{ __html: getSignatureHtml() }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="generator-footer">
        <div className="generator-container">
          <p>© 2026 PBContábeis • Gerador de Assinatura Corporativa</p>
        </div>
      </footer>

      <style jsx>{`
        .generator-wrapper {
          background: radial-gradient(circle at 10% 20%, rgba(13, 71, 161, 0.05) 0%, rgba(255, 255, 255, 1) 90%);
          min-height: 100vh;
          font-family: var(--font-inter), sans-serif;
          color: hsl(var(--text-main));
          display: flex;
          flex-direction: column;
        }

        .generator-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .generator-header {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding: 20px 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-logo {
          height: 38px;
        }

        .badge {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(13, 71, 161, 0.15);
        }

        .generator-main {
          flex: 1;
          padding: 50px 0 80px;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 450px 1fr;
          gap: 40px;
          align-items: start;
        }

        .control-card {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(13, 71, 161, 0.1);
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 20px 40px rgba(13, 71, 161, 0.04);
        }

        .title-section {
          font-size: 1.8rem;
          color: hsl(var(--primary));
          margin-bottom: 8px;
        }

        .subtitle-section {
          font-size: 0.95rem;
          color: hsl(var(--text-muted));
          margin-bottom: 30px;
          line-height: 1.4;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: white;
          font-family: inherit;
          font-size: 0.95rem;
          color: hsl(var(--text-main));
          transition: all 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px rgba(13, 71, 161, 0.1);
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 30px 0 20px;
        }

        .btn-primary-action {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 20px rgba(13, 71, 161, 0.2);
        }

        .btn-primary-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(13, 71, 161, 0.3);
        }

        .btn-secondary-action {
          background: white;
          color: hsl(var(--primary));
          border: 1.5px solid hsl(var(--primary));
          padding: 14px 24px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary-action:hover {
          background: rgba(13, 71, 161, 0.05);
          transform: translateY(-2px);
        }

        .help-text {
          font-size: 0.85rem;
          color: hsl(var(--text-muted));
          line-height: 1.5;
        }

        /* Email Mockup */
        .preview-column {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .email-mockup {
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .mockup-header {
          background: #f4f5f7;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .window-dots {
          display: flex;
          gap: 6px;
          margin-right: 20px;
        }

        .window-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .window-dots .red { background: #ff5f56; }
        .window-dots .yellow { background: #ffbd2e; }
        .window-dots .green { background: #27c93f; }

        .mockup-subject {
          font-size: 0.85rem;
          font-weight: 600;
          color: #718096;
        }

        .mockup-fields {
          padding: 16px 24px 8px;
          background: #fcfcfd;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .mockup-fields div {
          margin-bottom: 6px;
        }

        .divider-line {
          height: 1px;
          background: rgba(0, 0, 0, 0.06);
          margin-top: 12px;
        }

        .mockup-body {
          padding: 30px 40px;
          color: #2d3748;
          font-size: 0.95rem;
          line-height: 1.6;
          background: white;
          flex: 1;
        }

        .mockup-body p {
          margin-bottom: 12px;
        }

        .sign-off {
          margin-bottom: 24px !important;
          color: #718096;
        }

        .signature-border-box {
          border: 1px dashed rgba(13, 71, 161, 0.2);
          padding: 24px;
          border-radius: 12px;
          background: #fafbfc;
          display: inline-block;
        }

        .generator-footer {
          background: #f4f5f7;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          padding: 24px 0;
          text-align: center;
          font-size: 0.85rem;
          color: hsl(var(--text-muted));
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
