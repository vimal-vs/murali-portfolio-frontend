import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/utils/cn'
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muralidharan Portfolio",
  description: "Personal Portfolio Website of Muralidharan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col w-full min-h-screen")}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
