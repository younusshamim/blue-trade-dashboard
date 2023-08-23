import { Stack } from "@chakra-ui/react";
import React from "react";
import useColors from "../hooks/useColors";

const View = ({ children, ...rest }) => {
  const { componentBg } = useColors();

  return (
    <Stack
      h="full"
      background={componentBg}
      p="8"
      borderRadius="12px"
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default View;
