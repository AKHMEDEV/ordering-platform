import React from "react";
import { restaurants } from "./data";
import { StyledRestaurantsList } from "./Restaurant.styles";
import { RestaurantCard } from "@/components";

const RestaurantsList = () => {
  return (
    <StyledRestaurantsList className="container">
      <div className="headerRow">
        <div className="titleWrap">
          <h2 className="h2">Popular Restaurants</h2>
        </div>
      </div>

      <div className="grid" role="grid" aria-label="Popular restaurants grid">
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
