import { Metadata } from 'next';
import './globals.css';
import { cuteFont, hiMelody } from '@/app/fonts';

export const metadata: Metadata = {
  title: 'Bondle',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`bg-tertiary ${cuteFont.variable}`}>{children}</body>
    </html>
  );
}
