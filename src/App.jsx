import { Box, Heading } from "@chakra-ui/react";
import Home from "./screens/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Basket from "./screens/Basket";
import { useEffect } from "react";

function App() {
  const user = "nikson";
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Box overflowX="hidden">
      {user && <Header />}
      <Routes>
        {user ? (
          <>
            <Route path="/basket" element={<Basket />} />
            <Route path="/product-detail/:id" element={<ProductDetails />} />
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route
            path="/login"
            element={<Heading color="black">I am login page</Heading>}
          />
        )}
      </Routes>
    </Box>
  );
}

export default App;
