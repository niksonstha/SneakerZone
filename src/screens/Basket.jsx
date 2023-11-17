import { Box, Heading } from "@chakra-ui/react";
import { useShoesContext } from "../store/context";
import BasketCard from "../components/BasketCard";
import Checkout from "../components/Checkout";

function Basket() {
  const { shoes } = useShoesContext();

  return (
    <Box mt={"100px"} width={"100%"} ml={20} display={"flex"} gap={20}>
      {shoes.length > 0 ? (
        <>
          <Box
            bgColor={"#F6F1EE"}
            height={"80vh"}
            overflowY={"scroll"}
            padding={5}
          >
            <Heading color={"black"} textAlign={"center"}>
              My Basket
            </Heading>

            {shoes.map((shoe, index) => (
              <Box key={index}>
                <BasketCard
                  key={index}
                  name={shoe.name}
                  price={shoe.price}
                  image={shoe.image1}
                />
              </Box>
            ))}
          </Box>
          <Box>
            <Checkout />
          </Box>
        </>
      ) : (
        <Heading letterSpacing={4}>No items in basket</Heading>
      )}
    </Box>
  );
}

export default Basket;
