import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Sora', sans-serif`,
    body: `'Sora', sans-serif`,
  },

  styles: {
    global: {
      html: {
        "scroll-behavior": "smooth",
      },
      body: {
        bg: "#4F4A45",
        color: "#F6F1EE",
      },
      // Add custom scrollbar styles here
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#ED7D31", // Color of the scrollbar thumb
        borderRadius: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: "#E5E7EB", // Color of the scrollbar track
      },
      scrollbarWidth: "thin", // For non-WebKit browsers
      scrollbarColor: "#6B7280 #E5E7EB", // Thumb and track color for non-WebKit browsers
    },
  },
});
