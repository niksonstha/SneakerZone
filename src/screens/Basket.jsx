import { Box, Heading } from "@chakra-ui/react";
import Cart from "../components/BasketCard";

function Basket() {
  return (
    <Box mt={"100px"} width={"50%"} ml={20}>
      <Box bgColor={"#F6F1EE"} height={"80vh"} overflowY={"scroll"} padding={5}>
        <Heading color={"black"} textAlign={"center"}>
          My Basket
        </Heading>
        <Cart />
        <Cart />
        <Cart />
      </Box>
    </Box>
  );
}

export default Basket;
