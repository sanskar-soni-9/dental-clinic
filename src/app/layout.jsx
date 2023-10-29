import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Astha dental clinic",
  description: "Astha dental clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smoothmin-h-screen">
      <body
        className={`${inter.className} text-slate-800 relative overflow-x-hidden min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
