import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.js";
import ShoesContextProvider from "./store/ShoeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoesContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ShoesContextProvider>
  </BrowserRouter>
);
