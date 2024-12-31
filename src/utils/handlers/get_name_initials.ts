import { IUser } from "../interfaces/user.interface";

export const getNameInitials = (user: IUser) => {
  const name = user.firstName;
  const lastName = user.lastName;

  return `${name[0]}${lastName[0]}`;
};
