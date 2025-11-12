import { benefits } from "../lib/data";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">
        Nuestros Beneficios
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition"
          >
            <div className="text-4xl mb-3">{b.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
