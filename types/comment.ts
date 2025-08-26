export interface IComment {
  id: string;
  content: string;
  targetType: 'RESTAURANT' | 'MENU_ITEM';
  author: {
    id: string;
    fullName: string;
    avatarUrl?: string;
  };
  replies?: IComment[];
  createdAt: string;
  updatedAt: string;
}

export interface ICreateCommentDto {
  content: string;
  targetId: string;
  targetType: 'RESTAURANT' | 'MENU_ITEM';
  parentId?: string;
}

export interface ICommentsResponse {
  message: string;
  count: number;
  data: IComment[];
}

export interface ICreateCommentResponse {
  message: string;
  data: IComment;
}

export interface IDeleteCommentResponse {
  message: string;
  deletedId: string;
}

