import { ILoginFormData } from "../interfaces/user.interface";
import http from "./http";

const AUTH_PATH = "auth";

const authUser = (payload: ILoginFormData) => {
  return http.post(AUTH_PATH, {
    email: payload.user,
    password: payload.password,
  });
};

export { authUser };
