import {createSlice} from "@reduxjs/toolkit";

interface ILogInState  {
    modals: boolean
}

const initialState: ILogInState = {
    modals: false
}

export const logIn = createSlice({
    name: "LOGIN",
    initialState,
    reducers: {
        getModal(state,{payload}) {
            state.modals = payload
        }
    }
})


export const {getModal} = logIn.actions
export default logIn.reducer