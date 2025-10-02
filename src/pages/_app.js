import "@/styles/globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      
      {/* Conteúdo principal com padding-bottom para Footer + Navbar */}
      <main className="container mx-auto px-4 py-8" style={{ paddingBottom: '100px' }}>
        <Component {...pageProps} />
      </main>
      
      {/* Footer fixo acima da Navbar */}
      <Footer />
      
      {/* Navbar fixa embaixo */}
      <Navbar />
    </div>
  );
}
