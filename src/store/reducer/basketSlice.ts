import {createSlice} from "@reduxjs/toolkit";
import {BackendState} from "../../types/Backend";


interface IBasketState {
    basket: BackendState[]
}

const initialState: IBasketState = {
    basket: []
}

export const basketSlice = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        getBasket(state,{payload}) {
            state.basket = payload
        }
    }
})

export const {} = basketSlice.actions
export default basketSlice