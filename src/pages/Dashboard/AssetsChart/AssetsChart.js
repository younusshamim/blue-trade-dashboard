import React from "react";
import View from "../../../components/View";
import ViewHeading from "../../../components/ViewHeading";
import BorderedBtn from "../../../components/buttons/BorderedBtn";
import { Box, HStack, Icon } from "@chakra-ui/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ReactApexChart from "react-apexcharts";
import useColors from "../../../hooks/useColors";

const AssetsChart = () => {
  const { textColor } = useColors();

  const labelItems = ["BTC", "ETH", "ADA", "Others"];
  const series = [70, 15, 10, 5];
  const options = {
    colors: ["#2F80ED", "#B1D3FF", "#00C4DF", "#155AB6"],
    chart: {
      type: "donut",
      foreColor: textColor,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    legend: {
      show: true,
      labels: {
        colors: "#3380ff",
      },
      markers: {
        radius: 0,
      },
      position: "bottom",
    },
    labels: labelItems,
    dataLabels: {
      enabled: false,
      dropShadow: {
        enabled: false,
      },
    },
  };

  return (
    <View w={{ base: "100%", md: "25%" }}>
      <HStack justifyContent="space-between" mb="4">
        <ViewHeading>Assets</ViewHeading>
        <BorderedBtn>
          <Icon as={HiOutlineDotsHorizontal} boxSize="20px" />
        </BorderedBtn>
      </HStack>

      <Box w="100%">
        <ReactApexChart options={options} series={series} type="donut" />
      </Box>
    </View>
  );
};

export default AssetsChart;
