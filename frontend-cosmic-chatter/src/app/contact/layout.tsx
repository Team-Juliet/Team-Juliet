import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmic Chatter",
  description: "Embark on a cosmic journey with Cosmic Chatter, where you'll dive into the depths of space to decode enigmatic radio signals. Join our interstellar investigation and become a citizen scientist as you analyze celestial whispers for potential signs of extraterrestrial intelligence!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
    </html>
  );
}
