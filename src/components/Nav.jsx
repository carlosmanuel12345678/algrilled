import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#menu", label: "Menú" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#testimonios", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO + NOMBRE */}
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="/logo.png" // Asegúrate de tener este archivo en public/logo.png
            alt="Logo Al Grilled"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="text-white font-bold text-lg leading-none">
            Al Grilled
          </span>
        </a>

        {/* MENÚ DESKTOP */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-white font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/18096039635?text=Hola!%20Quiero%20hacer%20un%20pedido."
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-500 font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </li>
        </ul>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <ul className="flex flex-col gap-4 p-4 text-center text-white text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/18096039635?text=Hola!%20Quiero%20hacer%20un%20pedido."
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-green-600 px-4 py-2 rounded-md hover:bg-green-500 font-semibold transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
