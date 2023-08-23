import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import direction from "./direction";
import colors from "./foundations/colors";
import components from "./foundations/components";
import fonts from "./foundations/fonts";

const theme = extendTheme({
  direction,
  colors,
  fonts,
  components,
  config,
});

export default theme;
