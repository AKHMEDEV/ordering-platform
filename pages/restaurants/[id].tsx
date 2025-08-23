import { RestaurantDetailsPage } from "@/app";
import { useRouter } from "next/router";
import React from "react";

const RestaurantDetailsWrapper = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  return <RestaurantDetailsPage id={id as string} />;
};

export default RestaurantDetailsWrapper;
