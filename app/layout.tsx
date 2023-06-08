import './globals.css';
import { Inter } from 'next/font/google';
import NavMenu from './NavMenu';
import AuthProvider from './AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Siddur',
  description: 'Create by Aaron Wolf'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>
          {' '}
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
