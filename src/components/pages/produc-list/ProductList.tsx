import React from 'react';
import "./ProductList.scss"
import {data} from "../../../fake-backend/backend";
import {MdFavoriteBorder} from "react-icons/md";

const ProductList = () => {
    return (
        <>
            <div className="product-list">

                <div className="container">
                    <div className="search-block">
                        <input className='search-block-list' type="text" placeholder='search'/>
                    </div>
                    <div className='product-block'>
                        {
                            data.map(el => (
                                <div className='product-list-content'>
                                    <div className="product-list-content-desc">
                                        <div className='product-list-content-desc-image'>
                                            <img src={el.image} alt="" />
                                        </div>
                                        <div className="product-list-content-desc-info">
                                            <h1>{el.name_en} 1 L</h1>
                                        </div>
                                        <div className="product-list-content-desc-card">
                                            <MdFavoriteBorder className='icon-card'/>
                                            <p>{el.price}c.</p>
                                        </div>
                                    </div>


                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
