import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imposto de Renda em São Paulo | PB Contábeis</title>
        <meta
          name="description"
          content="Especialista em Imposto de Renda Pessoa Física em São Paulo. Atendimento rápido, seguro e personalizado."
        />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", margin: 0, color: "#333" }}>
        
        {/* HERO */}
        <section style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "auto" }}>
            <h1>Imposto de Renda sem complicação</h1>
            <p>
              Atendimento rápido e confiável para declaração, regularização e suporte completo.
            </p>

            <a
              href="https://wa.me/5511949640360?text=Olá,%20gostaria%20de%20ajuda%20com%20Imposto%20de%20Renda"
              style={{
                display: "inline-block",
                padding: "12px 20px",
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "6px",
                marginTop: "20px",
                fontWeight: "bold"
              }}
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section style={{ maxWidth: "900px", margin: "auto", padding: "40px 20px" }}>
          <h2>Serviços</h2>

          <div style={{ display: "grid", gap: "10px" }}>
            <div style={cardHighlight}>Imposto de Renda Pessoa Física</div>
            <div style={card}>Abertura de empresa</div>
            <div style={card}>Contabilidade para MEI</div>
            <div style={card}>Contabilidade para ME</div>
            <div style={card}>Regularização fiscal</div>
          </div>
        </section>

        {/* SOBRE */}
        <section style={{ maxWidth: "900px", margin: "auto", padding: "40px 20px" }}>
          <h2>Sobre</h2>
          <p>
            Atendimento contábil com foco em clareza, agilidade e proximidade.
            Especializada em imposto de renda e suporte a pequenos negócios.
          </p>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: "900px", margin: "auto", padding: "40px 20px" }}>
          <h2>Dúvidas frequentes</h2>

          <div style={card}>
            <strong>Preciso declarar imposto de renda?</strong>
            <p>Depende da sua renda, bens e outras condições. Consulte para análise.</p>
          </div>

          <div style={card}>
            <strong>Quanto custa?</strong>
            <p>O valor varia conforme a complexidade. Entre em contato para orçamento.</p>
          </div>

          <div style={card}>
            <strong>MEI precisa declarar?</strong>
            <p>Sim, em alguns casos. Podemos te orientar corretamente.</p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "auto" }}>
            <h2>Tire suas dúvidas agora mesmo</h2>

            <a
              href="https://wa.me/5511949640360?text=Olá,%20gostaria%20de%20ajuda%20com%20Imposto%20de%20Renda"
              style={{
                display: "inline-block",
                padding: "12px 20px",
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "6px",
                marginTop: "20px",
                fontWeight: "bold"
              }}
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ textAlign: "center", padding: "20px", fontSize: "0.9rem", color: "#777" }}>
          PB Contábeis • São Paulo
        </footer>

      </main>
    </>
  );
}

// estilos reutilizáveis
const card = {
  border: "1px solid #eee",
  padding: "15px",
  borderRadius: "6px",
  marginTop: "10px"
};

const cardHighlight = {
  ...card,
  fontSize: "1.2rem",
  fontWeight: "bold"
};