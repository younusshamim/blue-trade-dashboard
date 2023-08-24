import React from "react";
import { HStack, Stack } from "@chakra-ui/react";
import TopCards from "./TopCards/TopCards";
import BtcusdtChart from "./BtcusdtChart/BtcusdtChart";
import Markets from "./Markets/Markets";
import AssetsChart from "./AssetsChart/AssetsChart";
import Convert from "./Convert/Convert";
import History from "./History/History";

const Dashboard = () => {
  return (
    <Stack w="full" gap={6}>
      <TopCards />

      <HStack
        w="full"
        gap={6}
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
      >
        <BtcusdtChart />
        <Markets />
      </HStack>

      <HStack
        w="full"
        gap={6}
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
      >
        <AssetsChart />
        <Convert />
        <History />
      </HStack>
    </Stack>
  );
};

export default Dashboard;
