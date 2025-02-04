import { ILoginFormData, IUserLogged } from "../interfaces/user.interface";
import Cookies from "js-cookie";

export const emailRegEx =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{1,})$/;

export const getUserLogged = (): IUserLogged | null => {
  const user = Cookies.get("authToken");
  return user ? JSON.parse(user) : null;
};

export const userLogout = (): void => {
  Cookies.remove("authToken");
};

export const userLogin = (userData: ILoginFormData): void => {
  const { user, password } = userData;
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user);

  const userToLogin: IUserLogged = {
    email: isEmail ? user : `${user}@gmail.com`,
    username: isEmail ? user.split("@")[0] : user,
    firstName: "María Laura",
    lastName: "Dominguez",
    password,
    role: user === "client" || user === "client@gmail.com" ? "client" : "admin",
  };

  Cookies.set("authToken", JSON.stringify(userToLogin), { expires: 7 });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateUserForm = (formData: any, rules: any) => {
  return Object.keys(rules).some(
    (key: string) => formData[key].length < rules[key]
  );
};
