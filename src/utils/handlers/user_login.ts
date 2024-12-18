import { ILoginFormData, IUser } from "../interfaces/user.interface";

export const emailRegEx =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{1,})$/;

export const userIsLogin = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }

  return user;
};

export const userLogout = () => localStorage.removeItem("user");

export const userLogin = (userData: ILoginFormData) => {
  const { user, password } = userData;
  const isEmail = emailRegEx.test(user);

  const userToLogin: IUser = {
    email: !isEmail ? `${user}@gmail.com` : user,
    username: !isEmail ? user : user.split("@")[0],
    password,
  };

  localStorage.setItem("user", JSON.stringify(userToLogin));
};
