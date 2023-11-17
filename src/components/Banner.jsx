import { Box } from "@chakra-ui/react";

function Banner() {
  return (
    <Box
      className="banner"
      backgroundImage={`url("https://cdn.shopify.com/s/files/1/0567/9503/7849/files/website-banner-desktop-landscape.jpg?v=1635135138")`}
      width="100%"
      height="70vh"
      maxH={"70vh"}
      backgroundRepeat="no-repeat"
      backgroundPosition="center center center"
      backgroundSize="cover"
      pos={"relative"}
      zIndex={-1}
      overflowY={"hidden"}
      opacity={"0.5"}
      display={"flex"}
    >
      <Box
        style={{
          position: "absolute",
          top: "88%",
          width: "100%",
          height: "7rem",
          maxHeight:'7rem',
          backgroundImage: "linear-gradient(180deg,transparent,#4F4A45 80%)",
        }}
      />
    </Box>
  );
}

export default Banner;
