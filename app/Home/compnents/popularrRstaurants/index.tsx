import React from "react";
import { restaurants } from "./data";
import { StyledRestaurantsList } from "./Restaurant.styles";
import { RestaurantCard } from "@/components";

const RestaurantsList = () => {
  return (
    <StyledRestaurantsList className="container">
      <h2>Popular Restaurants</h2>

      <div className="grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            img={restaurant.img}
            link={restaurant.link}
          />
        ))}
      </div>
    </StyledRestaurantsList>
  );
};

export default RestaurantsList;
