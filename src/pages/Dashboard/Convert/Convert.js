import React, { useState } from "react";
import View from "../../../components/View";
import ViewHeading from "../../../components/ViewHeading";
import BorderedBtn from "../../../components/buttons/BorderedBtn";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import InputField from "./InputField";
import PrimaryBtn from "../../../components/buttons/PrimaryBtn";

const Convert = () => {
  const [USDT, setUSDT] = useState("100");
  const [BTC, setBTC] = useState("0.0043");

  return (
    <View w={{ base: "100%", md: "25%" }}>
      <HStack justifyContent="space-between" mb="4">
        <ViewHeading>Convert</ViewHeading>
        <BorderedBtn>
          <Icon as={HiOutlineDotsHorizontal} boxSize="20px" />
        </BorderedBtn>
      </HStack>

      <Stack gap="4">
        <InputField
          btnType="positive"
          btnValue="USDT"
          value={USDT}
          setValue={setUSDT}
        />
        <InputField
          btnType="yellow"
          btnValue="BTC"
          value={BTC}
          setValue={setBTC}
        />
        <PrimaryBtn>Convert Now</PrimaryBtn>

        <Text fontSize="8px" color="gray.500">
          The ultimate price and output is determined by the amount of tokens in
          the pool at the time of your swap.
        </Text>
      </Stack>
    </View>
  );
};

export default Convert;
