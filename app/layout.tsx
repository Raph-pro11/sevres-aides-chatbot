import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import Footer from "@/app/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Boussole Sociale Sèvres",
  description:
    "Répondez à quelques questions simples et trouvez le bon interlocuteur pour vos démarches sociales à Sèvres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-porcelain text-ink">
        {children}
        <Footer />
      </body>
    </html>
  );
}
