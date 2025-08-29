"use client";
import { useMenus, useMenuLike } from "@/hook/useMenus";
import { useState, useMemo } from "react";
import { useAddToCart } from "@/hook/useCart";
import toast from "react-hot-toast";
import { getImageUrl } from "@/utils/getImageUrl";
import { IMenu } from "@/types/menus";

export default function MenusPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const { data: menusResponse, isLoading } = useMenus();

  const filteredAndSortedMenus = useMemo(() => {
    if (!menusResponse?.data) return [];

    let filtered = menusResponse.data.filter((menu: IMenu) => {
      return (
        menu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        menu.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price":
        filtered.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "views":
        filtered.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
        break;
      case "likes":
        filtered.sort((a, b) => (b.likeCount ?? 0) - (a.likeCount ?? 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [menusResponse?.data, searchTerm, sortBy]);

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
        Loading menus...
      </div>
    );

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
      {/* Header */}
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
            src="/icons/menu.png"
            alt="Menu"
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
            Explore Menus
          </h1>
        </div>
        <p style={{ fontSize: "18px", color: "#7f8c8d", margin: 0 }}>
          Showing {filteredAndSortedMenus.length} of {menusResponse?.count || 0}{" "}
          menu items
        </p>
      </div>

      {/* Search + Sort */}
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
            placeholder="Search menus..."
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
          <option value="name">Sort by name</option>
          <option value="price">Sort by price</option>
          <option value="views">Sort by views</option>
          <option value="likes">Sort by likes</option>
        </select>
      </div>

      {/* Menu Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredAndSortedMenus.map((menu: IMenu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
}


function MenuCard({ menu }: { menu: IMenu }) {
  const { liked, likeCount, toggle } = useMenuLike(menu);
  const addToCart = useAddToCart();

  const primaryImage: string | null =
    Array.isArray(menu.images) && menu.images.length > 0
      ? getImageUrl(menu.images[0])
      : null;

  const handleAddToCart = () => {
    if (!menu.isAvailable) return;
    addToCart.mutate(
      { menuId: menu.id, quantity: 1 },
      {
        onSuccess: () => {
          toast.success(`${menu.name} added to basket`);
        },
        onError: (err: any) => {
          const msg = err?.response?.data?.message || "Failed to add to cart";
          toast.error(msg);
        },
      }
    );
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 16,
        width: 360,
        background: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: 220,
          overflow: "hidden",
          backgroundColor: primaryImage ? undefined : "#e9ecef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {primaryImage ? (
          <img
            src={primaryImage}
            alt={menu.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <img
            src="/icons/burger.png"
            alt="Menu item"
            width={60}
            height={60}
            style={{ opacity: 0.6 }}
          />
        )}

        {/* Availability */}
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: menu.isAvailable
              ? "rgba(22, 163, 74, 0.9)"
              : "rgba(239, 68, 68, 0.9)",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {menu.isAvailable ? "✓ Available" : "✗ Not Available"}
        </span>

        {/* Price */}
        <div
          style={{
            position: "absolute",
            left: 12,
            bottom: 12,
            background: "rgba(22, 163, 74, 0.9)",
            color: "#fff",
            padding: "4px 16px",
            borderRadius: 999,
            fontWeight: 600,
          }}
        >
          ${menu.price}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: 0, marginBottom: 8 }}>{menu.name}</h3>
        {menu.description && (
          <p
            style={{
              marginTop: 0,
              color: "#6b7280",
              fontSize: 14,
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {menu.description}
          </p>
        )}

        <div style={{ height: 1, background: "#eee", margin: "12px 0" }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Likes & Views */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "#6b7280",
              }}
            >
              <img src="/icons/eye.png" alt="views" width={18} height={18} />
              <span style={{ fontSize: 14 }}>{menu.views ?? 0}</span>
            </div>

            <button
              onClick={toggle}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: liked ? "#ef4444" : "#6b7280",
                background: "transparent",
                border: 0,
                cursor: "pointer",
                padding: 0,
              }}
              aria-label="Toggle like"
            >
              <img
                src={liked ? "/icons/heart.png" : "/icons/heart-outline.png"}
                alt="like"
                width={18}
                height={18}
              />
              <span style={{ fontSize: 14 }}>{likeCount ?? 0}</span>
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            style={{
              background: menu.isAvailable
                ? addToCart.isPending
                  ? "#3b82f6"
                  : "#2563eb"
                : "#9ca3af",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid #1d4ed8",
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: menu.isAvailable
                ? addToCart.isPending
                  ? "wait"
                  : "pointer"
                : "not-allowed",
            }}
            disabled={!menu.isAvailable}
          >
            <img src="/icons/add.png" alt="add" width={16} height={16} />
            {menu.isAvailable
              ? addToCart.isPending
                ? "Adding..."
                : "Add to Cart"
              : "Not Available"}
          </button>
        </div>
      </div>
    </div>
  );
}


