import React from "react";
import { Box } from "@chakra-ui/react";

const CustomIcon = ({ children, ...rest }) => {
  return (
    <Box
      transition="0.2"
      _hover={{ background: "gray.50" }}
      _active={{ background: "gray.100" }}
      p="5px"
      borderRadius="md"
      align="center"
      justify="center"
      cursor="pointer"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CustomIcon;
