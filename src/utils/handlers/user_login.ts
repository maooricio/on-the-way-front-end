import { ILoginFormData, IUserLogged } from "../interfaces/user.interface";

export const emailRegEx =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{1,})$/;

export const getUserLogged = async (): Promise<IUserLogged> => {
  const loggedRes = await fetch("/api/login", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data: { body: IUserLogged } = await loggedRes.json();

  return data.body;
};

export const userLogout = async (): Promise<boolean> => {
  const logoutRes = await fetch("/api/login", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return logoutRes.ok;
};

export const userLogin = async (userData: ILoginFormData): Promise<boolean> => {
  const loginRes = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return loginRes.ok;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateUserForm = (formData: any, rules: any) => {
  return Object.keys(rules).some(
    (key: string) => formData[key].length < rules[key],
  );
};
