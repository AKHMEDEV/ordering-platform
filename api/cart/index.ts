import { customAxios } from "../instances";
import {
  IUserCartResponse,
  IAddToCartDto,
  IUpdateCartDto,
  ICartItemResponse,
} from "@/types/cart";

// GET /cart -> user carts
export const getCart = async (): Promise<IUserCartResponse> => {
  const { data } = await customAxios.get<IUserCartResponse>("/cart");
  return data;
};

// POST /cart/add
export const addToCart = async (
  dto: IAddToCartDto
): Promise<ICartItemResponse> => {
  const { data } = await customAxios.post<ICartItemResponse>("/cart/add", dto);
  return data;
};

// PATCH /cart/update
export const updateCart = async (
  dto: IUpdateCartDto
): Promise<ICartItemResponse> => {
  const { data } = await customAxios.patch<ICartItemResponse>(
    "/cart/update",
    dto
  );
  return data;
};

// DELETE /cart/:menuId
export const removeFromCart = async (
  menuId: string
): Promise<ICartItemResponse> => {
  const { data } = await customAxios.delete<ICartItemResponse>(
    `/cart/${menuId}`
  );
  return data;
};
