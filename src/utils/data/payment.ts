import { ISelectOption } from "../interfaces/select.interface";

export const paymentOptions: ISelectOption[] = [
  {
    label: "Tarjeta de débito / crédito",
    value: "card",
  },
  {
    label: "Transferencia (PSE)",
    value: "pse",
  },
  {
    label: "Consignación bancaria",
    value: "deposit",
  },
]