import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Character {
  id: number;
  name: string;
  weapon: string;
  fraction: string;
  damagePerHit: number;
  health: number;
}

interface CharactersState {
  characterList: Character[];
  status: string;
  error: any;
  battleCharacters: Character[];
}

const initialState: CharactersState = {
  characterList: [],
  status: "idle",
  error: null,
  battleCharacters: [],
};

//createAsyncThunk is a function that allows us to get data asynchronously
//It takes type and a function that returns a promise
//Type has to be name of the slice, slash, name of the action
export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const response = await axios.get("http://localhost:8080/characters");
    return response.data;
  }
);

//1. We fill in information about our character
//2. We press `Add Character` button
//3. We send a character to the server
//4. Character is created in the database
//5. We get the character that was created with id information
export const addCharacter = createAsyncThunk(
  "characters/addCharacter",
  async (character: Character) => {
    const response = await axios.post(
      "http://localhost:8080/characters",
      character
    );
    return response.data;
  }
);

//Let me descrive redux data flow:
//1. We click on a button that triggers an action
//2. The action is dispatched to the store (we need to provide type and payload)
//3. The store dispatches the action to all the reducers
//4. Correct reducer is called and the state is updated
//5. The component is re-rendered

//The breakdown of remaining marks will be: 10, 10, 25

//Slice in redux is a container that holds the state of the part of the application,
//provides actions and reducers to manage the state
export const charactersSlice = createSlice({
  name: "characters",
  initialState,
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
        status: state.status,
        error: state.error,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCharacters.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characterList = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(addCharacter.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addCharacter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characterList.push(action.payload);
      })
      .addCase(addCharacter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setBattleCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
