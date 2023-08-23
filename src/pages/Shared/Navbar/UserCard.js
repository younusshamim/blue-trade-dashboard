import React from "react";
import {
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

const menuItems = [
  { id: 1, name: "Profile", icon: userIcon },
  { id: 2, name: "Setting", icon: setting },
  { id: 2, name: "Logout", icon: FiLogOut },
];

const UserCard = () => {
  return (
    <HStack
      bg="primary.50"
      borderRadius="13px"
      w="256px"
      h="59px"
      alignItems="center"
      justify="space-between"
      pl="15px"
      pr="5px"
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
            shamim.bd@gmail.com
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

        <MenuList>
          {menuItems.map((item) => (
            <MenuItem p="10px 20px">
              <HStack gap="5">
                <Icon as={item.icon} boxSize={"18px"} />
                <Text cursor="pointer" fontSize="15px">
                  {item.name}
                </Text>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      {/* <CustomIcon>
        <Icon as={HiOutlineDotsVertical} boxSize={"25px"} color="gray.500" />
      </CustomIcon> */}
    </HStack>
  );
};

export default UserCard;
