import React, { useState } from "react";
import View from "../../../components/View";
import { Box, Flex } from "@chakra-ui/react";
import HeaderCard from "./HeaderCard";
import TabItems from "./TabItems";
import ReactApexChart from "react-apexcharts";
import useColors from "../../../hooks/useColors";

const BtcusdtChart = () => {
  const { textColor, sidebarBorderColor } = useColors();
  const [selectedTab, setSelectedTab] = useState("1H");
  const tabList = ["1H", "3H", "5H", "1D", "1W", "1M"];

  const series = [
    {
      data: [
        {
          x: 'Jul 18',
          y: [20100, 21200, 22300, 19100],
        },
        {
          x: 'Jul 19',
          y: [19100, 21200, 20300, 23100]
        },
        {
          x: 'Jul 20',
          y: [21100, 19200, 20300, 21100]
        },
        {
          x: 'Jul 21',
          y: [22100, 21200, 23300, 19100]
        },
        {
          x: 'Jul 22',
          y: [19100, 21200, 20300, 21100]
        },
      ],
    },
  ];

  const options = {
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3380ff',
          downward: '#e6efff'
        },
      }
    },
    chart: {
      foreColor: textColor,
      type: "candlestick",
      height: 350,
      toolbar: {
        show: false
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: '#718096'
        }
      },
    },
    yaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          return '$' + val
        },
        style: {
          colors: '#718096'
        }
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      borderColor: sidebarBorderColor,
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <View w={{ base: "100%", md: "60%" }} overflow="hidden">
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
