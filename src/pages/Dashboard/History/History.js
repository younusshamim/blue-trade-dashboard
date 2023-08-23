import React, { useState } from "react";
import View from "../../../components/View";
import ViewHeading from "../../../components/ViewHeading";
import { HStack } from "@chakra-ui/react";
import TableData from "./TableData";
import BorderedBtn from "../../../components/buttons/BorderedBtn";

const History = () => {
  return (
    <View w="50%">
      <HStack justifyContent="space-between" mb="4">
        <ViewHeading>History</ViewHeading>
        <BorderedBtn>View All</BorderedBtn>
      </HStack>

      <TableData />

      <BorderedBtn alignSelf="flex-end" m="10px">
        View All
      </BorderedBtn>
    </View>
  );
};

export default History;
