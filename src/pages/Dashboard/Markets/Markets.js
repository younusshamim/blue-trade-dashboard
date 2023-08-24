import React, { useState } from "react";
import View from "../../../components/View";
import ViewHeading from "../../../components/ViewHeading";
import { Button, HStack } from "@chakra-ui/react";
import TableData from "./TableData";
import BorderedBtn from "../../../components/buttons/BorderedBtn";

const Markets = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabList = ["All", "Metaverse", "Gaming", "Defi", "NFT"];

  return (
    <View w={{ base: "100%", md: "40%" }}>
      <HStack
        justifyContent="space-between"
        mb="4"
        flexDirection={{ base: "column", md: "row" }}
      >
        <ViewHeading alignSelf="flex-start" mb={{ base: "3", md: "0" }}>
          Markets
        </ViewHeading>

        <HStack w={{ base: "100%", md: "fit-content" }} overflowX="auto">
          {tabList.map((tab) => (
            <Button
              key={tab}
              color={selectedTab === tab && "primary.500"}
              fontWeight="600"
              fontSize="11px"
              p="2px 13px"
              h="28px"
              borderRadius="7px"
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </HStack>
      </HStack>

      <TableData />

      <BorderedBtn alignSelf="flex-end">View All</BorderedBtn>
    </View>
  );
};

export default Markets;
