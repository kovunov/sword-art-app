import React, { useState } from "react";

const adminCredentials = { userName: "admin", password: "admin" };

//In React we have two main types of components: stateless and stateful
//1. User types his login and password and clicks login button
//2. If the login password combination is correct, the user is redirected to the character list
export const Login = () => {
  //Rule 1: we never update the state directly, we always use setState
  //Rule 2: when state changes, the component re-renders
  //Rule 3: setState is asynchronous, it doesn't block the execution of the code
  //UseState returns an array with two elements: state and the function to update it
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //When we type something in an input, onchange event is triggered
  //To get the value of the input, we use event.target.value
  //You can create even handlers two ways: using an anonymous function
  // or using a named function
  const usernameHandler = (event: any) => {
    setUserName(event.target.value);
  };

  const loginHandler = (event: any) => {
    if (
      userName === adminCredentials.userName &&
      password === adminCredentials.password
    ) {
      setIsLoggedIn(true);
    }
  };
  console.log("isloggedin", isLoggedIn);
  return (
    <div>
      <label>User name: </label>
      <input type="text" value={userName} onChange={usernameHandler} />
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
