import React from "react";
import SingleCard from "./SingleCard";
import { Grid } from "@chakra-ui/react";
import cardData from "../../../data/cardData";

const TopCards = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={6}
    >
      {cardData.map((card, i) => (
        <SingleCard card={card} key={i} />
      ))}
    </Grid>
  );
};

export default TopCards;
