"use client";
import React, { useState, useEffect } from "react";
import { StyledNavbar } from "./Navbar.styles";
import basketIcon from "@/assets/icons/basket.png";
import AuthModal from "@/layout/Navbar/components/AuthModal";

const NavbarLayout: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);

  const [modalType, setModalType] = useState<"login" | "register">("register");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 310 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Restaurants", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Favorites", href: "#" },
  ];

  const handleAuthClick = () => {
    if (isFirstClick) {
      setModalType("register");
      setIsFirstClick(false);
    } else {
      setModalType("login");
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <StyledNavbar className={isVisible ? "visible" : "hidden"}>
        <nav className="navbar container">
          <div className="logo">
            Order<span className="logoHighlight">UK</span>
          </div>

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
              <a href="#" className="navButton" onClick={handleAuthClick}>
                Login / Signup
              </a>
            </li>
          </ul>
        </nav>
      </StyledNavbar>

      <AuthModal
        isOpen={isModalOpen}
        type={modalType}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default NavbarLayout;
