import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
  const darkLightToggler = useColorModeValue("primary.500", "primary.500");
  // bg
  const mainBg = useColorModeValue("primary.50", "#12131A");
  const componentBg = useColorModeValue("white", "#1C1C25");
  // text
  const textColor = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("gray.100", "gray.800");
  const dividerColor = useColorModeValue("gray.200", "gray.700");

  return {
    darkLightToggler,
    mainBg,
    componentBg,
    textColor,
    borderColor,
    dividerColor,
  };
};

export default useColors;
