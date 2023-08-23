import React from "react";
import { Heading, VStack } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <VStack alignItems="center" justify="center" w="full">
      <Heading color="negative.500" fontSize="22px">
        NOT FOUND !!
      </Heading>
    </VStack>
  );
};

export default NotFound;
