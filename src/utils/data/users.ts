import { ISelectOption } from "../interfaces/select.interface";

export const usersRoleOptions: ISelectOption[] = [
  {
    label: "Mostrar todos los usuarios",
    value: "all",
  },
  {
    label: "Administrador",
    value: "admin",
  },
  {
    label: "Cliente",
    value: "customer",
  },
];
