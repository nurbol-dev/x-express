import {createSlice} from "@reduxjs/toolkit";
import {BackendState} from "../../types/Backend";

interface IFavoriteState {
    favorite: BackendState[]
}

const initialState: IFavoriteState = {
    favorite: []
}

export const FavoriteReducer = createSlice({
    name: "FAVORITE",
    initialState,
    reducers: {
        getFavorite(state,{payload}) {
            const fount = state.favorite.find(el => el.id === payload.id)
            if (fount) {
                state.favorite = state.favorite.filter(el => el.id !== payload.id)
            } else {
                state.favorite = [...state.favorite , {...payload}]
            }
        }
    }
})

export const {getFavorite} = FavoriteReducer.actions
export default FavoriteReducer.reducer