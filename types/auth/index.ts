export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
}

export interface IBaseResponse<T> {
  message: string;
  data: T;
}

export interface IRegisterPayload {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterResponse {
  message: string;
  user: IUser;
}

export interface ILoginResponse {
  message: string;
  user: IUser;
}
