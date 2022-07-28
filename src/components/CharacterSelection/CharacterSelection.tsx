import React, { useState } from "react";
import {
  Text,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBattleCharacters } from "../../slices/charactersSlice";

export const CharacterSelection = () => {
  const characters = useSelector(
    (state: any) => state.characters.characterList
  );
  //By using useDispatch we can dispatch actions to the store
  const dispatch = useDispatch();

  const [heroesSelected, setHeroesSelected] = useState<Array<string>>([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();
  //By using onChange handler we react to the change of the checkbox and either add or
  //remove the value from the state array
  const onHeroChanged = (event) => {
    const hero = event.target.value;
    if (heroesSelected.includes(hero)) {
      setHeroesSelected(heroesSelected.filter((h) => h !== hero));
    } else {
      setHeroesSelected([...heroesSelected, hero]);
    }
  };

  const onFightStart = (e) => {
    if (heroesSelected.length !== 2) {
      setIsAlertVisible(true);
      return;
    }
    setIsAlertVisible(false);

    const selectedCharacters = characters.filter((character) =>
      heroesSelected.includes(character.name)
    );
    //Selected characters in our case is action.payload
    dispatch(setBattleCharacters(selectedCharacters));
    navigate("/battleground");
  };

  const alert = (
    <Alert status="error">
      <AlertIcon />
      Please select only two heroes!
    </Alert>
  );
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Text fontSize={"4xl"}>Select your champions!</Text>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {characters.map((character: any) => (
            <Checkbox
              isChecked={heroesSelected.includes(character.name)}
              onChange={onHeroChanged}
              value={character.name}
              key={character.name}
            >
              {character.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <Button
        mt={"3%"}
        mb={"3%"}
        colorScheme="red"
        variant="solid"
        onClick={onFightStart}
      >
        Start the battle!
      </Button>
      {isAlertVisible && alert}
    </Flex>
  );
};
