import React from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { CharacterSelection } from "../CharacterSelection/CharacterSelection";

export const CharactersScreen = ({
  characters,
  setFightStart,
  setBattleCharacters,
}) => {
  return (
    <>
      <CharacterList characters={characters} />
      <CharacterSelection
        characters={characters}
        setFightStart={setFightStart}
        setBattleCharacters={setBattleCharacters}
      />
    </>
  );
};
