import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export const Battleground = ({ battleCharacters }) => {
  const [fighter1, fighter2] = battleCharacters;
  const [firstFighterState, setFirstFighterState] = React.useState(fighter1);
  const [secondFighterstate, setSecondFighterState] = React.useState(fighter2);
  return (
    <Flex justify={"center"} align={"center"} direction={"column"} h="90vh">
      <Text mt="2%" fontSize={"3xl"} fontWeight="700">
        Let's get ready to the fight
      </Text>
      <Text mt="2%" fontSize={"2xl"} fontWeight="600">
        {firstFighterState.name} health: {firstFighterState.health}
      </Text>
      <Text mt="2%" fontSize={"2xl"} fontWeight="600">
        {secondFighterstate.name} health: {secondFighterstate.health}
      </Text>
      <Box w="80%" h="100%" mt="3%" border="0.5rem dotted black">
        <Text mt="2%" fontSize={"2xl"} fontWeight="500">
          Let's get ready to the fight
        </Text>
        <Text mt="35%" fontSize={"2xl"} fontWeight="500">
          Let's get ready to the fight
        </Text>
      </Box>
    </Flex>
  );
};
