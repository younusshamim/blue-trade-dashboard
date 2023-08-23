import { Heading } from "@chakra-ui/react";
import React from "react";

const ViewHeading = ({ children, ...rest }) => {
  return (
    <Heading fontSize="20px" fontWeight="600" {...rest}>
      {children}
    </Heading>
  );
};

export default ViewHeading;
