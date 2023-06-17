import {combineReducers, configureStore} from "@reduxjs/toolkit";
import darkSlice from "./reducer/darkSlice";
import logIn from "./reducer/logIn";
import test from "./reducer/test";
import basketReducer from "./reducer/basketSlice";

const rootState = combineReducers({
    dark: darkSlice,
    logIn,
    test,
    basketReducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootState = ReturnType<typeof rootState>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
