import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootState = combineReducers({

})


export const setupStore = ()=> {
    return configureStore({
        reducer: rootState
    })
}

export type rootState =ReturnType<typeof rootState>
type AppStore =ReturnType<typeof setupStore>
export type AppDispatch =AppStore['dispatch']
