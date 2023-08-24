import React, { useState } from "react";
import View from "../../../components/View";
import { Box, Flex } from "@chakra-ui/react";
import HeaderCard from "./HeaderCard";
import TabItems from "./TabItems";
import ReactApexChart from "react-apexcharts";
import useColors from "../../../hooks/useColors";

const BtcusdtChart = () => {
  const { textColor } = useColors();
  const [selectedTab, setSelectedTab] = useState("1H");
  const tabList = ["1H", "3H", "5H", "1D", "1W", "1M"];

  const labelItems = ["BTC", "ETH", "ADA", "Others"];
  const series = [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
      ],
    },
  ];

  const options = {
    chart: {
      foreColor: textColor,
      type: "candlestick",
      height: 350,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },

    // colors: ["#2F80ED", "#B1D3FF", "#00C4DF", "#155AB6"],
    // plotOptions: {
    //   pie: {
    //     donut: {
    //       labels: {
    //         show: false,
    //       },
    //     },
    //   },
    // },
    //   legend: {
    //     show: true,
    //     labels: {
    //       colors: "#3380ff",
    //     },
    //     markers: {
    //       radius: 0,
    //     },
    //     position: "bottom",
    //   },
    //   labels: labelItems,
    //   dataLabels: {
    //     enabled: false,
    //     dropShadow: {
    //       enabled: false,
    //     },
    //   },
  };

  return (
    <View w={{ base: "100%", md: "60%" }}>
      <Flex
        justify="space-between"
        alignItems="flex-start"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <HeaderCard />

        <TabItems
          tabList={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </Flex>

      <Box w="100%">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
      </Box>
    </View>
  );
};

export default BtcusdtChart;
