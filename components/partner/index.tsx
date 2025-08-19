import React from "react";
import {
CardContainer,
  Overlay,
  Badge,
  Content,
  SmallText,
  Title,
  Button,
} from "./Partner.styles";

interface PartnerCardProps {
  img: string;
  badge: string;
  smallText: string;
  title: string;
  buttonText: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  img,
  badge,
  smallText,
  title,
  buttonText,
}) => {
  return (
    
    <CardContainer $bg={img}>
      <Overlay />
      <Badge>{badge}</Badge>
      <Content>
        <SmallText>{smallText}</SmallText>
        <Title>{title}</Title>
        <Button>{buttonText}</Button>
      </Content>
    </CardContainer>
  );
};

export default PartnerCard;
