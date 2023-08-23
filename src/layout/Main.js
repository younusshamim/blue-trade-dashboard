import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import useColors from "../hooks/useColors";

const Main = () => {
  const { mainBg } = useColors();

  return (
    <Flex background={mainBg}>
      <Sidebar display={{ base: "none", md: "flex" }} />

      <Flex
        direction="column"
        w={{ base: "100%", md: "calc(100vw - 307px)" }}
        minH="100vh"
        ml={{ md: "307px" }}
      >
        <Navbar />

        <Flex p={{ base: "15px 20px", md: "28px 33px" }} h="full" w="full">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Main;
