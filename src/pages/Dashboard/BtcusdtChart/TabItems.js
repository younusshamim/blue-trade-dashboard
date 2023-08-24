import { Button, HStack } from "@chakra-ui/react";
import React from "react";

const TabItems = ({ tabList, selectedTab, setSelectedTab }) => {
  return (
    <HStack overflowX="auto" mb={{ base: "3", md: "0" }} w="100%">
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
  );
};

export default TabItems;
