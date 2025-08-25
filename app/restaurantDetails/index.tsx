"use client";
import React from "react";
import { useRestaurant } from "@/hook/useRestaurants";
import { getImageUrl } from "@/utils/getImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MenuSection } from "./components";
// import "swiper/css";
// import "swiper/css/navigation";

const RestaurantDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data: restaurant, isLoading, isError } = useRestaurant(id);

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "18px",
          color: "#666",
        }}
      >
        <img
          src="/icons/restaurant.png"
          alt="Loading"
          width={40}
          height={40}
          style={{ marginRight: "10px" }}
        />
        Loading restaurant details...
      </div>
    );

  if (isError || !restaurant)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
          color: "#e74c3c",
        }}
      >
        <img
          src="/icons/restaurant.png"
          alt="Error"
          width={64}
          height={64}
          style={{ marginBottom: "20px", opacity: 0.5 }}
        />
        <h3 style={{ margin: "0 0 10px 0", fontSize: "20px" }}>
          Restaurant not found
        </h3>
        <p style={{ margin: 0, fontSize: "16px" }}>
          The restaurant you're looking for doesn't exist
        </p>
      </div>
    );

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          {/* Image Gallery */}
          <div style={{ position: "relative", height: "450px" }}>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={0}
              slidesPerView={1}
              style={{ height: "100%" }}
            >
              {restaurant.images?.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={getImageUrl(img)}
                    alt={`${restaurant.name}-${idx}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Status Badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                padding: "8px 16px",
                borderRadius: "25px",
                fontSize: "13px",
                fontWeight: "600",
                backgroundColor: restaurant.isApproved ? "#10b981" : "#f59e0b",
                color: "white",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              {restaurant.isApproved ? "✓ Approved" : "⏳ Pending"}
            </div>

            {/* Rating Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                display: "flex",
                alignItems: "center",
                padding: "10px 16px",
                borderRadius: "25px",
                backgroundColor: "rgba(0,0,0,0.8)",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                src="/icons/star.png"
                alt="Rating"
                width={20}
                height={20}
                style={{ marginRight: "8px" }}
              />
              {restaurant.rating || "New"}
            </div>

            {/* Menu Count Badge */}
            {restaurant.menus && restaurant.menus.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  padding: "8px 16px",
                  borderRadius: "25px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                  backdropFilter: "blur(10px)",
                }}
              >
                <img
                  src="/icons/menu.png"
                  alt="Menu"
                  width={18}
                  height={18}
                  style={{ marginRight: "6px" }}
                />
                {restaurant.menus.length} Menu Items
              </div>
            )}
          </div>

          {/* Header Info */}
          <div style={{ padding: "30px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="/icons/restaurant.png"
                alt="Restaurant"
                width={48}
                height={48}
                style={{ marginRight: "20px" }}
              />
              <div>
                <h1
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#2c3e50",
                    margin: "0 0 8px 0",
                  }}
                >
                  {restaurant.name}
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#7f8c8d",
                    margin: 0,
                    lineHeight: "1.5",
                  }}
                >
                  {restaurant.description ||
                    "Experience amazing cuisine and atmosphere at this wonderful restaurant."}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "20px",
                padding: "20px 0",
                borderTop: "1px solid #f1f3f4",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/icons/eye.png"
                    alt="Views"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#2c3e50",
                  }}
                >
                  {restaurant.views}
                </div>
                <div style={{ fontSize: "14px", color: "#7f8c8d" }}>Views</div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/icons/heart.png"
                    alt="Likes"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#2c3e50",
                  }}
                >
                  {restaurant.likeCount}
                </div>
                <div style={{ fontSize: "14px", color: "#7f8c8d" }}>Likes</div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/icons/menu.png"
                    alt="Menu"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#2c3e50",
                  }}
                >
                  {restaurant.menus?.length || 0}
                </div>
                <div style={{ fontSize: "14px", color: "#7f8c8d" }}>
                  Menu Items
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/icons/comment.png"
                    alt="Comments"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#2c3e50",
                  }}
                >
                  {restaurant.comments?.length || 0}
                </div>
                <div style={{ fontSize: "14px", color: "#7f8c8d" }}>
                  Comments
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          {/* Left Column - Menu */}
          <MenuSection menus={restaurant.menus || []} />

          {/* Right Column - Info Cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Working Hours */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "25px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#2c3e50",
                  margin: "0 0 20px 0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/icons/clock.png"
                  alt="Time"
                  width={24}
                  height={24}
                  style={{ marginRight: "12px" }}
                />
                Working Hours
              </h3>
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                  fontSize: "18px",
                  color: "#2c3e50",
                  fontWeight: "600",
                  textAlign: "center",
                  border: "2px solid #e9ecef",
                }}
              >
                {restaurant.openTime} - {restaurant.closeTime}
              </div>
            </div>

            {/* Location */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "25px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#2c3e50",
                  margin: "0 0 20px 0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/icons/location.png"
                  alt="Location"
                  width={24}
                  height={24}
                  style={{ marginRight: "12px" }}
                />
                Location
              </h3>
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                  fontSize: "16px",
                  color: "#2c3e50",
                  fontWeight: "500",
                  textAlign: "center",
                  border: "2px solid #e9ecef",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <strong>Coordinates:</strong>
                </div>
                {restaurant.locationLatitude}, {restaurant.locationLongitude}
              </div>
            </div>

            {/* Quick Actions */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "25px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#2c3e50",
                  margin: "0 0 20px 0",
                }}
              >
                Quick Actions
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 20px",
                    backgroundColor: "#10b981",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#059669";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#10b981";
                  }}
                >
                  <img
                    src="/icons/heart.png"
                    alt="Like"
                    width={20}
                    height={20}
                    style={{ marginRight: "8px" }}
                  />
                  Like Restaurant
                </button>

                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 20px",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#3b82f6";
                  }}
                >
                  <img
                    src="/icons/comment.png"
                    alt="Comment"
                    width={20}
                    height={20}
                    style={{ marginRight: "8px" }}
                  />
                  Write Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        {restaurant.comments && restaurant.comments.length > 0 && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#2c3e50",
                margin: "0 0 20px 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/icons/comment.png"
                alt="Comments"
                width={28}
                height={28}
                style={{ marginRight: "12px" }}
              />
              Customer Reviews ({restaurant.comments.length})
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "20px",
              }}
            >
              {restaurant.comments.map((comment, idx) => (
                <div
                  key={comment.id}
                  style={{
                    border: "1px solid #f1f3f4",
                    padding: "20px",
                    borderRadius: "12px",
                    backgroundColor: "#f8f9fa",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <img
                      src="/icons/profilepng.png"
                      alt="User"
                      width={32}
                      height={32}
                      style={{ marginRight: "10px" }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#2c3e50",
                        }}
                      >
                        Customer
                      </div>
                      <div style={{ fontSize: "12px", color: "#7f8c8d" }}>
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      color: "#2c3e50",
                      lineHeight: "1.5",
                    }}
                  >
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
