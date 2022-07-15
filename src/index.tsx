import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//we check directory relative to the file
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./components/App";

//Creates a root element in the DOM
//React DOM library is used to interact with the DOM
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);
