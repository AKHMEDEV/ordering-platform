import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getRestaurantComments,
  createComment,
  deleteComment,
} from "@/api/comments";
import { ICreateCommentDto } from "@/types/comment";

export const useRestaurantComments = (restaurantId: string) => {
  return useQuery({
    queryKey: ["comments", restaurantId],
    queryFn: () => getRestaurantComments(restaurantId),
    enabled: !!restaurantId,
    staleTime: 1000 * 60 * 5, // 5 daqiqa
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentData: ICreateCommentDto) => createComment(commentData),
    onSuccess: (data, variables) => {
      // Comment yaratilgandan keyin comments listini yangilash
      queryClient.invalidateQueries({
        queryKey: ["comments", variables.targetId],
      });
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: string) => deleteComment(commentId),
    onSuccess: (data, commentId) => {
      // Comment o'chirilgandan keyin barcha comments listlarini yangilash
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};

