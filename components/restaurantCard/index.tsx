import React from "react";
import { StyledCard } from "./RestaurantCard.styles";
import DEFAULT_IMAGE from "@/assets/images/McDonalds-Logo.png";
import { StaticImageData } from "next/image";

interface RestaurantCardProps {
  name?: string;
  img?: string | StaticImageData;
}

const DEFAULT_NAME = "McDonalds";

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, img }) => {
  const displayName = name || DEFAULT_NAME;

  const displayImage =
    img && typeof img !== "string" ? img.src : img || DEFAULT_IMAGE.src;

  return (
    <StyledCard>
      <img className="restaurant-image" src={displayImage} alt={displayName} />
      <div className="restaurant-name">{displayName}</div>
    </StyledCard>
  );
};

export default RestaurantCard;
