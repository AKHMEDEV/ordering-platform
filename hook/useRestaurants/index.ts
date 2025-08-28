import { useQuery } from "@tanstack/react-query";
import { IRestaurant, IRestaurantsResponse } from "@/types/restaurant";
import { getRestaurantById, getRestaurants } from "@/api/restaurants";
import { useState } from "react";
import { toggleRestaurantLike } from "@/api/restaurants";

export const useRestaurants = () => {
  return useQuery<IRestaurantsResponse>({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
    staleTime: 1000 * 60, // 1 daqiqa
    refetchOnWindowFocus: true,
  });
};

export const useRestaurant = (id: string) => {
  return useQuery<IRestaurant>({
    queryKey: ["restaurants", id],
    queryFn: () => getRestaurantById(id).then((response) => response.data),
    enabled: !!id,
  });
};


export const useRestaurantLike = (restaurant: IRestaurant) => {
  const [liked, setLiked] = useState(restaurant.liked ?? false);
  const [likeCount, setLikeCount] = useState(restaurant.likeCount);

  const handleToggleLike = async () => {
    try {
      const res = await toggleRestaurantLike(restaurant.id);
      setLiked(res.liked);
      setLikeCount(res.likeCount);
    } catch (err) {
      console.error("Like toggle failed:", err);
    }
  };

  return { liked, likeCount, handleToggleLike };
};


