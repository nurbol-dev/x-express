import {createSlice} from "@reduxjs/toolkit";

interface IDarkSlice {
    dark: boolean,
    productCard: boolean
    juiceCard: boolean
    language: boolean,
    upDateLan: string
}

const data: any = localStorage.getItem("date")

const initialState: IDarkSlice = {
    dark: false,
    productCard: false,
    juiceCard: false
    language: false,
    upDateLan: JSON.parse(data) || ""
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
        getLanguage(state,{payload}) {
            state.language = payload
        },
        getUpdateLan(state, {payload}) {
            state.upDateLan = payload
        }
    }
})
export const {getProductCard,getLanguage,getUpdateLan} =darkSlice.actions
export default darkSlice.reducer
