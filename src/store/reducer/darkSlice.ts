import {createSlice} from "@reduxjs/toolkit";

interface IDarkSlice {
    dark: boolean,
    productCard: boolean
}

const initialState: IDarkSlice = {
    dark: false,
    productCard: false
}

export const darkSlice = createSlice({
    name: "darkSlice",
    initialState,
    reducers: {
        getProductCard(state, action) {
            state.productCard = action.payload
        }
    }
})
export const {getProductCard} =darkSlice.actions
export default darkSlice.reducer
