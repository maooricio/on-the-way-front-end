import fill from "@/assets/icons/dots/ddot_fill.svg";
import current from "@/assets/icons/dots/ddot_current.svg";
import empty from "@/assets/icons/dots/ddot_empty.svg";
import square_fill from "@/assets/icons/checkbox/square_fill.svg";
import square_empty from "@/assets/icons/checkbox/square_empty.svg";

export const getStageIcon = (isCurrent: boolean, isCompleted: boolean) => {
  if (isCompleted) {
    return fill;
  }

  if (isCurrent) {
    return current;
  }

  return empty;
};

export const getSquareIcon = (flag: boolean) => {
  return flag ? square_fill : square_empty;
};
