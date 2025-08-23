
export const getImageUrl = (path?: string) => {
  if (!path) return "/default-restaurant.jpg";

  const normalized = path.replace(/\\/g, "/");

  return `${process.env.NEXT_PUBLIC_BASE_URL}${normalized}`;
};
