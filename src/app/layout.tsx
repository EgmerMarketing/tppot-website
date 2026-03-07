import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The Postpartum OT | Empowering Clinicians to Transform Postpartum Care',
    template: '%s | The Postpartum OT',
  },
  description: 'Join Melissa O\'Neal, OTR/L, and 600+ healthcare professionals transforming postpartum care. Mentorship, training, and community for clinicians ready to serve families.',
  metadataBase: new URL('https://thepostpartumot.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FEFDF8]">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
