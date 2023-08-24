import React from "react";
import { Table, Tbody, Tr, Icon, Flex } from "@chakra-ui/react";
import historyData from "../../../data/historyData";
import Badge from "../../../components/Badge";
import CustomTd from "../../../components/CustomTd";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TableData = () => {
  return (
    <Flex overflowX="auto">
      <Table variant="simple">
        <Tbody>
          {historyData.map((item, i) => {
            const amountValue = parseFloat(
              item.amount.replace(/[^0-9.-]/g, "")
            );

            return (
              <Tr key={item.title + i}>
                <CustomTd pl="0">
                  <Icon
                    as={
                      item.isArrowPositive
                        ? AiOutlineArrowDown
                        : AiOutlineArrowUp
                    }
                    color={
                      item.isArrowPositive ? "positive.500" : "negative.500"
                    }
                    boxSize="23px"
                    background={
                      item.isArrowPositive ? "positive.50" : "negative.50"
                    }
                    borderRadius="50%"
                    p="3px"
                  />
                </CustomTd>

                <CustomTd fontWeight="600">{item.title}</CustomTd>
                <CustomTd
                  fontWeight="500"
                  color={amountValue > 0 ? "positive.500" : "negative.500"}
                >
                  {item.amount}
                </CustomTd>
                <CustomTd fontWeight="500">{item.time}</CustomTd>

                <CustomTd pr="0">
                  <Badge
                    colorType={
                      item.status === "pending"
                        ? "yellow"
                        : "done"
                        ? "positive"
                        : null
                    }
                    w="58px"
                    radiusSize="sm"
                  >
                    {item.status}
                  </Badge>
                </CustomTd>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TableData;
