import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 12px;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 10px;
`;

export const Thumb = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 10px;
  background: #f5f5f5;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Name = styled.h4`
  margin: 0;
`;

export const Muted = styled.span`
  color: #666;
  font-size: 14px;
`;

export const QtyControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Summary = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: sticky;
  top: 16px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 0;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
