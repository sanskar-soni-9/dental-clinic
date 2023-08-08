import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ScrollToTopButton from "./_components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Astha dental clinic",
  description: "Astha dental clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smoothmin-h-screen">
      <body
        className={`${inter.className} text-slate-800 relative flex flex-col overflow-x-hidden min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
