import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";
import Navigation from "@/components/organism/Navigation";

const poppinsFonts = Poppins({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Elektrodukasi - Belajar Elektronika dengan riang gembira.",
  description: "Blog kumpulan tulisan Teknik Elektronika, teori dasar, projek, microcontroller, pemrograman dan rupa-rupa.",
  robots: 'index, follow',
  keywords: ['elektronika', 'teori elektronika', 'microcontroller', 'arduino', 'pemrograman'],
  creator: 'Risam, S.T'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppinsFonts} antialiased`}
      >
        <Header />
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
