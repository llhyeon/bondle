import { Noto_Sans_KR, Hi_Melody, Cute_Font } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto',
});

export const hiMelody = Hi_Melody({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-hi-melody',
});

export const cuteFont = Cute_Font({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cute',
});
