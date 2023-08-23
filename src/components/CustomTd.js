import React from "react";
import { Td } from "@chakra-ui/react";

const CustomTd = ({ children, fontSize = "12px", ...rest }) => {
  return (
    <Td borderColor="gray.50" fontSize={fontSize} {...rest}>
      {children}
    </Td>
  );
};

export default CustomTd;
