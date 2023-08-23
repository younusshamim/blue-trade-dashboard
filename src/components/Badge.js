import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Badge = ({ children, w, colorType, radiusSize }) => {
  return (
    <Flex
      backgroundColor={`${colorType}.50`}
      color={`${colorType}.500`}
      p="2px 8px"
      borderRadius={radiusSize === "sm" ? "6px" : "60px"}
      fontWeight="600"
      fontSize="11px"
      w={w}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
};

export default Badge;
