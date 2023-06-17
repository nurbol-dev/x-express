import {createSlice} from "@reduxjs/toolkit";
import {BackendState} from "../../types/Backend";


interface IBasketState {
    basket: BackendState[]
}

const initialState: IBasketState = {
    basket: []
}

export const basketReducer = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        getBasket(state, {payload}) {
            const fount = state.basket.find(el => el.id === payload.id)
            if (fount) {
                state.basket = state.basket.map(el => el.id === fount.id ? {...el, quantity: el.quantity + 1} : el)
            } else {
                state.basket = [...state.basket, {...payload, quantity: 1}]
            }
        },
        getBasketDelete(state, {payload}) {
            state.basket = state.basket.filter(el => el.id !== payload.id)
        },
        getDecBasket(state, {payload}) {
            state.basket = state.basket.map(el => {
                if (el.id === payload.id) {
                    if (el.quantity > 1) {
                        return {...el, quantity: el.quantity - 1}
                    } else return el
                } else return el
            })
        },
    }
})

export const {getBasketDelete,getDecBasket,getBasket} = basketReducer.actions
export default basketReducer.reducer