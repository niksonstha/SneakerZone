import {
  Box,
  HStack,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function BasketCard({ name, price, image }) {
  const [quantity, setQuantity] = useState(1);

  // Calculate total price based on quantity
  const totalPrice = (quantity * price).toFixed(2);

  return (
    <Box display={"flex"} ml={"50px"}>
      <Box>
        <Box
          bgColor={"#F6F1EE"}
          width={"600px"}
          shadow={"lg"}
          rounded={"2xl"}
          mt={5}
          display={"flex"}
          gap={10}
          color={"black"}
        >
          <Image
            src={image}
            width={"200px"}
            height={"200px"}
            objectFit={"contain"}
            padding={5}
            alignSelf={"center"}
          />
          <Box mt={5}>
            <Heading fontSize={20}>{name}</Heading>

            <Text fontSize="2xl" mt={2}>
              Price: ${price}
            </Text>

            <HStack mt={2} mb={5}>
              <Text fontWeight="bold">Quantity </Text>
              <NumberInput
                size="sm"
                maxW={16}
                value={quantity == 0 ? 1 : quantity} // Use controlled input
                min={0}
                max={20}
                allowMouseWheel
                onChange={(value) => {
                  setQuantity(value);
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>

            <Text fontSize="2xl" mt={2}>
              Total Price: ${totalPrice}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BasketCard;
