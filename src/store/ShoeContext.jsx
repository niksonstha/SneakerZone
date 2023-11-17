import { useState } from "react";
import { MyContext } from "./context";

// eslint-disable-next-line react/prop-types
const ShoesContextProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);

  const addToCart = (shoe) => {
    setShoes([...shoes, shoe]);
  };

  return (
    <MyContext.Provider value={{ addToCart, shoes }}>
      {children}
    </MyContext.Provider>
  );
};

export default ShoesContextProvider;
