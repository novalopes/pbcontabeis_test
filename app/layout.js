import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "PBContábeis | Contabilidade Humana e Especialista para MEI e ME em SP",
  description: "Contabilidade digital e humana para trabalhadores informais, MEIs e empresas em São Paulo. Especialistas em regularização e Imposto de Renda.",
  keywords: "Contabilidade MEI São Paulo, Imposto de Renda IRPF, Regularização CPF, Contador Digital, Assessoria Fiscal ME, PBContábeis",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/favicon-32x32.png",
  },
  openGraph: {
    title: "PBContábeis | Sua Contabilidade Próxima e Especializada",
    description: "Descomplique sua burocracia com quem entende do seu negócio. Atendimento digital com o cuidado humano que você merece.",
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
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-VSBKDB19YK" />
      </body>
    </html>
  );
}
