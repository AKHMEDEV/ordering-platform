"use client";
import React from "react";
import {
  Container,
  TextSection,
  Button,
  ImageSection,
  VideoSection,
} from "./Banner.styles";

import img from "@/assets/images/bannerImg.jpg";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/menu");
  };

  return (
    <>
      <Container>
        <TextSection className="container">
          <h1>Are you Hungry?</h1>
          <h2>Don't Wait!</h2>
          <p>Let's start order food now</p>
          <Button onClick={handleClick}>Check Out Menu</Button>
        </TextSection>

        <ImageSection>
          <img src={img.src} alt="Food" />
        </ImageSection>
      </Container>

      <VideoSection>
        <video autoPlay muted loop playsInline>
          <source src="/videos/food-hero.mp4" type="video/mp4" />
        </video>
      </VideoSection>
    </>
  );
};

export default Banner;
