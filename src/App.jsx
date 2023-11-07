import { Box } from "@chakra-ui/react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box overflowX={"hidden"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
