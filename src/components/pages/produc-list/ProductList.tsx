import React, {useEffect, useState} from 'react';
import "./ProductList.scss"
import {data} from "../../../fake-backend/backend";
import {MdFavoriteBorder} from "react-icons/md";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getValue} from "../../../store/reducer/test";

const ProductList = () => {
    const {productCard} = useAppSelector(state => state.dark)
    const {value} = useAppSelector(s => s.test)
    const dispatch = useAppDispatch()
    const setValue = (e: any) => dispatch(getValue(e))


    return (
        <>
            <div className="product-list">
                <div className="container">
                    <div className="search-block">
                        <input className='search-block-list' type="text" placeholder='search'/>
                        <select onChange={(e) => setValue(e.target.value)} className="search-block-selects">
                            <option value="Hot" className="search-block-selects-options">Juice</option>
                            <option value="Juice">Hot</option>
                            <option value="">all</option>
                        </select>
                    </div>

                    <div className="hidden"></div>

                    <div className='product-block'>
                        {
                            data.map(el => (
                                <>
                                    {
                                        value !== el.category ?
                                            <div className='product-list-content'>
                                                <div className="product-list-content-desc">
                                                    <div className='product-list-content-desc-image'>
                                                        <img src={el.image} alt=""/>
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
                                            :
                                            null
                                    }

                                </>
                            ))

                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
