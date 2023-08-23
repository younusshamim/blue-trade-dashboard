import { Button } from "@chakra-ui/react";
import React from "react";

const BorderedBtn = ({
  h = "26px",
  fontSize = "10px",
  background = "transparent",
  children,
  ...rest
}) => {
  return (
    <Button
      h={h}
      width="fit-content"
      fontSize={fontSize}
      fontWeight="600"
      p="5px 10px"
      borderRadius="7px"
      borderWidth="1px"
      borderColor="gray.100"
      color="gray.400"
      background={background}
      _hover={{ background: "gray.50" }}
      _active={{ background: "gray.100" }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BorderedBtn;
