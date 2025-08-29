import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  padding: 24px 0;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  padding: 16px;
`;

export const Sidebar = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

export const Avatar = styled.div<{ $src?: string | null }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background: #f5f5f5 url(${(p) => p.$src || "/icons/profile.png"}) center/cover
    no-repeat;
  border: 2px solid #ff9b00;
`;

export const Name = styled.h2`
  margin: 8px 0 0;
  font-size: 20px;
`;

export const Muted = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
`;

export const Counts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: 100%;
  margin-top: 12px;
`;

export const CountItem = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const CountNumber = styled.span`
  font-weight: 700;
  color: #ff9b00;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Section = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const Badge = styled.span`
  background: #ffedd5;
  color: #b45309;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 12px;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
