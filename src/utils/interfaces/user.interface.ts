import { StaticImageData } from "next/image";

export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  photo?: string | StaticImageData;
  phone?: string;
  idType?: string;
  idNumber?: string;
  city?: string;
  address?: string;
  company?: string;
  role?: string;
  dischargeDate?: string;
}

export interface IUserLogged {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
}

export interface ILoginFormData {
  user: string;
  password: string;
}

export interface IPasswordFormData {
  email: string;
}

export interface INewPasswordFormData {
  password: string;
  newPassword: string;
}
