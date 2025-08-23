import React from "react";
import RestaurantCard from "@/components/restaurantCard";
import { restaurants } from "./data";
import { StyledRestaurantsList } from "./Restaurant.styles";

const RestaurantsList = () => {

  return (
    <StyledRestaurantsList className="container">
      <h2>Popular Restaurants</h2>

      <div className="grid">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="cardWrapper"
            onClick={() => handleClick(restaurant.link)}
          >
            <RestaurantCard name={restaurant.name} img={restaurant.img} />
          </div>
        ))}
      </div>
    </StyledRestaurantsList>
  );
};

export default RestaurantsList;
