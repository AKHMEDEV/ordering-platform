import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart, addToCart, updateCart, removeFromCart } from "@/api/cart";
import {
  IUserCartResponse,
  IAddToCartDto,
  IUpdateCartDto,
  ICartItemResponse,
} from "@/types/cart";

// GET carts
export const useCart = () => {
  return useQuery<IUserCartResponse>({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 1000 * 60, // 1 min cache
    refetchOnWindowFocus: true,
  });
};

// ADD
export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation<ICartItemResponse, Error, IAddToCartDto>({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

// UPDATE
export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  return useMutation<ICartItemResponse, Error, IUpdateCartDto>({
    mutationFn: updateCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

// REMOVE
export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation<ICartItemResponse, Error, string>({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
