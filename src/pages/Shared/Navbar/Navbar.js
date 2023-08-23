//@ts-check
import React from "react";
import { Flex, HStack, Icon } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import { notification } from "../../../assets/icons";
import SearchField from "./SearchField";
import CustomIcon from "../../../components/CustomIcon";
import UserCard from "./UserCard";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      w="100%"
      h="98px"
      px={{ base: "20px", md: "33px" }}
      align="center"
      background="white"
    >
      <MobileMenu />
      <SearchField />

      <HStack>
        <CustomIcon>
          <Icon as={notification} boxSize={"25px"} />
        </CustomIcon>

        <UserCard />
      </HStack>
    </Flex>
  );
};

export default Navbar;
