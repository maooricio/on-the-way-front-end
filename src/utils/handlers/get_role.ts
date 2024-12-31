import { usersRoleOptions } from "../data/users"

export const getRole = (role: string) => {
    return usersRoleOptions.find(i => i.value === role)?.label;
}