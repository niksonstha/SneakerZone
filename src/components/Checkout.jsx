import { Box, Button, Heading } from "@chakra-ui/react";
import { useShoesContext } from "../store/context";
import CurrencyFormat from "react-currency-format";

// eslint-disable-next-line react/prop-types
function Checkout() {
  const { shoes } = useShoesContext();

  const { totalPrice } = useShoesContext();
  console.log(totalPrice);

  const finalPrice = shoes
    .reduce((acc, shoe) => acc + shoe.price, 0)
    .toFixed(2);

  return (
    <Box>
      <Heading>Checkout</Heading>
      <Box mt={4} bg={"#F6F1EE"} color={"black"} padding={10} rounded={"2xl"}>
        <CurrencyFormat
          value={finalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => (
            <Box fontSize={"lg"} fontWeight={"bold"}>
              Total Price: {value}
            </Box>
          )}
        />
        <Button variant="solid" colorScheme="teal" mt={4}>
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default Checkout;
