import { useEffect, useRef } from "react";

//This hook is used to run a function every x seconds
export const useInterval = (
  callback: () => void,
  timeInterval: number | null
) => {
  //Our function (callback) is accessible by savedCallbackRef.current
  const savedCallback = useRef(callback);
  useEffect(() => {
    if (!timeInterval || timeInterval === 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), timeInterval);

    return () => clearInterval(id);
  }, [timeInterval]);
};
