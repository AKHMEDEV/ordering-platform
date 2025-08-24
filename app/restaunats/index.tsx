"use client";
import { useRestaurants } from "@/hook/useRestaurants";
import Link from "next/link";
import { getImageUrl } from "@/utils/getImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

import * as S from "./Restaurant.styles";
import { Heart } from "lucide-react";

export default function RestaurantsPage() {
  const { data: restaurants, isLoading } = useRestaurants();

  if (isLoading) return <p>Loading...</p>;

  return (
    <S.Wrapper>
      <S.Title>🍴 Restaurants</S.Title>
      <S.Grid>
        {restaurants?.map((r) => (
          <Link href={`/restaurants/${r.id}`} key={r.id}>
            <S.Card>
              {/* Swiper for images */}
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={10}
                slidesPerView={1}
              >
                {r.images?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <S.ImageWrapper>
                      <img src={getImageUrl(img)} alt={`${r.name} ${i}`} />
                    </S.ImageWrapper>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Content */}
              <S.CardContent>
                <h3>{r.name}</h3>
                <p className="description">{r.description}</p>

                <div className="restaurant-stats">
                  <span className="rating">⭐ {r.rating}</span>
                  <span className="views">👀 {r.views}</span>
                  <span className="likes">
                    <Heart size={16} color="red" /> {r.likeCount}
                  </span>
                </div>

                <div className="working-hours">
                  ⏰ {r.openTime} - {r.closeTime}
                </div>
              </S.CardContent>
            </S.Card>
          </Link>
        ))}
      </S.Grid>
    </S.Wrapper>
  );
}
