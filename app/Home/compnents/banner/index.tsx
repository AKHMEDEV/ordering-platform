"use client";
import React, { FC } from "react";
import {
  Container,
  TextSection,
  Button,
  ImageSection,
} from "./Banner.styles";

import img from "@/assets/images/bannerImg.jpg"; 

const Banner = () => {
  return (
    <Container>
      <TextSection className="container">
        <h1>Are you Hungry?</h1>
        <h2>Don't Wait!</h2>
        <p>Let's start order food now</p>
        <Button>Check Out Menu</Button>
      </TextSection>

      <ImageSection>
        <img src={img.src} alt="Food" />
      </ImageSection>
    </Container>
  );
};

export default Banner;
