import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const WinnerScreen = ({ winner }) => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn);

  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <Text fontSize={"5xl"} fontWeight="800">
        Winner of the battle is {winner}
      </Text>
      <Button mt="3%" onClick={() => navigate("/characters")}>
        Go back to character screen
      </Button>
    </>
  );
};
