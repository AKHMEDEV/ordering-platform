import React from "react";
import { IMenu } from "@/types/restaurant";

interface MenuCardProps {
  menu: IMenu;
}

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        border: "1px solid #f1f3f4",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
      }}
    >
      {/* Menu Image - Katta va tepada */}
      <div
        style={{
          position: "relative",
          height: "200px",
          width: "100%",
          backgroundColor: "#e9ecef",
          overflow: "hidden",
        }}
      >
        {menu.images && menu.images.length > 0 ? (
          <img
            src={`http://localhost:4000${menu.images[0]}`}
            alt={menu.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/icons/burger.png"
              alt="Menu item"
              width={60}
              height={60}
              style={{ opacity: 0.6 }}
            />
          </div>
        )}

        {/* Availability Badge - Rasm ustida */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "4px 8px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
            backgroundColor: menu.isAvailable
              ? "rgba(16, 185, 129, 0.9)"
              : "rgba(239, 68, 68, 0.9)",
            color: "white",
            // backdropFilter: "blur(10px)",
          }}
        >
          {menu.isAvailable ? "✓ Available" : "✗ Not Available"}
        </div>

        {/* Price Badge - Rasm pastida chap tomonda */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            padding: "4px 16px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "700",
            backgroundColor: "rgba(16, 185, 129, 0.9)",
            color: "white",
          }}
        >
          ${menu.price}
        </div>
      </div>

      {/* Menu Info - Rasm pastida */}
      <div style={{ padding: "20px" }}>
        {/* Menu Name */}
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#2c3e50",
            margin: "0 0 10px 0",
            lineHeight: "1.3",
          }}
        >
          {menu.name}
        </h4>

        {/* Description */}
        {menu.description && (
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
            }}
          >
            {menu.description}
          </p>
        )}

        {/* Stats Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "15px",
            borderTop: "1px solid #f1f3f4",
          }}
        >
          {/* Views */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/icons/eye.png"
              alt="Views"
              width={16}
              height={16}
              style={{ marginRight: "6px" }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#7f8c8d",
                fontWeight: "500",
              }}
            >
              {menu.views}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: menu.isAvailable ? "#3b82f6" : "#9ca3af",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: menu.isAvailable ? "pointer" : "not-allowed",
              transition: "all 0.3s ease",
              minWidth: "100px",
            }}
            disabled={!menu.isAvailable}
            onMouseEnter={(e) => {
              if (menu.isAvailable) {
                e.currentTarget.style.backgroundColor = "#2563eb";
              }
            }}
            onMouseLeave={(e) => {
              if (menu.isAvailable) {
                e.currentTarget.style.backgroundColor = "#3b82f6";
              }
            }}
          >
            {menu.isAvailable ? "Add to Cart" : "Not Available"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
