import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Providers from './components/Provider';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tuime',
  description: 'Thức ăn tốt nhất cho thú cưng',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="myTheme">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={clsx(
          inter.className,
          'scrollbar scrollbar-thumbs scrollbar-track',
        )}
      >
        <div className="large:bg-base-200 large:w-full large:h-[100vh] large:flex large:justify-center large:items-center large:text-2xl large:text-base-100 desktop:hidden">
          Responsive in progress...
        </div>
        <div className="large:hidden desktop:block desktop:overflow-hidden ">
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
