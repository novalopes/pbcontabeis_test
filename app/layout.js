import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "PBContábeis | Imposto de Renda e Contabilidade Humana em São Paulo",
  description: "Contabilidade próxima e descomplicada para MEIs, MEs e profissionais informais. A agilidade do digital com o atendimento de quem resolve o seu problema.",
  keywords: "Imposto de Renda, Contabilidade MEI, Declaração IRPF, Contador São Paulo, Regularização CPF, Contabilidade Autônomo, PBContábeis",
  icons: {
    icon: "/images/favicon_dark.png",
  },
  openGraph: {
    title: "PBContábeis | Sua Contabilidade em Boas Mãos",
    description: "Atendimento próximo e digital para você e sua pequena empresa. Especialistas em descomplicar burocracias fiscais.",
    url: "https://pbcontabeis.com.br",
    siteName: "PBContábeis",
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "BrdaS77y_segN2X5gw5HabEkc8E_n0RxYmDSTyIpPzo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
