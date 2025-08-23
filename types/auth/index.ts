export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
}

export interface IRegisterPayload {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}
export interface IRegisterResponse {
  user: IUser;
}

export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResponse {
  user: IUser;
}
