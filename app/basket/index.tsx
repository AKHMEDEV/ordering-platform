"use client";
import React, { useMemo } from "react";
import { useCart, useUpdateCart, useRemoveFromCart } from "@/hook/useCart";
import { getImageUrl } from "@/utils/getImageUrl";
import {
  Wrapper,
  Card,
  List,
  Item,
  Thumb,
  Title,
  Name,
  Muted,
  QtyControls,
  IconButton,
  Summary,
  Row,
  PrimaryButton,
} from "./Basket,styles";

const Basket: React.FC = () => {
  const { data, isLoading } = useCart();
  const updateCart = useUpdateCart();
  const removeFromCart = useRemoveFromCart();

  const items = data?.data || [];

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, it) => sum + (it.menu.price || 0) * it.quantity,
      0
    );
    const delivery = items.length > 0 ? 3.5 : 0;
    const total = subtotal + delivery;
    return { subtotal, delivery, total };
  }, [items]);

  const handleDecrease = (menuId: string, curQty: number) => {
    if (curQty <= 1) return removeFromCart.mutate(menuId);
    updateCart.mutate({ menuId, quantity: curQty - 1 });
  };

  const handleIncrease = (menuId: string, curQty: number) => {
    updateCart.mutate({ menuId, quantity: curQty + 1 });
  };

  const handleRemove = (menuId: string) => {
    removeFromCart.mutate(menuId);
  };

  if (isLoading) {
    return (
      <div className="container">
        <p>Loading basket...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Wrapper>
        <Card>
          <h2 style={{ marginTop: 0 }}>Your Basket</h2>
          {items.length === 0 ? (
            <Muted>Basket is empty</Muted>
          ) : (
            <List>
              {items.map((it) => (
                <Item key={it.id}>
                  <Thumb
                    src={
                      it.menu.images?.[0]
                        ? getImageUrl(it.menu.images[0])
                        : "/icons/food.png"
                    }
                    alt={it.menu.name}
                  />
                  <Title>
                    <Name>{it.menu.name}</Name>
                    <Muted>
                      ${it.menu.price} · x{it.quantity}
                    </Muted>
                    <button
                      onClick={() => handleRemove(it.menuId)}
                      style={{
                        border: 0,
                        background: "transparent",
                        color: "#ef4444",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Remove
                    </button>
                  </Title>
                  <QtyControls>
                    <IconButton
                      onClick={() => handleDecrease(it.menuId, it.quantity)}
                      aria-label="decrease"
                    >
                      <img
                        src="/icons/minus.png"
                        alt="-"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <span>{it.quantity}</span>
                    <IconButton
                      onClick={() => handleIncrease(it.menuId, it.quantity)}
                      aria-label="increase"
                    >
                      <img
                        src="/icons/add.png"
                        alt="+"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                  </QtyControls>
                </Item>
              ))}
            </List>
          )}
        </Card>

        <Summary>
          <h3 style={{ marginTop: 0 }}>Order Summary</h3>
          <Row>
            <span>Subtotal</span>
            <strong>${totals.subtotal.toFixed(2)}</strong>
          </Row>
          <Row>
            <span>Delivery</span>
            <strong>${totals.delivery.toFixed(2)}</strong>
          </Row>
          <div style={{ height: 1, background: "#eee" }} />
          <Row>
            <span>Total</span>
            <strong>${totals.total.toFixed(2)}</strong>
          </Row>
          <PrimaryButton disabled={items.length === 0}>
            <img
              src="/icons/payment-card.png"
              width={18}
              height={18}
              alt="pay"
              style={{ marginRight: 8 }}
            />
            Go to Order
          </PrimaryButton>
        </Summary>
      </Wrapper>
    </div>
  );
};

export default Basket;
