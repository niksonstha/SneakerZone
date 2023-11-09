import { Box, Heading } from "@chakra-ui/react";
import Cart from "../components/BasketCard";
import { useShoesContext } from "../store/context";

function Basket() {
  const { shoes } = useShoesContext();
  return (
    <Box mt={"100px"} width={"50%"} ml={20}>
      <Box bgColor={"#F6F1EE"} height={"80vh"} overflowY={"scroll"} padding={5}>
        <Heading color={"black"} textAlign={"center"}>
          My Basket
        </Heading>

        {shoes.map((shoe, index) => (
          <Cart key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default Basket;
