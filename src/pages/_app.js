import "@/styles/globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen relative flex flex-col">
      
      {/* Conteúdo principal com padding-bottom para Footer + Navbar */}
      <main className="container mx-auto px-4 py-8 flex-1">
        <Component {...pageProps} />
        {/* Footer rola junto com a página */}
        <Footer />
        {/* Navbar rola junto com a página */}
        <Navbar />
      </main>
    </div>
  );
}
