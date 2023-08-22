//@ts-check
import React from "react";
import {
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { list1 } from "../../../data/sidebarData";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import userImage from "../../../assets/images/Logo.png";


const Sidebar = ({ onClose, ...rest }) => {
  return (
    <Flex
      direction="column"
      borderRightWidth="1px"
      borderRightColor="gray.100"
      w="250px"
      h="100vh"
      p="5"
      position="fixed"
      {...rest}
    >
      <Link to="/">
        <Heading color="black" fontSize="24px" fontWeight="bold" mb="8">
          ElectroRecyclr
        </Heading>
      </Link>

      <VStack align="flex-start">

        {list1.map((item, i) => (
          <SidebarItem
            key={item.name + i}
            item={item}
            onClose={onClose}
          />
        ))}
      </VStack>

      <Link to="/dashboard/profile">
        <HStack
          bg="gray.50"
          p="10px 3px"
          overflow="hidden"
          borderRadius="lg"
          position="absolute"
          bottom="20px"
          left="5%"
          w="90%"
          cursor="pointer"
        >
          <Image
            src={userImage}
            alt=""
            rounded="50%"
            h="40px"
            w="40px"
            objectFit="cover"
            ml="5px"
          />

          <Flex direction="column">
            <Heading fontSize="14px" fontWeight="semibold">
              Younus
            </Heading>
            <Text fontSize="12px" color="gray.500">
              younusshamim.bd@gmail.com
            </Text>
          </Flex>
        </HStack>
      </Link>
    </Flex>
  );
};

export default Sidebar;
