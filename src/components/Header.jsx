import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import headerLogo from "../assets/headerLogo.png";

function Header() {
  return (
    <Box
      backgroundColor={"#ED7D31"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"4rem"}
      boxShadow="0 3px 10px rgba(0, 0, 0, 0.2)"
    >
      <Box>
        <Image
          src={headerLogo}
          alt=""
          width={"4rem"}
          ml={"20px"}
          cursor={"pointer"}
        />
      </Box>
      <Box>
        <UnorderedList
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
          flex="1"
          letterSpacing={2}
          width={"100%"}
        >
          <ListItem
            padding={"10px"}
            listStyleType={"none"}
            cursor={"pointer"}
            transition="all 0.2s ease-in"
            fontWeight={500}
            _hover={{
              color: "black",
            }}
          >
            Home
          </ListItem>
          <ListItem
            padding={"10px"}
            listStyleType={"none"}
            cursor={"pointer"}
            transition="all 0.2s ease-in"
            fontWeight={500}
            _hover={{
              color: "black",
            }}
          >
            Products
          </ListItem>
          <ListItem
            padding={"10px"}
            listStyleType={"none"}
            cursor={"pointer"}
            transition="all 0.2s ease-in"
            fontWeight={500}
            _hover={{
              color: "black",
            }}
          >
            Contact Us
          </ListItem>
          <ListItem
            padding={"10px"}
            listStyleType={"none"}
            cursor={"pointer"}
            transition="all 0.2s ease-in"
            fontWeight={500}
            _hover={{
              color: "black",
            }}
          >
            About Us
          </ListItem>
        </UnorderedList>
      </Box>
      <Box mr={"20px"} cursor={"pointer"}>
        <Text fontSize={"0.8rem"}>Hello</Text>
        <Text fontSize={"0.8rem"} width={"100%"}>
          Guest
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
