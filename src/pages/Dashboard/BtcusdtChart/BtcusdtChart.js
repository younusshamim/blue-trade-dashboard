import React, { useState } from "react";
import View from "../../../components/View";
import { Flex } from "@chakra-ui/react";
import HeaderCard from "./HeaderCard";
import TabItems from "./TabItems";

const BtcusdtChart = () => {
  const [selectedTab, setSelectedTab] = useState("1H");
  const tabList = ["1H", "3H", "5H", "1D", "1W", "1M"];

  return (
    <View w="60%">
      <Flex justify="space-between" alignItems="flex-start">
        <HeaderCard />

        <TabItems
          tabList={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </Flex>
    </View>
  );
};

export default BtcusdtChart;
