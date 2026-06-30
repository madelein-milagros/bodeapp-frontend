import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'BodeApp - Sistema de Inventario',
  description: 'Sistema de control de inventario y ventas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}