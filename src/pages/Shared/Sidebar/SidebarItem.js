import React from "react";
import { Box, HStack, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import useColors from "../../../hooks/useColors";

const SidebarItem = ({ onClose, item: { svg, name, link } }) => {
  let { pathname } = useLocation();
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const { textColor } = useColors();

  const handleItemClick = () => {
    if (link) {
      !isLargerThanMd && onClose();
      navigate(link);
    }
  };

  return (
    <HStack
      onClick={handleItemClick}
      h="49px"
      w="208px"
      borderRadius="9px"
      px="35px"
      cursor="pointer"
      fontWeight={500}
      transition="0.3s"
      color={pathname === link ? "primary.500" : textColor}
      bg={pathname === link ? "primary.50" : ""}
      _hover={{ color: "primary.500" }}
      className="menuItem"
    >
      <HStack gap="5">
        <Icon
          as={svg}
          boxSize={"15px"}
          color={pathname === link ? "primary.500" : textColor}
          transition="0.3s"
          sx={{
            ".menuItem:hover &": {
              color: "primary.500",
            },
          }}
        />
        <Text fontSize="17px" cursor="pointer">
          {name}
        </Text>
      </HStack>
    </HStack>
  );
};

export default SidebarItem;
