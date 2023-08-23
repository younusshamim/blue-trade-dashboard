import React from "react";
import View from "../../../components/View";
import ViewHeading from "../../../components/ViewHeading";
import BorderedBtn from "../../../components/buttons/BorderedBtn";
import { HStack, Icon } from "@chakra-ui/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const AssetsChart = () => {
  return (
    <View w="25%">
      <HStack justifyContent="space-between" mb="4">
        <ViewHeading>Assets</ViewHeading>
        <BorderedBtn>
          <Icon as={HiOutlineDotsHorizontal} boxSize="20px" />
        </BorderedBtn>
      </HStack>
    </View>
  );
};

export default AssetsChart;
