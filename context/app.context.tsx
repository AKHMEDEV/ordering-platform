import { childrenProps } from "@/types";
import { createContext } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }: childrenProps) => (
  <AppContext.Provider value={""}>{children}</AppContext.Provider>
);
export default AppProvider;
