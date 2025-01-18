export const getStateColor = (state: string): string => {
  switch (state) {
    case "En proceso":
      return "#F59E0B";
    case "Pagada":
      return "#22C55E";
    case "Pago pendiente":
      return "#DCA7F6";
    case "Verificar pago":
      return "#CCCCCC";
    case "Cancelada":
      return "#EF4444";
    default:
      return "#CCCCCC";
  }
};
