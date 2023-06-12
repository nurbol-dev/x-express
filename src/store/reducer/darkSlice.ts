import {createSlice} from "@reduxjs/toolkit";

interface IDarkSlice {
    dark: boolean,
    productCard: boolean,
    language: boolean
}

const initialState: IDarkSlice = {
    dark: false,
    productCard: false,
    language: false
}

export const darkSlice = createSlice({
    name: "darkSlice",
    initialState,
    reducers: {
        getProductCard(state, action) {
            state.productCard = action.payload
        },
        getLanguage(state,{payload}) {
            state.language = payload
        }
    }
})
export const {getProductCard,getLanguage} =darkSlice.actions
export default darkSlice.reducer
