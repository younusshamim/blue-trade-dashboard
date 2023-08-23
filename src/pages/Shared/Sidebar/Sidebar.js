//@ts-check
import React from "react";
import { Box, Divider, Flex, VStack } from "@chakra-ui/react";
import { list1, list2 } from "../../../data/sidebarData";
import SidebarItem from "./SidebarItem";
import Brand from "./Brand";

const Sidebar = ({ onClose, ...rest }) => {
  return (
    <Flex
      background="white"
      direction="column"
      borderRightWidth="2px"
      borderRightColor="gray.100"
      w="307px"
      h="100vh"
      p="41px 49px"
      position="fixed"
      {...rest}
    >
      <Brand />

      <VStack align="flex-start" gap="3">
        {list1.map((item, i) => (
          <SidebarItem key={item.name + i} item={item} onClose={onClose} />
        ))}
      </VStack>

      <Box mx="5" my="10">
        <Divider borderColor="gray.200" borderWidth="1.5px" />
      </Box>

      <VStack align="flex-start" gap="2">
        {list2.map((item, i) => (
          <SidebarItem key={item.name + i} item={item} onClose={onClose} />
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
