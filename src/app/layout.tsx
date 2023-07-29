import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tuime',
    description: 'Thức ăn tốt nhất cho thú cưng',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="cupcake">
            <link rel="icon" href="/favicon.png" sizes="any" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
