import React from 'react';
import "./ProductList.scss"
import {data} from "../../../fake-backend/backend";
import {BackendState} from "../../../types/Backend";
const ProductList = () => {
    return (
        <>
            <div className={"product-list"}>
                <div className={"container"}>
                {
                    data.map(el => (
                        <div>
                            <h1>{el.name_en}</h1>
                            <img src={el.image} alt="" width={"100px"}/>
                            <p>{el.price}c.</p>
                        </div>
                    ))

                }
                </div>
            </div>
        </>
    );
};

export default ProductList;