import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Amanah Safar Marhaban | Travel Umrah & Haji Resmi Kemenhaj',
  description: 'Wujudkan Umrah impian dengan aman bersama Marhaban. Travel Umrah & Haji Khusus resmi Kemenhaj RI (PPIU: 23022300424760012), penerbangan direct, hotel bintang dekat Masjidil Haram & Nabawi.',
  keywords: ['Umrah Marhaban', 'Amanah Safar Marhaban', 'Travel Umrah Resmi', 'Umrah Reguler', 'Umrah Private', 'Haji Furoda', 'Bimbingan Sunnah'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased selection:bg-[#4B2476] selection:text-white bg-white dark:bg-[#0F0F14] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
