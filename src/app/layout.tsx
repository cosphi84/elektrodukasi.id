import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";
import Navigation from "@/components/organism/Navigation";
import { ThemeProviders } from "./theme-providers";
import SectionContainer from "@/components/dna/SectionContainer";

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
    <html lang="id-ID" className={`${poppinsFonts.className} scroll-smooth` } suppressHydrationWarning>
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <SectionContainer>
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </SectionContainer>
        </ThemeProviders>        
      </body>
    </html>
  );
}
