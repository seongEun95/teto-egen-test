import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테토-에겐 성격 유형 테스트",
  description: "당신은 테토? 에겐? 재미있는 성격 유형 테스트로 알아보세요!",
  keywords: ["테토", "에겐", "성격 유형", "성격 테스트", "심리 테스트", "MBTI", "게임 성격"],
  authors: [{ name: "테토-에겐 테스트" }],
  openGraph: {
    title: "테토-에겐 성격 유형 테스트",
    description: "당신은 테토? 에겐? 재미있는 성격 유형 테스트로 알아보세요!",
    url: "https://teto-egen.shop",
    siteName: "테토-에겐 테스트",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "테토-에겐 성격 유형 테스트 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "테토-에겐 성격 유형 테스트",
    description: "당신은 테토? 에겐? 재미있는 성격 유형 테스트로 알아보세요!",
    images: ["/og-image.svg"],
    creator: "@teto_egen_test",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: "G-7L7ZNBT8CZ",
  },
  alternates: {
    canonical: "https://teto-egen.shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7L7ZNBT8CZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7L7ZNBT8CZ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
