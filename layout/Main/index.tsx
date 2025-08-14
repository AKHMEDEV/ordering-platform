import { childrenProps } from "@/types";
import cls from "./main.module.css";
import NavbarLayout from "../Navbar";
import FooterLayout from "../Footer";

const MainLayout = ({ children }: childrenProps) => {
  return (
    <div className={cls["main-wrapper"]}>
      <div className="">
        <NavbarLayout />
        {children}
      </div>
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
