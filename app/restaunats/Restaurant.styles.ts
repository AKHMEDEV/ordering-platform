import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  max-width: 800px;
  height: 500px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 16px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 10px 0;
    color: #222;
  }

  .description {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* max 2 qator */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .restaurant-stats {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

    .rating,
    .views,
    .likes {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 500;
      color: #444;
    }
  }

  .working-hours {
    font-size: 14px;
    color: #777;
  }
`;
