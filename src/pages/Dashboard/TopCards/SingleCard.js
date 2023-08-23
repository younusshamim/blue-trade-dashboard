import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { progressLine } from "../../../assets/vector";
import Badge from "../../../components/Badge";

const SingleCard = ({ card }) => {
  const {
    icon,
    title,
    titleIcon,
    subTitle,
    total,
    amountTitle,
    amount,
    positiveAmount,
    percentage,
    positivePercentage,
    lineColor,
  } = card;

  return (
    <Stack background="white" p="7" borderRadius="12px" gap="5">
      <HStack justify="space-between">
        <HStack gap="4">
          <Icon as={icon} boxSize="44px" />
          <Flex direction="column" gap="2px">
            <Heading fontSize="16px" fontWeight="600">
              {title}
            </Heading>
            <Text fontSize="13px" color="gray.500" fontWeight="500">
              {subTitle}
            </Text>
          </Flex>
        </HStack>

        {titleIcon && <Icon as={titleIcon} boxSize="19px" color="gray.400" />}
      </HStack>

      <HStack
        justifyContent="space-between"
        position="relative"
        mb={lineColor && "11px"}
      >
        <Heading fontSize={lineColor ? "20px" : "30px"} fontWeight="600">
          {total}
        </Heading>

        {lineColor && (
          <Box position="absolute" right="0">
            <Icon as={progressLine} color={lineColor} boxSize="137px" />
          </Box>
        )}
      </HStack>

      <HStack justifyContent="space-between" flexWrap="wrap">
        <Text color="gray.500" fontWeight="500" fontSize="13px">
          {amountTitle}
        </Text>
        <Text
          color={positiveAmount ? "positive.500" : "negative.500"}
          fontWeight="600"
          fontSize="13px"
        >
          {amount}
        </Text>
        <Badge colorType="positive">{percentage}</Badge>
      </HStack>
    </Stack>
  );
};

export default SingleCard;
