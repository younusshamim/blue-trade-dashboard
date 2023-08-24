import React from "react";
import ViewHeading from "../../../components/ViewHeading";
import Badge from "../../../components/Badge";
import { MdArrowDropDown } from "react-icons/md";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import useColors from "../../../hooks/useColors";

const HeaderCard = () => {
  const { inputBg } = useColors();

  return (
    <HStack
      width={{ base: "100%", md: "334px" }}
      padding="5"
      background={inputBg}
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
