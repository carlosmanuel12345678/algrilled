// src/components/ContactBlock.jsx
export default function ContactBlock() {
  return (
    <section id="contacto" className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Ubicación y contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Columna izquierda: datos + CTAs */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Encuéntranos</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Calle Rafael Antonio Pichardo #4, Ensanche La Fe (antes del Santo Socorro), Santo Domingo.
            </p>

            <p className="text-gray-400 mb-2">
              <strong>Horario:</strong> Lun–Dom 12:00 p. m. – 10:00 p. m.
            </p>

            {/* SIN enlace tel: (solo texto copiable) */}
            <p className="text-gray-400 mb-6 select-all">
              <strong>Tel:</strong> <span className="text-orange-400">809-603-9635</span>
            </p>

            {/* Botones: full width en móvil, inline en desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/18096039635?text=Hola%20quiero%20hacer%20un%20pedido%20de%20pollo%20horneado%20🔥"
                target="_blank" rel="noreferrer"
                className="btn bg-green-600 text-white hover:bg-green-500 text-center"
              >
                Pedir por WhatsApp
              </a>

              <a
                href="https://maps.google.com/?q=18.502058131107926,-69.92200590428432"
                target="_blank" rel="noreferrer"
                className="btn btn-outline text-center"
              >
                Abrir en Maps
              </a>

              <a
                href="https://www.pedidosya.com.do/restaurantes/santo-domingo-d-n/algrilledrd-c72ee1bf-647f-46d5-9f88-ffd3ee50c237-menu"
                target="_blank" rel="noreferrer"
                className="btn bg-[#E51E2A] text-white hover:opacity-90 text-center"
              >
                Pedir en PedidosYa
              </a>

              <a
                href="https://www.ubereats.com/store/al-grilled-santo-domingo/_KYRaQR1WeqW4TDDzTvl2A?diningMode=DELIVERY"
                target="_blank" rel="noreferrer"
                className="btn bg-[#06C167] text-white hover:opacity-90 text-center"
              >
                Pedir en Uber Eats
              </a>

              {/* Extra: Instagram (ocupa toda la fila en móvil) */}
              <a
                href="https://www.instagram.com/Algrilled_rd"
                target="_blank" rel="noreferrer"
                className="btn btn-outline sm:col-span-2 text-center"
              >
                Instagram
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              💸 Código Uber Eats: <strong>eats-9962g1</strong> (descuento en tu primer pedido).
            </p>
          </div>

          {/* Columna derecha: mapa responsivo */}
          <div>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <iframe
                src="https://www.google.com/maps?q=18.502058131107926,-69.92200590428432&z=16&output=embed"
                title="Mapa Al Grilled"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          © {new Date().getFullYear()} <strong>Al Grilled</strong> — Santo Domingo, RD
        </p>
      </div>
    </section>
  );
}
