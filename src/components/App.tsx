import "./App.css";
import React from "react";

//React application can be represented as a tree of React components
//This is a react root component
//This type of components is called functional components
//Functional component should start with a capital letter,
//return JSX and be exported from a file
//try to abstain from default export

//Create a list of characters for sword art game, they should have following properties:
//name, health, fraction, weapon, damage per hit, render the list of characters
//in the App component using list
export const App = () => {
  //JSX can be assigned to a variable
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
  const header = (
    //we can only use className in JSX, because class is a reserved word in JS
    //JSX can have only one parent element
    <div className="App">
      <h1 className="jsx-style">Hello, Sword Art Gamers</h1>
      <h3>Welcome</h3>
    </div>
  );

  const characterList = (
    <ul>
      {characters.map((character) =>
       (
        <li key={character.name}>
          <h3>{character.name}</h3>
          <p>{character.health}</p>
          <p>{character.fraction}</p>
          <p>{character.weapon}</p>
          <p>{character.damagePerHit}</p>
        </li>
      ))}
    </ul>
  );

  //JSX is called a javascript XML, this is a syntax extension
  //for rendering HTML in javascript
  //Elements can also be rendered using React.createElement
  const swordArtHeader = React.createElement(
    "h1",
    { className: "sword-art-header" },
    "Hello, Sword Art Gamers"
  );
  return (
    <div className="App">
      {characterList}
    </div>
  );
};
