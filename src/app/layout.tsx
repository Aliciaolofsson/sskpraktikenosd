import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata: Metadata = {
  title: 'SjuksköterskePraktiken',
  description: 'SjuksköterskePraktiken i Östersund',
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
