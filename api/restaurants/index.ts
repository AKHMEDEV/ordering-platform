import { customAxios } from "../instances";
import {
  IRestaurantsResponse,
  IRestaurantResponse,
  IToggleLikeResponse,
} from "@/types/restaurant";

export const getRestaurants = async (): Promise<IRestaurantsResponse> => {
  const { data } = await customAxios.get<IRestaurantsResponse>("/restaurants");
  return data;
};

export const getRestaurantById = async (
  id: string
): Promise<IRestaurantResponse> => {
  const { data } = await customAxios.get<IRestaurantResponse>(
    `/restaurants/${id}`
  );
  return data;
};


export const toggleRestaurantLike = async (restaurantId: string): Promise<IToggleLikeResponse> => {
  const { data } = await customAxios.post<IToggleLikeResponse>(
    "/reaction/toggle-like",
    {
      targetId: restaurantId,
      targetType: "RESTAURANT",
    }
  );
  return data;
};

export const getRestaurantLikes = async (id: string) => {
  const { data } = await customAxios.get<{ message: string; likes: number }>(
    `/restaurants/${id}/likes`
  );
  return data;
};
