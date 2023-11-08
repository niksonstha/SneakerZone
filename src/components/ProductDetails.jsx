import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { nikeShoes } from "../db";

function ProductDetails() {
  const { id } = useParams();

  const product = nikeShoes.find((item) => item.id === JSON.parse(id));

  return (
    <Box
      mt="70px"
      display="flex"
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"-webkit-fit-content"}
      padding={20}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={10}
        mt={10}
        width={"80%"}
      >
        <Box
          bgColor={"white"}
          height={"50vh"}
          width={"40%"}
          display={"flex"}
          justifyContent={"center"}
          rounded="md"
          padding={10}
          _hover={{ transform: "scale(1.05)", boxShadow: "dark-lg" }}
          transition="transform 0.3s ease"
        >
          <Image src={product.image1} width={"100%"} objectFit={"contain"} />
        </Box>

        <Box>
          <Heading as="h1" mb={5}>
            {product.name}
          </Heading>
          <Text width={"400px"} textAlign={"justify"} fontWeight="bold" mb={3}>
            {product.description}
          </Text>
          <Text fontSize={"3xl"}>Price: ${product.price}</Text>
          <Button variant="solid" colorScheme="teal">
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetails;
