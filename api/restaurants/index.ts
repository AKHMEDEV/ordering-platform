import { customAxios } from "../instances";
import { IRestaurant } from "@/types/restaurant";

export const getRestaurants = async () => {
  const { data } = await customAxios.get<{
    message: string;
    count: number;
    data: IRestaurant[];
  }>("/restaurants");

  return data.data;
};

export const getRestaurantById = async (id: string) => {
  const { data } = await customAxios.get<{
    message: string;
    data: IRestaurant;
  }>(`/restaurants/${id}`);

  return data.data;
};
