import React from "react";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import { Table, TableCaption, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import "./CharacterList.css";
import { useSelector } from "react-redux";

// Props are passed to the component via attributes
export const CharacterList = () => {
  //by using useSelector we basically get small piece of data from the store
  //and we subscribe to it
  const characters = useSelector((state) => state.characters.characterList);
  //returns true if Math.random() is more than 0.5
  return (
    <Table>
      <TableCaption>Character table</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th isNumeric>Health</Th>
          <Th>Fraction</Th>
          <Th>Weapon</Th>
          <Th isNumeric>Damage Per Hit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {characters.map((character) => (
          <CharacterListItem
            isChampion={Math.random() > 0.5}
            character={character}
          />
        ))}
      </Tbody>
    </Table>
  );
};
