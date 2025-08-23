"use client";
import React from "react";
import { useRestaurant } from "@/hook/useRestaurants";
import { getImageUrl } from "@/utils/getImageUrl";

const RestaurantDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data: restaurant, isLoading, isError } = useRestaurant(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !restaurant) return <p>Restaurant not found</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>
        ⏰ {restaurant.openTime} - {restaurant.closeTime}
      </p>
      <p>⭐ Rating: {restaurant.rating}</p>
      <p>👀 Views: {restaurant.views}</p>

      {/* Images */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {restaurant.images?.length ? (
          restaurant.images.map((img, idx) => (
            <img
              key={idx}
              src={getImageUrl(img)}
              alt={`${restaurant.name}-${idx}`}
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ))
        ) : (
          <img
            src="/default-restaurant.jpg"
            alt={restaurant.name}
            style={{ width: "200px", height: "150px", borderRadius: "10px" }}
          />
        )}
      </div>

      {/* Menus */}
      <div style={{ marginTop: "30px" }}>
        <h2>🍽 Menu</h2>
        {restaurant.menus?.length ? (
          <ul>
            {restaurant.menus.map((m, idx) => (
              <li key={idx}>
                {m.name} - ${m.price} {m.isAvailable ? "✅" : "❌"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No menu items yet.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
