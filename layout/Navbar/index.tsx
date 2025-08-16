"use client";
import React, { useState } from "react";
import { StyledNavbar } from "./navbar.module";
import basketIcon from "@/assets/icons/basket.png";

const NavbarLayout: React.FC = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Restaurants", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Favorites", href: "#" },
  ];

  return (
    <StyledNavbar>
      <nav className="navbar container">
        {/* Logo */}
        <div className="logo">
          Order<span className="logoHighlight">UK</span>
        </div>

        {/* Nav links */}
        <ul className="navLinks">
          {navItems.map((item) => (
            <li key={item.name} className="navItem">
              <a
                href={item.href}
                className={`navLink ${active === item.name ? "active" : ""}`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* 🛒 Basket icon */}
          <li className="navItem">
            <a
              href="#"
              className={`basketLink ${
                active === "Basket" ? "activeBasket" : ""
              }`}
              onClick={() => setActive("Basket")}
            >
              <img src={basketIcon.src} alt="Cart" className="basketIcon" />
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navButton">
              Login / Signup
            </a>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
};

export default NavbarLayout;
