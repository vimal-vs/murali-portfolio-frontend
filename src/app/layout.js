import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/layouts/NavBar";
import { cn } from '@/utils/cn'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muralidharan Portfolio",
  description: "Personal Portfolio Website of Muralidharan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col w-full min-h-screen")}>
        <NavBar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
