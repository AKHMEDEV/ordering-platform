import { useQuery } from "@tanstack/react-query";
import { IRestaurant } from "@/types/restaurant";
import { getRestaurantById, getRestaurants } from "@/api/restaurants.ts";

export const useRestaurants = () => {
  return useQuery<IRestaurant[]>({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
    staleTime: 1000 * 60, // 1 min cache
  });
};

// Bitta restoran
export const useRestaurant = (id: string) => {
  return useQuery<IRestaurant>({
    queryKey: ["restaurants", id],
    queryFn: () => getRestaurantById(id),
    enabled: !!id, // id bo‘lsa chaqiradi
  });
};
