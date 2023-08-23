//@ts-check
import React from "react";
import { Flex, HStack, Icon, useColorMode } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import { notification } from "../../../assets/icons";
import SearchField from "./SearchField";
import CustomIcon from "../../../components/CustomIcon";
import UserCard from "./UserCard";
import { MdLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import useColors from "../../../hooks/useColors";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { darkLightToggler, componentBg } = useColors();

  return (
    <Flex
      justify="space-between"
      w="100%"
      h="98px"
      px={{ base: "20px", md: "33px" }}
      align="center"
      background={componentBg}
    >
      <MobileMenu />
      <SearchField />

      <HStack>
        <CustomIcon onClick={toggleColorMode} title="Switch dark/light mode">
          <Icon
            as={colorMode === "light" ? IoMdMoon : MdLightMode}
            boxSize={"25px"}
            color={darkLightToggler}
          />
        </CustomIcon>

        <CustomIcon>
          <Icon as={notification} boxSize={"25px"} />
        </CustomIcon>

        <UserCard />
      </HStack>
    </Flex>
  );
};

export default Navbar;
