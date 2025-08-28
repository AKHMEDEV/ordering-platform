import { IBaseResponse, IUser } from "@/types/auth";
import { customAxios } from "../instances";

export const getMe = async () => {
  const { data } = await customAxios.get<IBaseResponse<IUser>>("/users/me", {
    withCredentials: true,
  });
  return data.data; 
};

export const updateUser = async (userId: string, payload: Partial<IUser>) => {
  const { data } = await customAxios.put<IBaseResponse<IUser>>(
    `/users/${userId}`,
    payload,
    { withCredentials: true }
  );
  return data.data;
};