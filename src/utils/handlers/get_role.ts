import { usersRoleOptions } from "../data/users";

export const getRole = (role: string) => {
  const value = usersRoleOptions.find((i) => i.value === role)?.label;

  return value;
};
