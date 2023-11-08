import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { nikeShoes } from "../db";

function Home() {
  return (
    <Box>
      <Banner />

      <Box
        display={"flex"}
        width={"90%"}
        marginRight={"auto"}
        ml={"auto"}
        gap={10}
        mb={5}
      >
        <Products
          id={nikeShoes[0].id}
          name={nikeShoes[0].name}
          price={nikeShoes[0].price}
          image1={nikeShoes[0].image1}
        />
        <Products
          id={nikeShoes[1].id}
          name={nikeShoes[1].name}
          price={nikeShoes[1].price}
          image1={nikeShoes[1].image1}
        />
        <Products
          id={nikeShoes[2].id}
          name={nikeShoes[2].name}
          price={nikeShoes[2].price}
          image1={nikeShoes[2].image1}
        />
        <Products
          id={nikeShoes[3].id}
          name={nikeShoes[3].name}
          price={nikeShoes[3].price}
          image1={nikeShoes[3].image1}
        />
      </Box>
      <Box
        display={"flex"}
        width={"90%"}
        marginRight={"auto"}
        ml={"auto"}
        gap={10}
        mb={5}
      >
        <Products
          id={nikeShoes[4].id}
          name={nikeShoes[4].name}
          price={nikeShoes[4].price}
          image1={nikeShoes[4].image1}
        />
        <Products
          id={nikeShoes[5].id}
          name={nikeShoes[5].name}
          price={nikeShoes[5].price}
          image1={nikeShoes[5].image1}
        />
        <Products
          id={nikeShoes[6].id}
          name={nikeShoes[6].name}
          price={nikeShoes[6].price}
          image1={nikeShoes[6].image1}
        />
        <Products
          id={nikeShoes[7].id}
          name={nikeShoes[7].name}
          price={nikeShoes[7].price}
          image1={nikeShoes[7].image1}
        />
      </Box>
      <Box
        display={"flex"}
        width={"90%"}
        marginRight={"auto"}
        ml={"auto"}
        gap={10}
        mb={5}
      >
        <Products
          id={nikeShoes[8].id}
          name={nikeShoes[8].name}
          price={nikeShoes[8].price}
          image1={nikeShoes[8].image1}
        />
        <Products
          id={nikeShoes[9].id}
          name={nikeShoes[9].name}
          price={nikeShoes[9].price}
          image1={nikeShoes[9].image1}
        />
      </Box>
    </Box>
  );
}

export default Home;
