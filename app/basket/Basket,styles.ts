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
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
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
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #ffbf69;
    box-shadow: 0 8px 22px rgba(255, 159, 28, 0.15);
    transform: translateY(-1px);
  }
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
  transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;

  &:hover {
    background: #f7faff;
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.18);
    transform: translateY(-1px);
  }

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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;

  &:hover {
    background: #1d4ed8;
    box-shadow: 0 10px 24px rgba(29, 78, 216, 0.25);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease, transform 0.1s ease;

  &:hover {
    color: #dc2626;
    transform: translateY(-1px);
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 12px;
  color: #6b7280;
  gap: 12px;
`;
