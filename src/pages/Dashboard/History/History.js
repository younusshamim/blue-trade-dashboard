import React, { useState } from "react";
import View from "../../../components/View";
import ViewHeading from "../../../components/ViewHeading";
import { HStack } from "@chakra-ui/react";
import TableData from "./TableData";
import BorderedBtn from "../../../components/buttons/BorderedBtn";

const History = () => {
  return (
    <View w={{ base: "100%", md: "50%" }}>
      <HStack justifyContent="space-between" mb="4">
        <ViewHeading>History</ViewHeading>
        <BorderedBtn>View All</BorderedBtn>
      </HStack>

      <TableData />
    </View>
  );
};

export default History;
