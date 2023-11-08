import { Box, Button, Image, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Products({ name, price, image1 }) {
  return (
    <Box
      display={"flex"}
      color={"black"}
      _hover={{ transform: "scale(1.05)" }} // Apply the scale transform on hover
      transition="transform 0.3s ease" // Add a smooth transition effect
      cursor={"pointer"}
    >
      <Box
        bgColor={"#F6F1EE"}
        padding={"20px"}
        borderRadius={"20px"}
        textAlign={"center"}
        maxWidth={"400px"}
      >
        <Image
          src={image1}
          width={"300px"}
          height={"300px"}
          objectFit={"contain"}
        />
        <Text as="h1" fontWeight={"bold"}>
          {name}
        </Text>
        <Text fontSize={{ base: "2xl", md: "4xl" }} mb={5}>
          ${price}
        </Text>

        <Button variant="solid" colorScheme="teal">
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}

export default Products;
