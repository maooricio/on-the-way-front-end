import { FakeUsersLogged } from "../data/fakers";
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

export const userLogin = (userData: ILoginFormData): boolean => {
  const { user, password } = userData;

  const userToLogin = FakeUsersLogged.find(
    (i) => i.email === user || i.username === user
  );

  if (!userToLogin || userToLogin.password !== password) {
    return false;
  }

  Cookies.set("authToken", JSON.stringify(userToLogin), { expires: 7 });
  return true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateUserForm = (formData: any, rules: any) => {
  return Object.keys(rules).some(
    (key: string) => formData[key].length < rules[key]
  );
};
