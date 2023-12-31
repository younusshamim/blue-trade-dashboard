import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import useColors from "../../../hooks/useColors";

const SearchField = () => {
  const { borderColor } = useColors();

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="57px"
      w={{ base: "50%", md: "626px" }}
      h="50px"
      position="relative"
    >
      <Input
        type="text"
        placeholder="Search..."
        borderRadius="57px"
        w="full"
        h="full"
        pl="9"
        _placeholder={{ color: "gray.300" }}
      />

      <Box
        color="gray.400"
        fontSize="18px"
        cursor="pointer"
        position="absolute"
        right="6"
        top="14px"
      >
        <BsSearch cursor="pointer" />
      </Box>
    </Box>
  );
};

export default SearchField;
