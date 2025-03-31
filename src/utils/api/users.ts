import http from "./http";

const USERS_PATH = "users";

const getAllUsers = (id: string) => {
  return http.get(`${USERS_PATH}/${id}`);
};

export { getAllUsers };
