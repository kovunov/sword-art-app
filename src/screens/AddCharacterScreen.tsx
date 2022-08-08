import { Alert, AlertIcon, Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { addCharacter, Character } from "../slices/charactersSlice";

//Tips to do update
//1. Make sure you provide id when you update the character (url should look like 
//http://localhost:8080/characters/1, and request type should be PUT)
//2. Make sure you empty the characterToUpdate (make it null) once you perform the update, or add will not work
//3. Please implement appropriate action for update, it will look pretty similar to add action
//4. Make sure to cover cases in extraReducers
export const AddCharacterScreen = () => {
  const character = useSelector(
    (state: any) => state.characters.characterToUpdate
  );
  const [name, setName] = useState(character ? character.name : "");
  const [damagePerHit, setDamagePerHit] = useState(
    character ? character.damagePerHit : ""
  );
  const [health, setHealth] = useState(character ? character.health : "");
  const [fraction, setFraction] = useState(character ? character.fraction : "");
  const [weapon, setWeapon] = useState(character ? character.weapon : "");

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const validateValues = () => {
    const damage = parseInt(damagePerHit);
    const hp = parseInt(health);
    if (
      name.length === 0 ||
      damage < 0 ||
      hp < 0 ||
      fraction.length === 0 ||
      weapon.length === 0
    ) {
      setIsAlertVisible(true);
      return false;
    }
    return true;
  };

  const handleCharacterAddition = () => {
    if (!validateValues()) {
      return;
    }
    setIsAlertVisible(false);
    const newCharacter = {
      name,
      damagePerHit: parseInt(damagePerHit),
      health: parseInt(health),
      fraction,
      weapon,
    };
    dispatch(addCharacter(newCharacter as Character));
    navigate("/characters");
  };

  const alert = (
    <Alert status="error">
      <AlertIcon />
      Please make sure your inputs are valid!
    </Alert>
  );
  return (
    <Stack spacing={4}>
      <Input
        type="text"
        value={name}
        placeholder="Please enter a character name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        value={fraction}
        placeholder="Please enter a character fraction"
        onChange={(e) => setFraction(e.target.value)}
      />
      <Input
        type="text"
        value={health}
        placeholder="Please enter a character health"
        onChange={(e) => setHealth(e.target.value)}
      />
      <Input
        type="text"
        value={damagePerHit}
        placeholder="Please enter a character damage per hit"
        onChange={(e) => setDamagePerHit(e.target.value)}
      />
      <Input
        type="text"
        value={weapon}
        onChange={(e) => setWeapon(e.target.value)}
        placeholder="Please enter a character weapon"
      />
      <Button onClick={handleCharacterAddition}>
        {character ? "Update Character" : "Add Character"}
      </Button>
      {isAlertVisible && alert}
    </Stack>
  );
};
