import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { user } from "../../../assets/images";
import CustomIcon from "../../../components/CustomIcon";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { setting, user as userIcon } from "../../../assets/icons";
import { FiLogOut } from "react-icons/fi";
import useColors from "../../../hooks/useColors";

const menuItems = [
  { id: 1, name: "Profile", icon: userIcon },
  { id: 2, name: "Setting", icon: setting },
  { id: 2, name: "Logout", icon: FiLogOut },
];

const MenuItems = () => {
  return (
    <MenuList>
      {menuItems.map((item, i) => (
        <MenuItem p="10px 30px" key={i}>
          <HStack gap="5">
            <Icon as={item.icon} boxSize={"15px"} />
            <Text cursor="pointer" fontSize="14px">
              {item.name}
            </Text>
          </HStack>
        </MenuItem>
      ))}
    </MenuList>
  );
};

const UserCard = ({ ...rest }) => {
  const { cardBg } = useColors();

  return (
    <Flex>
      <Flex display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton>
            <Image
              src={user}
              alt=""
              rounded="50%"
              h="40px"
              w="40px"
              objectFit="cover"
            />
          </MenuButton>
          <MenuItems />
        </Menu>
      </Flex>

      <HStack
        bg={cardBg}
        borderRadius="13px"
        w="256px"
        h="59px"
        alignItems="center"
        justify="space-between"
        pl="15px"
        pr="5px"
        ml="5px"
        {...rest}
        display={{ base: "none", md: "flex" }}
      >
        <HStack>
          <Image
            src={user}
            alt=""
            rounded="50%"
            h="40px"
            w="40px"
            objectFit="cover"
          />

          <Flex direction="column">
            <Heading fontSize="14px" fontWeight="semibold">
              Younus Shamim
            </Heading>
            <Text fontSize="11px" color="gray.500">
              younus@gmail.com
            </Text>
          </Flex>
        </HStack>

        <Menu>
          <MenuButton>
            <CustomIcon>
              <Icon
                as={HiOutlineDotsVertical}
                boxSize={"20px"}
                color="gray.500"
              />
            </CustomIcon>
          </MenuButton>

          <MenuItems />
        </Menu>
      </HStack>
    </Flex>
  );
};

export default UserCard;
