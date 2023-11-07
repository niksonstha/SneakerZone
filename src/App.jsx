import { Box } from "@chakra-ui/react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Box overflowX={"hidden"}>
        <Header />
        <Routes>
          <Route path="/login" element={<h1>I am login page</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
