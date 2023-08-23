import { Stack } from "@chakra-ui/react";
import React from "react";

const View = ({ children, ...rest }) => {
  return (
    <Stack h="full" background="white" p="8" borderRadius="12px" {...rest}>
      {children}
    </Stack>
  );
};

export default View;
