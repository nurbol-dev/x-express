import React, {useState} from 'react';
import './Product-card.scss'
import {GiBeerBottle, GiFruitBowl} from "react-icons/gi";
import {TbBread} from "react-icons/tb";
import {BiTestTube} from "react-icons/bi";
import {RiAliensLine} from "react-icons/ri";
import {useAppSelector} from "../../../hooks/useAppSelector";


const ProductCard = () => {
    const {productCard} = useAppSelector(state => state.dark)
    return (
        <>
            {
                productCard ?

                    <div className="product-card">
                        <div className="container">
                            <div className="product-card-content">
                                <div className="product-card-block">
                                    <h2 className='product-title'>Product list</h2>
                                    <div className='product-main'>
                                        <div className='product-card-info'>
                                            <GiFruitBowl className='product-icon'/>
                                            <p className='product-mail'> Vegetables furies</p>
                                        </div>
                                        <div className='product-card-info' >
                                            <GiBeerBottle className='product-icon'/>
                                            <p className='product-mail'>Juices</p>
                                        </div>
                                        <div className='product-card-info'>
                                            <TbBread className='product-icon'/>
                                            <p className='product-mail'>Grocery</p>
                                        </div>
                                        <div className='product-card-info'>
                                            <BiTestTube className='product-icon'/>
                                            <p className='product-mail'> Cosmetics, hygiene</p>
                                        </div>
                                        <div className='product-card-info'>
                                            <RiAliensLine className='product-icon'/>
                                            <p className='product-mail'> Vegetables furies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }

        </>
    );
};

export default ProductCard;
