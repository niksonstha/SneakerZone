import { createContext, useContext } from "react";

export const MyContext = createContext();
export const useShoesContext = () => {
  return useContext(MyContext);
};
