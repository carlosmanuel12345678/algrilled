// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Imagen de portada */}
      <img
        src="/logo.png"          
        alt="Pollo horneado"
        width="2400"
        height="1400"
        loading="eager"
        className="w-full h-[68svh] md:h-[72vh] object-cover brightness-[.75] select-none pointer-events-none"
        style={{ WebkitTouchCallout: "none" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 grid place-items-center text-center text-white px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
  La Rubia de los Pollos, el mejor Pollo horneado en Santo Domingo
</h1>


          

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#menu"
              className="w-full sm:w-auto rounded-full border border-white/80 px-6 py-3 font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Ver menú
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
