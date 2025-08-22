"use client";

import React, { useState } from "react";
import { Container } from "./Footer.styles";

const FooterLayout: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <div className="content container">
        <div className="left">
          <h2 className="logo">Order</h2>
          <div className="appButtons">
            <a href="#" className="appButton2">
              <img src="/images/gogleplayy.svg" alt="Google Play" />
            </a>
            <a href="#" className="appButton">
              <img src="/images/appstore.png" alt="App Store" />
            </a>
          </div>
          <p className="companyInfo">
            Company # 490039-445. Registered with
            <br />
            House of companies.
          </p>
        </div>
        <div className="center">
          <div className="newsletter">
            <h3 className="newsletterTitle">
              Get Exclusive Deals in your inbox
            </h3>
            <form className="form">
              <input
                type="email"
                className="emailInput"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="subscribeBtn">
                Subscribe
              </button>
            </form>
            <p className="spamText">we wont spam, read our email policy</p>
          </div>
          <div className="socialIcons">
            <a href="#" className="socialIcon facebook">
              <img src="/images/faceebook.jpg" alt="Facebook" />
            </a>
            <a href="#" className="socialIcon instagram">
              <img src="/images/instagram-logo.webp" alt="Instagram" />
            </a>
            <a href="#" className="socialIcon tiktok">
              <img src="/images/tiktok.jpg" alt="TikTok" />
            </a>
            <a href="#" className="socialIcon snapchat">
              <img src="/images/snapchat-logo.jpg" alt="Snapchat" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <div className="linksColumn">
              <h4 className="columnTitle">Legal Pages</h4>
              <a href="#" className="linkItem">
                Terms and conditions
              </a>
              <a href="#" className="linkItem">
                Privacy
              </a>
              <a href="#" className="linkItem">
                Cookies
              </a>
              <a href="#" className="linkItem">
                Modern Slavery Statement
              </a>
            </div>

            <div className="linksColumn">
              <h4 className="columnTitle">Important Links</h4>
              <a href="#" className="linkItem">
                Get help
              </a>
              <a href="#" className="linkItem">
                Add your restaurant
              </a>
              <a href="#" className="linkItem">
                Sign up to deliver
              </a>
              <a href="#" className="linkItem">
                Create a business account
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomContent">
          <p className="copy">Order.uk Copyright 2025, All Rights Reserved.</p>
          <div className="bottomLinks">
            <a href="#" className="bottomLink">
              Privacy Policy
            </a>
            <a href="#" className="bottomLink">
              Terms
            </a>
            <a href="#" className="bottomLink">
              Pricing
            </a>
            <a href="#" className="bottomLink">
              Do not sell or share my personal information
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterLayout;
