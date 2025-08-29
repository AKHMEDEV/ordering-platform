import { IUserProfile } from "@/types/profile";
import { customAxios } from "../instances";

export const getMe = async (): Promise<IUserProfile> => {
  const { data } = await customAxios.get<{
    message: string;
    data: IUserProfile;
  }>("/users/me", { withCredentials: true });
  return data.data;
};

export const updateUser = async (
  userId: string,
  payload: Partial<IUserProfile>
): Promise<IUserProfile> => {
  const { data } = await customAxios.put<{
    message: string;
    data: IUserProfile;
  }>(`/users/${userId}`, payload, { withCredentials: true });
  return data.data;
};
