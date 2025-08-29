export interface ICartMenu {
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

export interface ICartItem {
  id: string;
  userId: string;
  menuId: string;
  quantity: number;
  menu: ICartMenu;
}

// POST /cart/add va PATCH /cart/update response
export interface ICartItemResponse {
  id: string;
  userId: string;
  menuId: string;
  quantity: number;
}

// GET /cart response
export interface IUserCartResponse {
  message?: string; // optional, backendda message bo‘lmasa ham
  data: ICartItem[];
}

// DTO lar
export interface IAddToCartDto {
  menuId: string;
  quantity: number;
}

export interface IUpdateCartDto {
  menuId: string;
  quantity: number;
}
