import { Inter } from "next/font/google";
import "./globals.css";
import { Context } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ARnxt Ecommerce",
  description: "Ecommerce site by ARnxt",
};

export default function RootLayout({ children }) {
  return (

   
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
   
  );
}
