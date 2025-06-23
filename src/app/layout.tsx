import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { HeadeLayout } from '@/components/header';
import { FooterLayout } from '@/components/footer';
import { ScrollToTopButton } from '@/components/scrollToTopButton';
import { LanguageProvider } from '@/contexts/languageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smart Travel Assistant',
  description: 'Hỗ trợ du khách khám phá Việt Nam dễ dàng hơn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-white text-black dark:bg-zinc-900 dark:text-white`}>
        <LanguageProvider>
          <HeadeLayout />
          {children}
          <ScrollToTopButton />
          <FooterLayout />
        </LanguageProvider>
      </body>
    </html>
  );
}
