export interface IRestaurant {
  id: string;
  name: string;
  description?: string;
  images: string[];
  locationLatitude?: number;
  locationLongitude?: number;
  rating: number;
  isApproved: boolean;
  openTime?: string;
  closeTime?: string;
  ownerId: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  menus?: IMenu[];
  orders?: any[];
  comments?: IComment[];
}

export interface IMenu {
  id: string;
  name: string;
  description?: string;
  price: number;
  images: string[];
  isAvailable: boolean;
  restaurantId: string;
  categoryId: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  targetType: string;
  parentId?: string;
  targetRestaurantId?: string;
  targetMenuId?: string;
}

export interface IRestaurantsResponse {
  message: string;
  count: number;
  data: IRestaurant[];
}

export interface IRestaurantResponse {
  message: string;
  data: IRestaurant;
}
