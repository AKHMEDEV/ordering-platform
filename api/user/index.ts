import { IUser } from "@/types/auth";
import { customAxios } from "../instances";

export const getMe = async () => {
  const { data } = await customAxios.get<{ user: IUser }>("/users/me", {
    withCredentials: true,
  });
  return data.user;
};

export const updateUser = async (userId: string, payload: Partial<IUser>) => {
  const { data } = await customAxios.put<{ user: IUser }>(
    `/users/${userId}`,
    payload,
    { withCredentials: true }
  );
  return data.user;
};
