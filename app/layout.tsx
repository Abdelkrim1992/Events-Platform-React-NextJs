import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight:['400','500','600','700'],
  variable : '--font-poppins'
});

export const metadata: Metadata = {
  title: "Events Platform",
  description: "Tick the event",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
