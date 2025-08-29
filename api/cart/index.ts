import { ICartItem } from "@/types/cart";
import { customAxios } from "../instances";

export const getCart = async (): Promise<ICartItem[]> => {
  const { data } = await customAxios.get("/cart");
  return data;
};

export const addToCart = async (payload: {
  menuId: string;
  quantity: number;
}): Promise<ICartItem> => {
  const { data } = await customAxios.post("/cart/add", payload);
  return data;
};

export const updateCart = async (payload: {
  menuId: string;
  quantity: number;
}): Promise<ICartItem> => {
  const { data } = await customAxios.patch("/cart/update", payload);
  return data;
};

export const removeFromCart = async (menuId: string): Promise<void> => {
  await customAxios.delete(`/cart/${menuId}`);
};
