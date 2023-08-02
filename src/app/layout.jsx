import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Astha dental clinic",
  description: "Astha dental clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-800 relative flex flex-col overflow-x-hidden`}>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
