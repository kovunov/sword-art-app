import React from "react";
import { Text, Checkbox, CheckboxGroup, Flex, Stack } from "@chakra-ui/react";

export const CharacterSelection = ({ characters }) => {
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Text fontSize={"4xl"}>Select your champions!</Text>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {characters.map((character: any) => (
            <Checkbox value={character.name} key={character.name}>
              {character.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Flex>
  );
};
