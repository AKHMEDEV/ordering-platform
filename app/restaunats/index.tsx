"use client";
import { useRestaurants } from "@/hook/useRestaurants";
import Link from "next/link";
import { getImageUrl } from "@/utils/getImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useMemo } from "react";
// import "swiper/css";
// import "swiper/css/navigation";

export default function RestaurantsPage() {
  const { data: restaurantsResponse, isLoading } = useRestaurants();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Search va filter funksiyasi - useMemo ni hook chaqirishdan keyin ishlatamiz
  const filteredAndSortedRestaurants = useMemo(() => {
    if (!restaurantsResponse?.data) return [];

    let filtered = restaurantsResponse.data.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        restaurant.menus?.some((menu) =>
          menu.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort qilish
    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "views":
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "likes":
        filtered.sort((a, b) => b.likeCount - a.likeCount);
        break;
      default:
        break;
    }

    return filtered;
  }, [restaurantsResponse?.data, searchTerm, sortBy]);

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
        Loading restaurants...
      </div>
    );

  const restaurants = restaurantsResponse?.data || [];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "30px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <img
            src="/icons/restaurant.png"
            alt="Restaurant"
            width={48}
            height={48}
            style={{ marginRight: "15px" }}
          />
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#2c3e50",
              margin: 0,
            }}
          >
            Discover Amazing Restaurants
          </h1>
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "#7f8c8d",
            margin: 0,
          }}
        >
          Explore {filteredAndSortedRestaurants.length} of{" "}
          {restaurantsResponse?.count || 0} unique dining experiences
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            maxWidth: "400px",
          }}
        >
          <img
            src="/icons/search.png"
            alt="Search"
            width={20}
            height={20}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Search restaurants, cuisines, menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              fontSize: "16px",
              flex: 1,
              padding: "8px 0",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: "10px 20px",
              border: "1px solid #e1e8ed",
              borderRadius: "8px",
              backgroundColor: "white",
              cursor: "pointer",
              fontSize: "14px",
              outline: "none",
            }}
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
            <option value="views">Sort by Views</option>
            <option value="likes">Sort by Likes</option>
          </select>
        </div>
      </div>

      {/* Search Results Info */}
      {searchTerm && (
        <div
          style={{
            backgroundColor: "#e3f2fd",
            padding: "15px 20px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "1px solid #bbdefb",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/icons/search.png"
              alt="Search"
              width={20}
              height={20}
              style={{ marginRight: "10px" }}
            />
            <span style={{ fontSize: "16px", color: "#1976d2" }}>
              Search results for "{searchTerm}":{" "}
              {filteredAndSortedRestaurants.length} restaurants found
            </span>
          </div>
        </div>
      )}

      {/* Restaurants Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredAndSortedRestaurants?.map((r) => (
          <Link
            href={`/restaurants/${r.id}`}
            key={r.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid #f1f3f4",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              }}
            >
              {/* Image Section */}
              <div style={{ position: "relative", height: "220px" }}>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={0}
                  slidesPerView={1}
                  style={{ height: "100%" }}
                >
                  {r.images?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={getImageUrl(img)}
                        alt={`${r.name} ${i}`}
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
                    top: "15px",
                    right: "15px",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    backgroundColor: r.isApproved ? "#10b981" : "#f59e0b",
                    color: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  {r.isApproved ? "✓ Approved" : "⏳ Pending"}
                </div>

                {/* Rating Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <img
                    src="/icons/star.png"
                    alt="Rating"
                    width={16}
                    height={16}
                    style={{ marginRight: "6px" }}
                  />
                  {r.rating || "New"}
                </div>

                {/* Menu Preview Badge */}
                {r.menus && r.menus.length > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "15px",
                      padding: "6px 10px",
                      borderRadius: "16px",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {r.menus.length} Menu Items
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div
                style={{
                  padding: "20px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Restaurant Name and Description */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#2c3e50",
                    margin: "0 0 8px 0",
                    lineHeight: "1.3",
                  }}
                >
                  {r.name}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#7f8c8d",
                    margin: "0 0 15px 0",
                    lineHeight: "1.5",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    flex: 1,
                  }}
                >
                  {r.description ||
                    "Experience amazing cuisine and atmosphere at this wonderful restaurant."}
                </p>

                {/* Menu Preview */}
                {r.menus && r.menus.length > 0 && (
                  <div style={{ marginBottom: "15px" }}>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        marginBottom: "8px",
                        fontWeight: "500",
                      }}
                    >
                      Popular Menu Items:
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {r.menus.slice(0, 3).map((menu, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "4px 8px",
                            backgroundColor: "#f3f4f6",
                            borderRadius: "12px",
                            fontSize: "12px",
                            color: "#374151",
                            border: "1px solid #e5e7eb",
                          }}
                        >
                          {menu.name} - ${menu.price}
                        </span>
                      ))}
                      {r.menus.length > 3 && (
                        <span
                          style={{
                            padding: "4px 8px",
                            backgroundColor: "#dbeafe",
                            borderRadius: "12px",
                            fontSize: "12px",
                            color: "#1e40af",
                            border: "1px solid #bfdbfe",
                          }}
                        >
                          +{r.menus.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Stats Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    padding: "12px 0",
                    borderTop: "1px solid #f1f3f4",
                    borderBottom: "1px solid #f1f3f4",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/icons/eye.png"
                      alt="Views"
                      width={16}
                      height={16}
                      style={{ marginRight: "6px" }}
                    />
                    <span style={{ fontSize: "13px", color: "#7f8c8d" }}>
                      {r.views}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/icons/heart.png"
                      alt="Likes"
                      width={16}
                      height={16}
                      style={{ marginRight: "6px" }}
                    />
                    <span style={{ fontSize: "13px", color: "#7f8c8d" }}>
                      {r.likeCount}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/icons/comment.png"
                      alt="Comments"
                      width={16}
                      height={16}
                      style={{ marginRight: "6px" }}
                    />
                    <span style={{ fontSize: "13px", color: "#7f8c8d" }}>
                      {r.comments?.length || 0}
                    </span>
                  </div>
                </div>

                {/* Bottom Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/icons/clock.png"
                      alt="Time"
                      width={16}
                      height={16}
                      style={{ marginRight: "6px" }}
                    />
                    <span style={{ fontSize: "13px", color: "#7f8c8d" }}>
                      {r.openTime} - {r.closeTime}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/icons/location.png"
                      alt="Location"
                      width={16}
                      height={16}
                      style={{ marginRight: "6px" }}
                    />
                    <span style={{ fontSize: "13px", color: "#7f8c8d" }}>
                      {r.locationLatitude?.toFixed(2)},{" "}
                      {r.locationLongitude?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedRestaurants.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#7f8c8d",
          }}
        >
          <img
            src="/icons/restaurant.png"
            alt="No restaurants"
            width={64}
            height={64}
            style={{ marginBottom: "20px", opacity: 0.5 }}
          />
          <h3 style={{ margin: "0 0 10px 0", fontSize: "20px" }}>
            {searchTerm ? "No restaurants found" : "No restaurants available"}
          </h3>
          <p style={{ margin: 0, fontSize: "16px" }}>
            {searchTerm
              ? `Try adjusting your search for "${searchTerm}"`
              : "Check back later for new restaurants"}
          </p>
        </div>
      )}
    </div>
  );
}
