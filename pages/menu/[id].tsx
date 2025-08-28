import { useRouter } from "next/router";
import React from "react";

const MenuDetailsWrapper = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  // return <MenuDetails id={id as string} />;
};

export default MenuDetailsWrapper;
