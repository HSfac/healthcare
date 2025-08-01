import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HearingCare Pro - 보청기 전문 서비스",
  description: "더 나은 청력을 위한 전문 보청기 서비스. 청력 검사, 맞춤 보청기, A/S까지 원스톱 서비스를 제공합니다.",
  keywords: "보청기, 청력검사, 청력보조기, 난청, 청력개선, 보청기전문점",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
