import { ISelectOption } from "../interfaces/select.interface";
import inprogress from "@/assets/icons/dots/inprogress_state.svg";
import paid from "@/assets/icons/dots/paid_state.svg";
import pending from "@/assets/icons/dots/pending_state.svg";
import waiting from "@/assets/icons/dots/waiting_state.svg";
import cancel from "@/assets/icons/dots/cancel_state.svg";

export const quotesFilterOptions: ISelectOption[] = [
  {
    label: "Todas las cotizaciones",
    value: "all",
  },
  {
    label: "En proceso",
    value: "in_progress",
    iconImg: inprogress,
  },
  {
    label: "Pagada",
    value: "paid",
    iconImg: paid,
  },
  {
    label: "Pago pendiente",
    value: "pending",
    iconImg: pending,
  },
  {
    label: "Verificar pago",
    value: "verify",
    iconImg: waiting,
  },
  {
    label: "Cancelada",
    value: "canceled",
    iconImg: cancel,
  },
];
