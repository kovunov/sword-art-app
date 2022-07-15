import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./App.css";
import { CharactersScreen } from "../screens/CharactersScreen";
import { WinnerScreen } from "../screens/WinnerScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { BattlegroundScreen } from "../screens/BattlegroundScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  const [battleCharacters, setBattleCharacters] = useState([]);
  const [winner, setWinner] = useState(null);
  const characters = [
    {
      name: "Goku",
      health: 100,
      fraction: "Saiyan",
      weapon: "Ki",
      damagePerHit: 25,
    },
    {
      name: "Bobrik",
      health: 150,
      fraction: "Random",
      weapon: "Bow",
      damagePerHit: 19,
    },
    {
      name: "Valera",
      health: 80,
      fraction: "Ukraine",
      weapon: "Tanto",
      damagePerHit: 15,
    },
  ];
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if (error && error instanceof Error) {
    //We can use React.Fragment instead of div
    //In react we can't render objects or arrays
    return <>Error: {error.message} </>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginScreen setLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/characters"
            element={
              <CharactersScreen
                isLoggedIn={isLoggedIn}
                characters={characters}
                setBattleCharacters={setBattleCharacters}
              />
            }
          />
          <Route
            path="/winner"
            element={<WinnerScreen isLoggedIn={isLoggedIn} winner={winner} />}
          />
          <Route
            path="/battleground"
            element={
              <BattlegroundScreen
                isLoggedIn={isLoggedIn}
                setWinner={setWinner}
                winner={winner}
                battleCharacters={battleCharacters}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
