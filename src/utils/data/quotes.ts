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
    value: "to_verify",
    iconImg: waiting,
  },
  {
    label: "Cancelada",
    value: "canceled",
    iconImg: cancel,
  },
  {
    label: "Nuevo comentario",
    value: "comment",
  },
];

export const quotesHoursOptions: ISelectOption[] = [
  {
    label: "08:00",
    value: "08:00",
  },
  {
    label: "09:00",
    value: "09:00",
  },
  {
    label: "10:00",
    value: "10:00",
  },
  {
    label: "11:00",
    value: "11:00",
  },
  {
    label: "12:00",
    value: "12:00",
  },
  {
    label: "13:00",
    value: "13:00",
  },
  {
    label: "14:00",
    value: "14:00",
  },
  {
    label: "15:00",
    value: "15:00",
  },
  {
    label: "16:00",
    value: "16:00",
  },
  {
    label: "17:00",
    value: "17:00",
  },
  {
    label: "18:00",
    value: "18:00",
  },
];
