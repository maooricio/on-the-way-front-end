export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const parseCurrency = (value: string): number => {
  const numericValue = value
    .replace(/[^\d,-]/g, "")
    .replace(".", "")
    .replace(",", ".");

  return parseFloat(numericValue);
};

export const parsePercentage = (value: string): number => {
  return parseFloat(value.replace("%", "").trim());
};
