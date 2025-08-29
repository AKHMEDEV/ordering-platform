import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, addToCart, updateCart, removeFromCart } from "@/api/cart";
import { ICartItem } from "@/types/cart";

export const useCart = () => {
  return useQuery<ICartItem[]>({
    queryKey: ["cart"],
    queryFn: getCart,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 30,
  });
};

export const useAddToCart = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const useUpdateCart = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const useRemoveFromCart = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
