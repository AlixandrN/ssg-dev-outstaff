import type { Metadata } from "next";
import { Inter } from "next/font/google";
import I18nProvider from "@/app/providers/I18nProvider";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin", "cyrillic"] });
// const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Brand SSG",
  description: "SSG Internationalized app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
