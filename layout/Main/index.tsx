import { ReactNode } from "react";
import FooterLayout from "../Footer";
import { MainWrapper } from "./main.module";
import NavbarLayout from "../Navbar";

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
