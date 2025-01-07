import React from "react";
import Events from "@/components/pages/Events";
import Home from "@/components/pages/Home";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

// Correct the prop typing for children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main>
        <Home />
        <Events />
        {children}
      </main>
      <Footer />
    </div>
  );
}
