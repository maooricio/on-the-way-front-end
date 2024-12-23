import { ILoginFormData, IUser } from "../interfaces/user.interface";
import Cookies from "js-cookie";

export const emailRegEx =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{1,})$/;

export const userIsLogin = (): IUser | null => {
  const user = Cookies.get("authToken");
  return user ? JSON.parse(user) : null;
};

export const userLogout = (): void => {
  Cookies.remove('authToken');
};

export const userLogin = (userData: ILoginFormData): void => {
  const { user, password } = userData;
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user);

  const userToLogin: IUser = {
    email: isEmail ? user : `${user}@gmail.com`,
    username: isEmail ? user.split('@')[0] : user,
    password,
  };

  Cookies.set('authToken', JSON.stringify(userToLogin), { expires: 7 });
};
