"use client";
import { useRestaurants, useRestaurantLike } from "@/hook/useRestaurants";
import Link from "next/link";
import { getImageUrl } from "@/utils/getImageUrl";
import { useRestaurantComments, useCreateComment } from "@/hook/useComments";
import { useState, useMemo } from "react";

export default function RestaurantsPage() {
  const { data: restaurantsResponse, isLoading } = useRestaurants();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [expandedComments, setExpandedComments] = useState<string | null>(null);
  const [commentTexts, setCommentTexts] = useState<{ [key: string]: string }>(
    {}
  );

  function formatDateTime(dateString: string) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  // Search va filter funksiyasi
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
          maxHeight: "60px",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
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
              borderRadius: "12px",
              backgroundColor: "white",
              cursor: "pointer",
              fontSize: "14px",
              outline: "none",
            }}
          >
            <option value="name">sort by name</option>
            <option value="rating">sort by rating</option>
            <option value="views">sort by views</option>
            <option value="likes">sort by likes</option>
          </select>
        </div>
      </div>

      {/* Restaurants List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {filteredAndSortedRestaurants?.map((r) => (
          <RestaurantCard
            key={r.id}
            restaurant={r}
            expandedComments={expandedComments}
            setExpandedComments={setExpandedComments}
            commentTexts={commentTexts}
            setCommentTexts={setCommentTexts}
          />
        ))}
      </div>
    </div>
  );
}

// ✅ Yangi component — hookni shu yerda ishlatamiz
function RestaurantCard({
  restaurant,
  expandedComments,
  setExpandedComments,
  commentTexts,
  setCommentTexts,
}: {
  restaurant: any;
  expandedComments: string | null;
  setExpandedComments: React.Dispatch<React.SetStateAction<string | null>>;
  commentTexts: { [key: string]: string };
  setCommentTexts: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
}) {
  const { liked, likeCount, handleToggleLike } = useRestaurantLike(restaurant);

  return (
    <div key={restaurant.id}>
      <Link
        href={`/restaurants/${restaurant.id}`}
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
          }}
        >
          {/* Top - Image */}
          <div style={{ position: "relative", height: "400px", width: "100%" }}>
            {restaurant.images && restaurant.images.length > 0 ? (
              <img
                src={getImageUrl(restaurant.images[0])}
                alt={restaurant.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7f8c8d",
                  fontSize: "16px",
                }}
              >
                <img
                  src="/icons/restaurant.png"
                  alt="No image"
                  width={48}
                  height={48}
                  style={{ opacity: 0.5 }}
                />
              </div>
            )}
          </div>

          {/* Bottom - Content */}
          <div style={{ padding: "25px" }}>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "black",
                margin: "0 0 15px 0",
                lineHeight: "1.3",
              }}
            >
              {restaurant.name}
            </h3>

            <p
              style={{
                fontSize: "16px",
                color: "#7f8c8d",
                margin: "0 0 20px 0",
                lineHeight: "1.6",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {restaurant.description ||
                "Experience amazing cuisine and atmosphere at this wonderful restaurant."}
            </p>

            {/* Stats Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                padding: "15px 0",
              }}
            >
              <div style={{ display: "flex", gap: "25px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/icons/eye.png"
                    alt="Views"
                    width={18}
                    height={18}
                    style={{ marginRight: "4px" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#7f8c8d",
                      fontWeight: "500",
                    }}
                  >
                    {restaurant.views}
                  </span>
                </div>

                {/* ❤️ Like Toggle */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggleLike();
                  }}
                >
                  <img
                    src={liked ? "/icons/heart.png" : "/icons/heart-outline.png"}
                    alt="Likes"
                    width={18}
                    height={18}
                    style={{
                      marginRight: "8px",
                      filter: liked ? "drop-shadow(0 0 1px red)" : "none",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: liked ? "red" : "#7f8c8d",
                      fontWeight: "500",
                    }}
                  >
                    {likeCount}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/icons/menu.png"
                    alt="Menu"
                    width={18}
                    height={18}
                    style={{ marginRight: "8px" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#7f8c8d",
                      fontWeight: "500",
                    }}
                  >
                    {restaurant.menus?.length || 0} menu items
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Comments Section */}
      <RestaurantComments
        restaurantId={restaurant.id}
        restaurantName={restaurant.name}
        expanded={expandedComments === restaurant.id}
        onToggle={() =>
          setExpandedComments(
            expandedComments === restaurant.id ? null : restaurant.id
          )
        }
        commentText={commentTexts[restaurant.id] || ""}
        onCommentChange={(text) =>
          setCommentTexts({ ...commentTexts, [restaurant.id]: text })
        }
      />
    </div>
  );
}



