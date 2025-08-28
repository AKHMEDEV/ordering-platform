export interface IUserCounts {
  orders: number;
  comments: number;
  favorites: number;
  cartItems: number;
}

export interface IRestaurantShort {
  id: string;
  name: string;
}

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  restaurant: IRestaurantShort;
  menu: any | null;
}

export interface IUserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avatarUrl: string | null;
  telegramChatId: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
  _count: IUserCounts;
  orders: any[];
  comments: IComment[];
  favorites: any[];
  courierProfile: any | null;
}

export interface IGetMeResponse {
  message: string;
  data: IUserProfile;
}
