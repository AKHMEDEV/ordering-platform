import React from "react";
import { useMe } from "@/hook/useAuth";
import { getImageUrl } from "@/utils/getImageUrl";
import {
  Wrapper,
  Sidebar,
  Avatar,
  Name,
  Muted,
  Counts,
  CountItem,
  CountNumber,
  Content,
  Section,
  SectionTitle,
  List,
  ListItem,
  Badge,
  Row,
} from "./Profile.styles";

const Profile: React.FC = () => {
  const { data, isLoading, isError } = useMe();

  if (isLoading) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="container">
        <p>Failed to load profile</p>
      </div>
    );
  }

  const avatarSrc = data.avatarUrl ? getImageUrl(data.avatarUrl) : null;

  return (
    <div className="container">
      <Wrapper>
        <Sidebar>
          <Avatar $src={avatarSrc} />
          <Name>{data.fullName || "User"}</Name>
          <Muted>{data.email}</Muted>
          <Muted>{data.phone}</Muted>
          <Badge>{data.role}</Badge>

          <Counts>
            <CountItem>
              <CountNumber>{data._count.orders}</CountNumber>
              <Muted>Orders</Muted>
            </CountItem>
            <CountItem>
              <CountNumber>{data._count.comments}</CountNumber>
              <Muted>Comments</Muted>
            </CountItem>
            <CountItem>
              <CountNumber>{data._count.favorites}</CountNumber>
              <Muted>Favorites</Muted>
            </CountItem>
            <CountItem>
              <CountNumber>{data._count.cartItems}</CountNumber>
              <Muted>Cart</Muted>
            </CountItem>
          </Counts>
        </Sidebar>

        <Content>
          <Section>
            <SectionTitle>Recent Comments</SectionTitle>
            <List>
              {data.comments.length === 0 && <Muted>No comments yet</Muted>}
              {data.comments.map((c) => (
                <ListItem key={c.id}>
                  <Row>
                    <strong>{c.restaurant?.name || "Restaurant"}</strong>
                    <Badge>comment</Badge>
                  </Row>
                  <Row>
                    <Muted>{new Date(c.createdAt).toLocaleString()}</Muted>
                  </Row>
                </ListItem>
              ))}
            </List>
          </Section>

          <Section>
            <SectionTitle>Profile Information</SectionTitle>
            <List>
              <ListItem>
                <strong>Full name</strong>
                <Muted>{data.fullName}</Muted>
              </ListItem>
              <ListItem>
                <strong>Email</strong>
                <Muted>{data.email}</Muted>
              </ListItem>
              <ListItem>
                <strong>Phone</strong>
                <Muted>{data.phone}</Muted>
              </ListItem>
              <ListItem>
                <strong>Telegram</strong>
                <Muted>{data.telegramChatId || "-"}</Muted>
              </ListItem>
              <ListItem>
                <strong>Member since</strong>
                <Muted>{new Date(data.createdAt).toLocaleDateString()}</Muted>
              </ListItem>
            </List>
          </Section>
        </Content>
      </Wrapper>
    </div>
  );
};

export default Profile;
