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
  idNumber?: number;
  city?: string;
  address?: string;
  company?: string;
  role?: string;
  dischargeDate?: string;
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
