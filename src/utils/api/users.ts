import { IUser } from "../interfaces/user.interface";
import http from "./http";

const USERS_PATH = "users";

const getAllUsers = (id: string) => {
  return http.get(`${USERS_PATH}/${id}`);
};

const createUser = (body: IUser) => {
  return http.post(`${USERS_PATH}`, {
    ...body,
    documentType: body.idType,
    documentNumber: body.idNumber,
    companyName: body.company,
  });
};

const deleteUser = (id: string) => {
  return http.patch(`${USERS_PATH}/${id}`);
};

export { getAllUsers, createUser, deleteUser };
