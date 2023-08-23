import { Box } from "@chakra-ui/react";
import React from "react";

const Badge = ({ children, colorType, radiusSize }) => {
  return (
    <Box
      backgroundColor={`${colorType}.50`}
      color={`${colorType}.500`}
      p="2px 8px"
      borderRadius={radiusSize === "sm" ? "6px" : "60px"}
      fontWeight="600"
      fontSize="11px"
    >
      {children}
    </Box>
  );
};

export default Badge;
