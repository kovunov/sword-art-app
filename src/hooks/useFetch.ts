//React hooks are essentially functions that can be used in your components.
//Hooks e.g(useState of useEffect) need to follow the following rules:
//1. Hooks can only be used in function components or in other hooks.
//2. Hooks can only be called on the top level of your component.
//3. Hooks should be called in the same order they are defined on every render.

import { useEffect, useState } from "react";

//if there are no dependencies, we assume that we fetch only on first render.
export const useFetch = (url: string) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState<unknown>(null);

  //UseEffect is a hook that is called after the component is rendered
  //to perform some kind of side effect e.g data fetching, subscription to events, etc
  //UseEffect is a function that takes a function as an argument, returns a cleanup function
  //If dependency array is missing, use effect will be called on every render
  //When we provide empty dependency array, useEffect will be called only once
  //When we provide dependencies, if dependencies change, useEffect will be called again
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return { response, error  };
};
