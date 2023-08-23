import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryBtn = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      background="primary.500"
      _hover={{ background: "primary.600" }}
      _active={{ background: "primary.700" }}
      fontSize="14px"
      color="white"
      height="47px"
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
