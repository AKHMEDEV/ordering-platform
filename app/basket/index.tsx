"use client";
import React, { useMemo } from "react";
import { useCart, useUpdateCart, useRemoveFromCart } from "@/hook/useCart";
import { ICartItem } from "@/types/cart";
import { getImageUrl } from "@/utils/getImageUrl";
import { toast } from "react-hot-toast";
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
  RemoveButton,
  EmptyState,
} from "./Basket,styles";

const Basket: React.FC = () => {
  const { data, isLoading } = useCart();
  const updateCart = useUpdateCart();
  const removeFromCart = useRemoveFromCart();

  const items: ICartItem[] = data || [];

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum: number, it: ICartItem) => {
      return sum + (it.menu.price || 0) * it.quantity;
    }, 0);
    const delivery = items.length > 0 ? 3.5 : 0;
    const total = subtotal + delivery;
    return { subtotal, delivery, total };
  }, [items]);

  const handleDecrease = (menuId: string, curQty: number) => {
    if (curQty <= 1) {
      removeFromCart.mutate(menuId, {
        onSuccess: () => toast.success("removed from basket"),
      });
    } else {
      updateCart.mutate(
        { menuId, quantity: curQty - 1 },
        {
          onSuccess: () => toast.success("quantity updated"),
        }
      );
    }
  };

  const handleIncrease = (menuId: string, curQty: number) => {
    updateCart.mutate(
      { menuId, quantity: curQty + 1 },
      {
        onSuccess: () => toast.success("quantity updated"),
      }
    );
  };

  const handleRemove = (menuId: string) => {
    removeFromCart.mutate(menuId, {
      onSuccess: () => toast.success("Removed from basket"),
    });
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
            <EmptyState>
              <img src="/icons/empty.png" width={56} height={56} alt="empty" />
              <div>No items in your basket</div>
            </EmptyState>
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
                    <RemoveButton onClick={() => handleRemove(it.menuId)}>
                      <img
                        src="/icons/delete.png"
                        width={16}
                        height={16}
                        alt="remove"
                      />
                      Remove
                    </RemoveButton>
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
            />
            Go to Order
          </PrimaryButton>
        </Summary>
      </Wrapper>
    </div>
  );
};

export default Basket;
