import { Box } from "@chakra-ui/react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Box overflowX={"hidden"}>
        <Header />
        <Routes>
          <Route path="/product-detail/:id" element={<ProductDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
