import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/ui/footer/Footer";
import Header from "./components/ui/header/Header";
import PageContainer from "./components/ui/pageContainer/PageContainer";
import "./globals.css";
const poppinsFont = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Frienddly",
  description:
    "Frienddly, votre pont culturel pour les étudiants d'outre-mer. Connectez-vous avec des commerces et familles locales pour une intégration harmonieuse en métropole",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      <body className={poppinsFont.className}>
        <PageContainer>
          <Header />
          {children}
        </PageContainer>
        <Footer />
      </body>
    </html>
  );
}
