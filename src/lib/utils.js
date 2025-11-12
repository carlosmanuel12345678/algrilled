const DEFAULT_PHONE = "18096039635";

export const wppLink = (text) => {
  const phone = (import.meta?.env?.VITE_WPP_PHONE) || DEFAULT_PHONE;
  const msg = encodeURIComponent(text || "¡Hola Al Grilled! Quiero hacer un pedido.");
  return `https://wa.me/${phone}?text=${msg}`;
};
