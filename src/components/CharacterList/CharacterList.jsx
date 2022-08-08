import React from "react";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Button,
} from "@chakra-ui/react";
import "./CharacterList.css";
import { useSelector } from "react-redux";

// Props are passed to the component via attributes

//To implement character creation and deletion we need to do these things:
//1. We need to create Add/Update screen which will be responisble for taking input for create/update
//2. We need to implement delete button on each row of the table
//3. We need to implement appropriate actions in our characters slice of the state
//4. We need to have a button to create new character
export const CharacterList = () => {
  //by using useSelector we basically get small piece of data from the store
  //and we subscribe to it
  const characters = useSelector((state) => state.characters.characterList);
  //returns true if Math.random() is more than 0.5
  return (
    <>
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
      <Button onClick>Go to add character screen</Button>
    </>
  );
};
