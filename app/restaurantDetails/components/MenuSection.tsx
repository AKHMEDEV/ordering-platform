import React from "react";
import { IMenu } from "@/types/restaurant";
import MenuCard from "./MenuCard";

interface MenuSectionProps {
  menus: IMenu[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ menus }) => {
  if (!menus || menus.length === 0) {
    return (
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
            src="/icons/menu.png"
            alt="Menu"
            width={28}
            height={28}
            style={{ marginRight: "12px" }}
          />
          Menu
        </h3>

        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#7f8c8d",
          }}
        >
          <img
            src="/icons/menu.png"
            alt="No menu"
            width={64}
            height={64}
            style={{ marginBottom: "20px", opacity: 0.5 }}
          />
          <h4 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
            No menu items available yet
          </h4>
          <p style={{ margin: 0, fontSize: "16px" }}>
            This restaurant hasn't added their menu yet. Check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
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
          src="/icons/menu.png"
          alt="Menu"
          width={28}
          height={28}
          style={{ marginRight: "12px" }}
        />
        Full Menu ({menus.length} items)
      </h3>

      {/* Grid layout - Card lar kattaroq bo'ldi */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          maxHeight: "600px",
          overflowY: "auto",
        }}
      >
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
