import {createSlice} from "@reduxjs/toolkit";

interface IDarkSlice {
    dark: boolean,
    productCard: boolean
    juiceCard: boolean
}

const initialState: IDarkSlice = {
    dark: false,
    productCard: false,
    juiceCard: false
}

export const darkSlice = createSlice({
    name: "darkSlice",
    initialState,
    reducers: {
        getProductCard(state, action) {
            state.productCard = action.payload
        },
        getJuiceCard(state, action) {
            state.juiceCard = action.payload
        }
    }
})
export const {getProductCard, getJuiceCard} =darkSlice.actions
export default darkSlice.reducer
