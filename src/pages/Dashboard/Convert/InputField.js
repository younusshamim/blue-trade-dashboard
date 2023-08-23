import React from "react";
import { Box, Button, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

const InputField = ({ btnType, btnValue, value, setValue }) => {
  return (
    <Box borderRadius="7px" h="49px" background="#F9F9FA" position="relative">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        w="70%"
        h="full"
        border="none"
        fontSize="12px"
        fontWeight="600"
      />

      <Button
        background={btnType + ".50"}
        _hover={{ background: btnType + ".50" }}
        _active={{ background: btnType + ".100" }}
        size="sm"
        position="absolute"
        right="10px"
        top="8px"
        w="62px"
        h="31px"
      >
        <HStack gap="3px">
          <Text
            fontSize="10px"
            fontWeight="600"
            color={btnType + ".600"}
            cursor="pointer"
          >
            {btnValue}
          </Text>
          <Icon as={MdArrowDropDown} boxSize="15px" />
        </HStack>
      </Button>
    </Box>
  );
};

export default InputField;