// Restaurant Comments Component
function RestaurantComments({
  restaurantId,
  restaurantName,
  expanded,
  onToggle,
  commentText,
  onCommentChange,
}: {
  restaurantId: string;
  restaurantName: string;
  expanded: boolean;
  onToggle: () => void;
  commentText: string;
  onCommentChange: (text: string) => void;
}) {
  const { data: commentsResponse, isLoading } =
    useRestaurantComments(restaurantId);
  const createCommentMutation = useCreateComment();
  const [viewAll, setViewAll] = useState(false);

  const comments = commentsResponse?.data || [];

  // Ko‘rsatiladigan commentlar
  const displayedComments = expanded
    ? viewAll
      ? comments // agar viewAll true bo‘lsa barcha commentlar
      : comments.slice(0, 2)
    : [];

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      await createCommentMutation.mutateAsync({
        content: commentText,
        targetId: restaurantId,
        targetType: "RESTAURANT",
      });
      onCommentChange("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "5px",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        border: "1px solid #e9ecef",
      }}
    >
      {/* Comments Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "600",
            color: "#495057",
          }}
        >
          Comments ({comments.length})
        </h4>
        {comments.length > 0 && (
          <button
            onClick={onToggle}
            style={{
              background: "#007bff",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "14px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#007bff")}
          >
            {expanded ? "Hide Comments" : "Show Comments"}
          </button>
        )}
      </div>

      {/* Comments List */}
      {expanded && (
        <>
          {isLoading ? (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              <p style={{ marginTop: "10px", color: "#6c757d" }}>
                Loading comments...
              </p>
            </div>
          ) : (
            displayedComments.map((comment) => (
              <div
                key={comment.id}
                style={{
                  background: "#f8f9fa",
                  padding: "10px",
                  borderRadius: "16px",
                  marginBottom: "10px",
                  border: "1px solid #e9ecef",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#ff9500",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginRight: "12px",
                    }}
                  >
                    {comment.author.fullName.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: "600",
                        color: "#495057",
                        fontSize: "14px",
                      }}
                    >
                      {comment.author.fullName}
                    </div>
                    <div style={{ fontSize: "12px", color: "#6c757d" }}>
                      {comment.createdAt
                        ? `${String(
                            new Date(comment.createdAt).getDate()
                          ).padStart(2, "0")}.${String(
                            new Date(comment.createdAt).getMonth() + 1
                          ).padStart(2, "0")}.${new Date(
                            comment.createdAt
                          ).getFullYear()}`
                        : "⏳!!"}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "#495057",
                    lineHeight: "1.4",
                    fontSize: "16px",
                  }}
                >
                  {comment.content}
                </p>
              </div>
            ))
          )}

          {/* View All Button */}
          {comments.length > 2 && !viewAll && (
            <button
              onClick={() => setViewAll(true)}
              style={{
                width: "100%",
                background: "#6c757d",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                marginBottom: "15px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#5a6268")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#6c757d")
              }
            >
              View All {comments.length} Comments
            </button>
          )}

          {/* Add Comment Form */}
          <form onSubmit={handleSubmitComment}>
            <textarea
              value={commentText}
              onChange={(e) => onCommentChange(e.target.value)}
              placeholder={`Write something about ${restaurantName}...`}
              rows={3}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ced4da",
                borderRadius: "12px",
                fontSize: "14px",
                resize: "vertical",
                marginBottom: "15px",
                fontFamily: "inherit",
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="submit"
                disabled={
                  createCommentMutation.isPending || !commentText.trim()
                }
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!createCommentMutation.isPending && commentText.trim())
                    e.currentTarget.style.background = "#218838";
                }}
                onMouseLeave={(e) => {
                  if (!createCommentMutation.isPending && commentText.trim())
                    e.currentTarget.style.background = "#28a745";
                }}
              >
                {createCommentMutation.isPending
                  ? "Posting..."
                  : "Post Comment"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
