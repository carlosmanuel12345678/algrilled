// src/components/MenuGrid.jsx
import { menuItems } from "../lib/data";
import { wppLink } from "../lib/utils";

export default function MenuGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {menuItems.map((p) => (
        <article
          key={p.id}
          className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition"
        >
          {p.image && (
            <div className="mb-4 w-full overflow-hidden rounded-xl bg-slate-100">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 sm:h-44 lg:h-48 object-cover"
                loading="lazy"
              />
            </div>
          )}

          <h3 className="text-lg sm:text-xl font-bold text-slate-900">{p.name}</h3>

          {p.description && (
            <p className="mt-1 text-sm sm:text-base text-slate-600">{p.description}</p>
          )}

          {p.price && (
            <p className="mt-2 font-semibold text-slate-900">{p.price}</p>
          )}

          <a
            href={wppLink(`Quiero ordenar: ${p.name}`)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-white font-semibold hover:bg-green-500 active:scale-[0.99] transition"
          >
            Pedir este
          </a>
        </article>
      ))}
    </div>
  );
}
