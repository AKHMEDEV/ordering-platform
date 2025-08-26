import { customAxios } from "../instances";
import {
  ICommentsResponse,
  ICreateCommentDto,
  ICreateCommentResponse,
  IDeleteCommentResponse,
} from "@/types/comment";

export const getRestaurantComments = async (
  restaurantId: string
): Promise<ICommentsResponse> => {
  const { data } = await customAxios.get<ICommentsResponse>(
    `/reviews/${restaurantId}`
  );
  return data;
};

export const createComment = async (
  commentData: ICreateCommentDto
): Promise<ICreateCommentResponse> => {
  const { data } = await customAxios.post<ICreateCommentResponse>(
    "/reviews",
    commentData
  );
  return data;
};

export const deleteComment = async (
  commentId: string
): Promise<IDeleteCommentResponse> => {
  const { data } = await customAxios.delete<IDeleteCommentResponse>(
    `/reviews/${commentId}`
  );
  return data;
};

