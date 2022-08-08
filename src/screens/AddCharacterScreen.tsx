import { Alert, AlertIcon, Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addCharacter, Character } from "../slices/charactersSlice";

export const AddCharacterScreen = () => {
  const [name, setName] = useState("");
  const [damagePerHit, setDamagePerHit] = useState(0);
  const [health, setHealth] = useState(0);
  const [fraction, setFraction] = useState("");
  const [weapon, setWeapon] = useState("");

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const dispatch = useAppDispatch();

  const validateValues = () => {
    if (
      name.length === 0 ||
      damagePerHit < 0 ||
      health < 0 ||
      fraction.length === 0 ||
      weapon.length === 0
    ) {
      setIsAlertVisible(true);
      return false;
    }
    return true;
  };

  const handleCharacterAdd = () => {
    if (!validateValues()) {
      return;
    }
    setIsAlertVisible(false);
    const newCharacter = {
      name,
      damagePerHit,
      health,
      fraction,
      weapon,
    };
    dispatch(addCharacter(newCharacter as Character));
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
        type="number"
        value={health}
        placeholder="Please enter a character health"
        onChange={(e) => setHealth(Number(e.target.value))}
      />
      <Input
        type="number"
        value={damagePerHit}
        placeholder="Please enter a character damage per hit"
        onChange={(e) => setDamagePerHit(Number(e.target.value))}
      />
      <Input
        type="text"
        value={weapon}
        onChange={(e) => setWeapon(e.target.value)}
        placeholder="Please enter a character weapon"
      />
      <Button onClick={handleCharacterAdd}>Add character</Button>
      {isAlertVisible && alert}
    </Stack>
  );
};
