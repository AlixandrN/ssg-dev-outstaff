import type { Metadata } from "next";
import { Inter } from "next/font/google";
import I18nProvider from "@/app/providers/I18nProvider";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});
// const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default: "Brand SSG",
    template: "%s | Brand SSG", // for dynamic title
  },
  description: "SSG Internationalized app",
  robots: "index, follow",
  keywords: ["web", "dev", "web-dev"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-neutral-content`}>
        <I18nProvider>
          <main className={" p-0 pt-[100px] bg-inherit h-full"}>
            <Header />
            {children}
          </main>
        </I18nProvider>
      </body>
    </html>
  );
}
