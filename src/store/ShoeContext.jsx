import { useContext } from "react";
import { MyContext } from "./context";

// eslint-disable-next-line react/prop-types
const ShoesContextProvider = ({ children }) => {
  //   const [shoes, setShoes] = useState([]);

  const addToCart = () => {
    console.log("context working");
    // setShoes((prevValue) => {
    //   return [...prevValue, shoes];
    // });
  };

  return <MyContext.Provider value={{addToCart}}>{children}</MyContext.Provider>;
};

export const useShoesContext = () => {
  return useContext(MyContext);
};

export default ShoesContextProvider;
