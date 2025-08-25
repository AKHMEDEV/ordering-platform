import { customAxios } from "../instances";
import {
  IRestaurant,
  IRestaurantsResponse,
  IRestaurantResponse,
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
