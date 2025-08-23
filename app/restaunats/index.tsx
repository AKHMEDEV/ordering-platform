"use client";
import { useRestaurants } from "@/hook/useRestaurants";
import styled from "styled-components";
import Link from "next/link";
import { getImageUrl } from "@/utils/getImageUrl";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export default function RestaurantsPage() {
  const { data: restaurants, isLoading } = useRestaurants();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Restaurants</h1>
      <Grid>
        {restaurants?.map((r) => (
          <Link href={`/restaurants/${r.id}`} key={r.id}>
            <Card>
              <img
                src={getImageUrl(r.images?.[0])}
                alt={r.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3>{r.name}</h3>
              <p>{r.description}</p>
              <p>⭐ {r.rating}</p>
              <p>
                {r.openTime} - {r.closeTime}
              </p>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
}
