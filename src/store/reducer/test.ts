import {createSlice} from "@reduxjs/toolkit";


interface IProductState {
    value: string
}

const initialState: IProductState = {
    value: ""
}


export const testReducer = createSlice({
    name: "TEST",
    initialState,
    reducers: {
        getValue(state, {payload}) {
            state.value = payload
        }
    }
})


export const {getValue} = testReducer.actions
export default testReducer.reducer