import { IEditUser } from "@/components/admin/users/edit";
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
  });
};

const deleteUser = (id: string) => {
  return http.patch(`${USERS_PATH}/${id}`);
};

const editUser = (id: string | undefined, body: IEditUser) => {
  return http.put(`${USERS_PATH}/${id}`, body);
};

const getCustomers = () => {
  return http.get(`${USERS_PATH}/customers`);
};

export { getAllUsers, createUser, deleteUser, editUser, getCustomers };
