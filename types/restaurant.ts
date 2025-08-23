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
  views: number;
  createdAt: string;
  updatedAt: string;
  likeCount: number;

  menus?: IMenu[];
}

export interface IMenu {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
}
