import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from 'next/font/google';
import "./globals.css";

const nunito = Nunito({ weight: "400", subsets: ["latin"]});
const NunitoSans = Nunito_Sans({ weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Elektrodukasi",
  description: "Belajar Teknik Elektro untuk pelajar, mahasiswa dan praktisi.",
  referrer: 'origin-when-cross-origin',
  keywords: ['Teknik Elektro', 'Elektronika', 'elektrodukasi'],
  authors: [{ name: 'Risam, S.T', url:"https://elektrodukasi.id/about"}],
  creator: 'Risam, S.T',
  publisher: 'Risam, S.T',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NunitoSans.className} ${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
