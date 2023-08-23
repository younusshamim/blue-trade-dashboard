import React from "react";
import ViewHeading from "../../../components/ViewHeading";
import Badge from "../../../components/Badge";
import { MdArrowDropDown } from "react-icons/md";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";

const HeaderCard = () => {
  return (
    <HStack
      width="334px"
      padding="5"
      background="#F9F9FA"
      borderRadius="12px"
      justify="space-between"
    >
      <Stack>
        <ViewHeading>BTCUSDT</ViewHeading>
        <Text fontSize="13px" fontWeight="500" color="gray.500">
          Bitcoin
        </Text>
      </Stack>

      <HStack>
        <Stack>
          <ViewHeading>$23,738</ViewHeading>
          <Badge w="54" colorType="positive">
            +23,6%
          </Badge>
        </Stack>
        <Icon as={MdArrowDropDown} boxSize="35px" />
      </HStack>
    </HStack>
  );
};

export default HeaderCard;
