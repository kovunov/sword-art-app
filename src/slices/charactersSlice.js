import { createSlice } from "@reduxjs/toolkit";

//Let me descrive redux data flow:
//1. We click on a button that triggers an action
//2. The action is dispatched to the store (we need to provide type and payload)
//3. The store dispatches the action to all the reducers
//4. Correct reducer is called and the state is updated
//5. The component is re-rendered
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characterList: [
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
    ],
    battleCharacters: [],
  },
  reducers: {
    //In canonical redux we can't mutate state directly, we need to return a new state
    //But slices use Immer library to do immutable state mutations behind the scenes,
    //so we can mutate state directly.
    //In this case reducer is not only reducer but also an action creator
    setBattleCharacters: (state, action) => {
      //state.battleCharacters = action.payload; will not work
      return {
        characterList: state.characterList,
        battleCharacters: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBattleCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
