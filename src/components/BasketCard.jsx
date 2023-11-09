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
function BasketCard() {
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
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx9jukxsmc/air-max-90-mens-shoes-6n3vKB.png"
            width={"200px"}
            height={"100%"}
            objectFit={"cover"}
            padding={5}
            alignSelf={"center"}
          />
          <Box mt={5}>
            <Heading fontSize={30}>Jordan air 1</Heading>
            <Text
              textAlign={"justify"}
              width={"90%"}
              fontWeight={"semibold"}
              mt={2}
            >
              The Nike Air Max 90 is a classic sneaker known for its comfort and
              iconic design. It features a white and black colorway
            </Text>
            <Text fontSize="4xl" mt={2}>
              Price: $9.99
            </Text>

            <HStack mt={2} mb={5}>
              <Text fontWeight="bold">Quantity </Text>
              <NumberInput
                size="sm"
                maxW={16}
                defaultValue={0}
                min={0}
                max={20}
                allowMouseWheel
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BasketCard;
