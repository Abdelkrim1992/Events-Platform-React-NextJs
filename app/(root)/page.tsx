import Events from "@/components/pages/Events";
import Home from "@/components/pages/Home";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function RootLayout({
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header/>
        <main>
          <Home/>
          <Events/>
        </main>
        <Footer/>
      </div>
    );
  }