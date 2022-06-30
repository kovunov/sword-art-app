import React, { useState, useRef, useEffect } from "react";

import { Button, Input, Flex, Text } from "@chakra-ui/react";

const adminCredentials = { userName: "admin", password: "admin" };

interface LoginProps {
  setLoggedIn: (isLoggedIn: boolean) => void;
}

//In React we have two main types of components: stateless and stateful
//1. User types his login and password and clicks login button
//2. If the login password combination is correct, the user is redirected to the character list
export const Login = ({ setLoggedIn }: LoginProps) => {
  //Rule 1: we never update the state directly, we always use setState
  //Rule 2: when state changes, the component re-renders
  //Rule 3: setState is asynchronous, it doesn't block the execution of the code
  //UseState returns an array with two elements: state and the function to update it
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //countRef.current is a reference to the current value of count, e.g 0
  //1) Value of the reference is persistent across re-renders
  //2) Changing value of the reference doesn't cause component to re-render
  //Count ref is used to log key presses in the username input
  const countRef = useRef(0);
  //We can also use refs to focus on some DOM element, usually input
  //It can be done in three steps:
  //1) Create a ref
  //2) We use useEffect to focus on the element
  //3) We use ref attribute to point to the element, in our case to the input
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  //When we type something in an input, onchange event is triggered
  //To get the value of the input, we use event.target.value
  //You can create even handlers two ways: using an anonymous function
  // or using a named function
  const usernameHandler = (event: any) => {
    countRef.current++;
    console.log("Count", countRef.current);
    setUserName(event.target.value);
  };

  const loginHandler = (event: any) => {
    if (
      userName === adminCredentials.userName &&
      password === adminCredentials.password
    ) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <Flex justify={"center"} direction="column" align={"center"}>
      <Text size={"lg"} mb="1%">
        User name:{" "}
      </Text>
      <Input
        ref={inputRef}
        type="text"
        value={userName}
        width="50%"
        onChange={usernameHandler}
        mb="2%"
      />
      <Text size={"lg"} mb="1%">
        Password:{" "}
      </Text>
      <Input
        mb="2%"
        type="password"
        value={password}
        width="50%"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme={"blue"} onClick={loginHandler}>
        Login
      </Button>
    </Flex>
  );
};
