import fill from "@/assets/icons/dots/ddot_fill.svg";
import empty from "@/assets/icons/dots/ddot_empty.svg";

export const getStageIcon = (flag: boolean) => {
  return flag ? fill : empty;
};
