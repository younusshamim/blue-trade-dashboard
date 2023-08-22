import React from "react";
import {
  Box,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";


const SidebarItem = ({ onClose, item: { Icon, name, link } }) => {
  let { pathname } = useLocation();
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()

  const handleItemClick = () => {
    if (link) {
      !isLargerThanMd && onClose()
      navigate(link)
    }
  }

  return (
    <HStack justify="space-between" w="full" borderRadius="sm"
      transition="0.3s"
      _hover={{ color: "gray.900" }}
      color={pathname === link ? "gray.900" : "gray.500"}
      fontWeight={pathname === link ? "semibold" : "normal"}
      bg={pathname === link ? "gray.50" : ""}
      cursor="pointer"
      p="12px 8px" onClick={handleItemClick}>
      <HStack gap="5">
        <Box fontSize="19px" fontWeight="bold">
          {<Icon />}
        </Box>
        <Text fontSize="15px">{name}</Text>
      </HStack>
    </HStack>
  );
};

export default SidebarItem;
