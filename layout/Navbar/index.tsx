"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Prof, StyledNavbar } from "./Navbar.styles";
import basketIcon from "@/assets/icons/basket.png";
import AuthModal from "./components/AuthModal";
import { useLogout, useMe } from "@/hook/useAuth";

const NavbarLayout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: me, isLoading } = useMe();
  const { mutate: doLogout } = useLogout();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 310);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Restaurants", href: "/restaurants" },
    { name: "Menu", href: "/menu" },
    { name: "Favorites", href: "/favorites" },
  ];

  if (isLoading) return null;

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
                <Link
                  href={item.href}
                  className={`navLink ${
                    router.pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="navItem">
              <button
                className={`basketLink ${
                  router.pathname === "/basket" ? "activeBasket" : ""
                }`}
                onClick={() => router.push("/basket")}
              >
                <img src={basketIcon.src} alt="Cart" className="basketIcon" />
              </button>
            </li>

            {me ? (
              <>
                <li className="navItem">
                  <Prof onClick={() => router.push("/profile")}>
                    <img
                      src="/icons/profile2.png"
                      alt="Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Prof>
                </li>

                <li className="navItem">
                  <div
                    onClick={() => doLogout()}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="/icons/logout.png"
                      alt="Logout"
                      style={{ width: "22px", height: "22px" }}
                    />
                  </div>
                </li>
              </>
            ) : (
              <li className="navItem">
                <button
                  className="navButton"
                  onClick={() => setIsModalOpen(true)}
                >
                  Login / Signup
                </button>
              </li>
            )}
          </ul>
        </nav>
      </StyledNavbar>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType="login"
      />
    </>
  );
};

export default NavbarLayout;
