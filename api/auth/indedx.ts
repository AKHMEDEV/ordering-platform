import {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "@/types/auth";
import { customAxios } from "../instances";

export const registerUser = async (payload: IRegisterPayload) => {
  const { data } = await customAxios.post<IRegisterResponse>(
    "/auth/register",
    payload,
    { withCredentials: true }
  );
  return data;
};

export const loginUser = async (payload: ILoginPayload) => {
  const { data } = await customAxios.post<ILoginResponse>(
    "/auth/login",
    payload,
    { withCredentials: true }
  );
  return data;
};

export const logoutUser = async () => {
  const { data } = await customAxios.post(
    "/auth/logout",
    {},
    { withCredentials: true }
  );
  return data;
};
