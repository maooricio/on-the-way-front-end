export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface ILoginFormData {
  user: string;
  password: string;
}

export interface IPasswordFormData {
    email: string;
}
