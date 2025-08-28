import { IToggleLikeResponse } from "@/types/restaurant";
import { customAxios } from "../instances";
import { IMenusResponse } from "@/types/menus";

// Menularni fetch qilish
export const getMenus = async (): Promise<IMenusResponse> => {
  const { data } = await customAxios.get<IMenusResponse>("/menus");
  return data;
};

// Menu like toggle
export const toggleMenuLike = async (
  menuId: string
): Promise<IToggleLikeResponse> => {
  const { data } = await customAxios.post<IToggleLikeResponse>(
    "/reaction/toggle-like",
    {
      targetId: menuId,
      targetType: "MENU_ITEM",
    }
  );
  return data;
};
