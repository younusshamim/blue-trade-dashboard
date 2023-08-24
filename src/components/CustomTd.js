import React from "react";
import { Td } from "@chakra-ui/react";
import useColors from "../hooks/useColors";

const CustomTd = ({ children, fontSize = "12px", ...rest }) => {
  const { sidebarBorderColor } = useColors();

  return (
    <Td borderColor={sidebarBorderColor} fontSize={fontSize} {...rest}>
      {children}
    </Td>
  );
};

export default CustomTd;
