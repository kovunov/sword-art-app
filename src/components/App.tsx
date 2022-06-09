import "./App.css";
import React, { useState } from "react";
import { Login } from "./Login/Login";
import { CharacterList } from "./CharacterList/CharacterList";

//React application can be represented as a tree of React components
//This is a react root component
//This type of components is called functional components
//Functional component should start with a capital letter,
//return JSX and be exported from a file
//try to abstain from default export

//Let's create a functionality that only when user logged in as admin,
//we can see the character list, otherwise we see the simple message like
//"You are not logged in"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const header = (
    //we can only use className in JSX, because class is a reserved word in JS
    //JSX can have only one parent element
    <div className="App">
      <h1 className="jsx-style">Hello, Sword Art Gamers</h1>
      <h3>Welcome</h3>
    </div>
  );

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );

  const transformCharacterToListItem = (character: any) => {
    return (
      //When you use repeating elements in JSX, you should use key attribute
      //It's required for React to be able to update the element
      <li key={character.name}>
        <h3>{character.name}</h3>
        <p>{character.health}</p>
        <p>{character.fraction}</p>
        <p>{character.weapon}</p>
        <p>{character.damagePerHit}</p>
      </li>
    );
  };

  //This variable is assigned to a JSX element
  //JSX element starts with parenthesis and ends with a closing parenthesis
  //const characterList = <ul>{characters.map(transformCharacterToListItem)}</ul>;

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
      <Login setLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? <CharacterList /> : userNotLoggedIn}
    </div>
  );
};
