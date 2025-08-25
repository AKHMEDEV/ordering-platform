import RestaurantDetails from "@/app/restaurantDetails";
import { useRouter } from "next/router";
import React from "react";

const RestaurantDetailsWrapper = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  return <RestaurantDetails id={id as string} />;
};

export default RestaurantDetailsWrapper;
