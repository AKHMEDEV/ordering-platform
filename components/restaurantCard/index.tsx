"use client";
import React from "react";
import { StyledCard } from "./RestaurantCard.styles";
import DEFAULT_IMAGE from "@/assets/images/McDonalds-Logo.png";
import { StaticImageData } from "next/image";

interface RestaurantCardProps {
  id: string | number;
  name: string;
  img?: string | StaticImageData;
  link: string;
}

const DEFAULT_NAME = "Restaurant";

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, img, link }) => {
  const displayName = name || DEFAULT_NAME;
  const displayImage =
    img && typeof img !== "string" ? img.src : img || DEFAULT_IMAGE.src;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMAGE.src;
  };

  return (
    <StyledCard>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="restaurant-image"
          src={displayImage}
          alt={displayName}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="restaurant-name" title={displayName}>
          {displayName}
        </div>
      </a>
    </StyledCard>
  );
};

export default RestaurantCard;
