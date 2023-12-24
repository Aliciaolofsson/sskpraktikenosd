import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'SjuksköterskePraktiken',
  description: 'Vaccinationer och laser i Östersund',
  keywords: [
    'sjuksköterskepraktiken',
    'vaccinationer i östersund',
    'vaccinering',
    'vaccinationer',
    'vaccin',
    'TBE',
    'TBE vaccination',
    'laser',
    'laser behandling',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=''>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
