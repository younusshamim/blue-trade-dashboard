import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
  const darkLightToggler = useColorModeValue("primary.500", "primary.500");
  // bg
  const mainBg = useColorModeValue("primary.50", "#12131A");
  const componentBg = useColorModeValue("white", "#1C1C25");
  const cardBg = useColorModeValue("primary.50", "#12131A");
  const inputBg = useColorModeValue("#F9F9FA", "#12131A");
  // text
  const textColor = useColorModeValue("black", "white");
  // border 
  const borderColor = useColorModeValue("gray.100", "#2A2A32");
  const sidebarBorderColor = useColorModeValue("gray.50", "#1C1C25");

  return {
    darkLightToggler,
    mainBg,
    componentBg,
    cardBg,
    inputBg,
    textColor,
    borderColor,
    sidebarBorderColor,
  };
};

export default useColors;
