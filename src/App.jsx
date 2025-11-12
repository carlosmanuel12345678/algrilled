import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MenuGrid from "./components/MenuGrid";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import ContactBlock from "./components/ContactBlock";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <Nav />
      <main>
        <Hero />
        {/* MENÚ */}
        <section id="menu" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestro Menú</h2>
            <MenuGrid />
          </div>
        </section>

        <Benefits />
        <Testimonials />
        <ContactBlock />
        <Footer />

      </main>

      <footer className="py-8 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Al Grilled  Todos los derechos reservados.
      </footer>
    </div>
  );
}
