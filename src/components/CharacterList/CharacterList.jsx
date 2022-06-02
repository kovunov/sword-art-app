import React from "react";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import "./CharacterList.css";
const characters = [
  {
    name: "Goku",
    health: 100,
    fraction: "Saiyan",
    weapon: "Ki",
    damagePerHit: 10,
  },
  {
    name: "Bobrik",
    health: 150,
    fraction: "Random",
    weapon: "Bow",
    damagePerHit: 6,
  },
  {
    name: "Valera",
    health: 80,
    fraction: "Ukraine",
    weapon: "Tanto",
    damagePerHit: 15,
  },
];

// Props are passed to the component via attributes
export const CharacterList = () => {
  //returns true if Math.random() is more than 0.5  
  return (
    <ul>
      {characters.map((character) => (
        <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
      ))}
    </ul>
  );
};
