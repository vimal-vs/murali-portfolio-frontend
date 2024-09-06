import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/utils/cn';
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { CommonProvider } from "@contexts/CommonContext";
import PageTransition from '@/components/reusable/PageTransition';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Muralidharan R",
  description: "Personal Portfolio Website of Muralidharan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col w-full min-h-screen")}>
        <CommonProvider>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </CommonProvider>
      </body>
    </html>
  );
}