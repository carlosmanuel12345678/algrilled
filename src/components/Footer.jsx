export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        marginTop: "3rem",
        padding: "1.5rem 0",
        borderTop: "1px solid #e5e7eb",
        opacity: 0.9,
        fontSize: "0.9rem",
      }}
    >
      <p><strong>La Rubia de los Pollos</strong> el mejor Pollo horneado con sabor y calidad.</p>
      <p>
        Pedidos por WhatsApp:{" "}
        <a
          href="https://wa.me/18096039635"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22c55e", fontWeight: "bold" }}
        >
          809-603-9635
        </a>
      </p>
      <p>Santo Domingo, República Dominicana</p>
      <p>&copy; {new Date().getFullYear()} La Rubia de los Pollos</p>
    </footer>
  );
}
