import React from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import ProductCard from "../product-card/Product-card";

const Favorite = () => {
    const {favorite} = useAppSelector(state => state.FavoriteReducer)

    return (
        <div>
            <div className="contaiener">
                <div>
                    {
                        favorite.map(el => (
                            <div>
                                <h1>{el.name_en}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;