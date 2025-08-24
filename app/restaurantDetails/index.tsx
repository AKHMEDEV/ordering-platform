"use client";
import React from "react";
import { useRestaurant } from "@/hook/useRestaurants";
import { getImageUrl } from "@/utils/getImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

const RestaurantDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data: restaurant, isLoading, isError } = useRestaurant(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !restaurant) return <p>Restaurant not found</p>;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        {restaurant.name}
      </h1>
      <p style={{ fontSize: "16px", marginBottom: "15px" }}>
        {restaurant.description}
      </p>

      <p>
        ⏰ {restaurant.openTime} - {restaurant.closeTime}
      </p>
      <p>⭐ Rating: {restaurant.rating}</p>
      <p>👀 Views: {restaurant.views}</p>
      <p>❤️ Likes: {restaurant.likeCount}</p>

      {/* Swiper for images */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        style={{ marginTop: "20px", borderRadius: "12px", overflow: "hidden" }}
      >
        {restaurant.images?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={getImageUrl(img)}
              alt={`${restaurant.name}-${idx}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Menus */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>🍽 Menu</h2>
        {restaurant.menus?.length ? (
          <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
            {restaurant.menus.map((m, idx) => (
              <li key={idx}>
                {m.name} – ${m.price} {m.isAvailable ? "✅" : "❌"}
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
