import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/widgets/header/Header";
import Head from "next/head";
import { Footer } from "@/widgets/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Про Автоматизацию",
  description: "Ваш эксперт по amoCRM от консультации в решении простых задач до полной автоматизации бизнес-процессов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        {/* SEO мета-теги */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ваш эксперт по amoCRM от консультации в решении простых задач до полной автоматизации бизнес-процессов" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Про Автоматизацию" />
        <meta
          property="og:description"
          content="Ваш эксперт по amoCRM от консультации в решении простых задач до полной автоматизации бизнес-процессов"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL к изображению для OpenGraph" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Теги для иконки и названия */}
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
        <link rel="icon" href="/favicon.ico" sizes="128x128" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />

        {/* Шрифты */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Заголовок страницы */}
        <title>Про автоматизация</title>
      </Head>
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
