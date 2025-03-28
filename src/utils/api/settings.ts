import { IEditUserData } from "../interfaces/settings.interface";
import http from "./http";

const SETTINGS_PATH = "settings";

const editUserInfo = (id: string, payload: IEditUserData) => {
  return http.patch(`${SETTINGS_PATH}/user/${id}`, payload);
};

export { editUserInfo };
