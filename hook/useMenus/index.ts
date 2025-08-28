import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { IMenusResponse, IMenu } from "@/types/menus";
import { getMenus, toggleMenuLike } from "@/api";

// Menularni fetch qilish
export const useMenus = () => {
  return useQuery<IMenusResponse>({
    queryKey: ["menus"],
    queryFn: () => getMenus(),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
  });
};

// Like hook
export const useMenuLike = (menu: IMenu) => {
  const [liked, setLiked] = useState(menu.liked ?? false);
  const [likeCount, setLikeCount] = useState(menu.likeCount ?? 0);
  const queryClient = useQueryClient();

  const toggle = async () => {
    try {
      const res = await toggleMenuLike(menu.id);
      setLiked(res.liked);
      setLikeCount(res.likeCount);

      // optional: cache ni yangilash
      queryClient.setQueryData(["menus"], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((m: IMenu) =>
            m.id === menu.id
              ? { ...m, liked: res.liked, likeCount: res.likeCount }
              : m
          ),
        };
      });
    } catch (err) {
      console.error("Menu like toggle failed:", err);
    }
  };

  return { liked, likeCount, toggle };
};
