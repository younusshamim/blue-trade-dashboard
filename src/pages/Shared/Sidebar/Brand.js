import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/images";

const Brand = () => {
  return (
    <Link to="/">
      <HStack
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        mb="16"
      >
        <Image src={logo} alt="BlueTrade" />

        <Heading
          color="black"
          fontSize="23px"
          fontWeight="bold"
          display="flex"
          cursor="pointer"
        >
          <Box color="primary.500">Blue</Box>
          <Box>Trade.</Box>
        </Heading>
      </HStack>
    </Link>
  );
};

export default Brand;
