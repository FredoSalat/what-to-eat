import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SelectedIngredientsContextProvider from "@/context/selected-ingredients-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What to eat!?",
  description: "Get the most out of what you have in your pantry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SelectedIngredientsContextProvider>
          <Navbar />
          {children}
          <Footer />
        </SelectedIngredientsContextProvider>
      </body>
    </html>
  );
}
