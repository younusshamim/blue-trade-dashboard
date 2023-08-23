import React from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import Sidebar from "../Sidebar/Sidebar";
import CustomIcon from "../../../components/CustomIcon";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <CustomIcon
        display={{ base: "block", md: "none" }}
        ref={btnRef}
        onClick={onOpen}
      >
        <Icon as={HiMenuAlt1} boxSize={25} color="primary.500" />
      </CustomIcon>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex="9999" />

          <DrawerBody p="0">
            <Sidebar onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
