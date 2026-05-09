import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  //  metadataBase: new URL("https://my-site.by"), to do add
  title: {
    default: "Brand SSG",
    template: "%s | Brand SSG", // for dynamic title
  },
  description: "WEB DEV APP", // to do enh
  robots: "index, follow",
  keywords: ["web", "dev", "web-dev"], // to do delete
  icons: {
    icon: "/favicon.ico", // стандарт
    // apple: "/apple-touch-icon.png", // for iPhone
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[rgb(249, 249, 249)]`}>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="grow pt-25">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
