import {
  ILoginFormData,
  IPasswordFormData,
  IVerifyCodeData,
} from "../interfaces/user.interface";
import http from "./http";

const AUTH_PATH = "auth";

const authUser = (payload: ILoginFormData) => {
  return http.post(AUTH_PATH, {
    email: payload.user,
    password: payload.password,
  });
};

const sendEmailCode = (payload: IPasswordFormData) => {
  return http.post(`${AUTH_PATH}/send-code`, payload);
};

const verifyCode = (payload: IVerifyCodeData) => {
  return http.post(`${AUTH_PATH}/verify-code/${payload.email}`, {
    emailCode: payload.emailCode,
  });
};

const changePassword = (payload: ILoginFormData) => {
  return http.patch(`${AUTH_PATH}/password/${payload.user}`, {
    password: payload.password,
  });
};

export { authUser, sendEmailCode, verifyCode, changePassword };
