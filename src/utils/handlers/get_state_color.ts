export const getStateColor = (state: string): string => {
  switch (state) {
    case "in_progress":
      return "#F59E0B";
    case "paid":
      return "#22C55E";
    case "pending":
      return "#DCA7F6";
    case "verify":
      return "#CCCCCC";
    case "canceled":
      return "#EF4444";
    default:
      return "#CCCCCC";
  }
};
