import { ReactNode } from "react";
import NavbarLayout from "../Navbar";
import FooterLayout from "../Footer";
import { MainWrapper } from "./main.module";

interface ChildrenProps {
  children: ReactNode;
}

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <MainWrapper>
      <div>
        <NavbarLayout />
        {children}
      </div>
      <FooterLayout />
    </MainWrapper>
  );
};

export default MainLayout;
