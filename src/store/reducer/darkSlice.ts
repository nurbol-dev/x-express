import {createSlice} from "@reduxjs/toolkit";

interface IDarkSlice {
    dark: boolean,
    productCard: boolean
    juiceCard: boolean
    language: boolean,
    upDateLan: string,
    detail: Partial<any>
}

const data: any = localStorage.getItem("date")

const initialState: IDarkSlice = {
    dark: false,
    productCard: false,
    juiceCard: false,
    language: false,
    upDateLan: JSON.parse(data) || "",
    detail: {}
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
        },
        getLanguage(state,{payload}) {
            state.language = payload
        },
        getUpdateLan(state, {payload}) {
            state.upDateLan = payload
        },
        getDetailCard(state, action){
            state.detail = action.payload
        },
        darkMode(state, {payload}) {
            state.dark = !payload
        }
    }
})
export const {darkMode,getProductCard,getLanguage,getUpdateLan, getJuiceCard,getDetailCard} =darkSlice.actions
export default darkSlice.reducer
