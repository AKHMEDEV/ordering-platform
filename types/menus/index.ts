export interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  isAvailable: boolean;
  views: number;
  liked?: boolean;
  likeCount?: number;
  categoryIds: string[];
  restaurantId: string;
}

export interface IMenusResponse {
  mesage: string;
  count: number;
  data: IMenu[];
}

export interface IToggleLikeResponse {
  message: string;
  liked: boolean;
  likeCount: number;
}


export interface IToggleLikeResponse {
  message: string;
  liked: boolean;
  likeCount: number;
}
