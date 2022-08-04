import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/charactersSlice'
import loginReducer from './slices/loginSlice'

//Redux store is a single source of truth for the application state
//Note: we can still combine react useState and redux store, in case we have state
//that we don't share and that is managed by component itself, we can use simple useState
//1. we need to create the store
//2. We need to provide redux store to React
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    login: loginReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
