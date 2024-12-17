import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </div>
    );
  }