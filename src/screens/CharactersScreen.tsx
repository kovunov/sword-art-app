import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";

//Screens are composed of components and they group what we want to see on the screen at one time
export const CharactersScreen = ({
  characters,
  setBattleCharacters,
  isLoggedIn,
}) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <CharacterList characters={characters} />
      <CharacterSelection
        characters={characters}
        setBattleCharacters={setBattleCharacters}
      />
    </>
  );
};
