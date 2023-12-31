import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import headerLogo from "../assets/headerLogo.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdShoppingBasket } from "react-icons/md";
import { useShoesContext } from "../store/context";

function Header() {
  const [scroll, setScroll] = useState("");
  const { shoes } = useShoesContext();

  const navbarColor = () => {
    if (window.scrollY > 100) {
      setScroll("#ED7D31");
    } else {
      setScroll("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarColor);
    return () => {
      window.removeEventListener("scroll", navbarColor);
    };
  }, []);

  return (
    <Box
      bgColor={scroll}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="4rem"
      position="fixed"
      width="100%"
      transition={"all 0.5s"}
      zIndex={1000}
    >
      <Link to="/">
        <Image
          src={headerLogo}
          alt=""
          width={"4rem"}
          ml="20px"
          cursor="pointer"
        />
      </Link>
      <Box pos={"relative"}>
        <UnorderedList
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={10}
          letterSpacing={2}
          width="100%"
          listStyleType="none"
        >
          <ListItem
            padding="10px"
            cursor="pointer"
            transition="color 0.2s ease-in"
            fontWeight={500}
            _hover={{
              color: "black",
            }}
          >
            <Link to="/">Home</Link>
          </ListItem>

          <ListItem
            padding="10px"
            cursor="pointer"
            transition="color 0.2s ease-in"
            fontWeight={500}
            _hover={{
              color: "black",
            }}
          >
            <Link to="/contact">Contact Us</Link>
          </ListItem>
          <ListItem
            padding="10px"
            cursor="pointer"
            transition="color 0.2s ease-in"
            fontWeight={500}
            _hover={{
              color: "black",
            }}
          >
            <Link to="/about">About Us</Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box
        mr="20px"
        cursor="pointer"
        display={"flex"}
        gap={5}
        alignItems={"center"}
      >
        <NavLink to={"/basket"}>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <MdShoppingBasket style={{ fontSize: "1.3rem" }} />
            <Text fontSize={"0.7rem"}>({shoes.length})</Text>
          </Box>
        </NavLink>

        <CgProfile style={{ fontSize: "1.3rem" }} />
      </Box>
    </Box>
  );
}

export default Header;
