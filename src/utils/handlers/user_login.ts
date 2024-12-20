import { ILoginFormData, IUser } from "../interfaces/user.interface";
import { getCookie, removeCookie, setCookie } from "./cookies";

export const emailRegEx =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{1,})$/;

export const userIsLogin = (): IUser | null => {
  const user = getCookie("user");
  return user ? JSON.parse(user) : null;
};

export const userLogout = (): void => {
  removeCookie("user");
};

export const userLogin = (userData: ILoginFormData): void => {
  const { user, password } = userData;
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user);

  const userToLogin: IUser = {
    email: isEmail ? user : `${user}@gmail.com`,
    username: isEmail ? user.split('@')[0] : user,
    password,
  };

  setCookie('user', JSON.stringify(userToLogin), 7);
};
