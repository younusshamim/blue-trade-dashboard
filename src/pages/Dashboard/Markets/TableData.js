import React from "react";
import { Flex, Table, Tbody, Tr } from "@chakra-ui/react";
import marketsData from "../../../data/marketsData";
import Badge from "../../../components/Badge";
import CustomTd from "../../../components/CustomTd";

const TableData = () => {
  return (
    <Flex overflowX="auto">
      <Table variant="simple">
        <Tbody>
          {marketsData.map((item, i) => (
            <Tr key={item.title + i}>
              <CustomTd pl="0" fontWeight="600">
                {item.title}
              </CustomTd>
              <CustomTd fontWeight="600" color="gray.500">
                {item.subtitle}
              </CustomTd>
              <CustomTd fontWeight="500">{item.amount}</CustomTd>
              <CustomTd pr="0px">
                <Badge colorType={item.status} w="58px">
                  {item.percentage}
                </Badge>
              </CustomTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TableData;
