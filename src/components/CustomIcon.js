import React from "react";
import { Box } from "@chakra-ui/react";

const CustomIcon = ({ children, ...rest }) => {
  return (
    <Box
      transition="0.2"
      _hover={{ background: "gray.50" }}
      _active={{ background: "gray.100" }}
      p="5px 5px 0px 5px"
      borderRadius="md"
      cursor="pointer"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CustomIcon;
