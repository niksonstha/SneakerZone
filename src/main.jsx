import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Sora', sans-serif`,
    body: `'Sora', sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: "#4F4A45",
        color: "#F6F1EE",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
