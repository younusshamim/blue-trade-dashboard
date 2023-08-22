//@ts-check
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const menuItems = [
    { id: 1, name: "My Profile", icon: <AiOutlineUser /> },
    { id: 2, name: "Logout", icon: <FiLogOut /> },
  ];

  return (
    <Flex justify="space-between" mb="5" w="100%">
      <MobileMenu />

      <Heading fontSize="22px">Hi</Heading>

      <HStack>
        {/* <InputGroup bg="gray.100" size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search.." />
        </InputGroup> */}

        <IconButton
          icon={<IoIosNotificationsOutline />}
          size="sm"
          fontSize="20px"
        />

        <Menu>
          <MenuButton>
            <IconButton icon={<AiOutlineSetting />} size="sm" fontSize="20px" />
          </MenuButton>

          <MenuList color="black" minW="180px">
            {menuItems.map((menu, i) => (
              <MenuItem key={menu + i} >
                <HStack py="5px" fontSize="15px">
                  <Box>{menu.icon}</Box>
                  <Text>{menu.name}</Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;
