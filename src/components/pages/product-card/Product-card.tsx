import React from 'react';
import './style.scss'
import {GiBeerBottle, GiFruitBowl} from "react-icons/gi";
import {TbBread} from "react-icons/tb";
import {BiTestTube} from "react-icons/bi";
import {RiAliensLine} from "react-icons/ri";


const ProductCard = () => {
    return (
        <div>
            <div className="product-card">
                <div className="container">
                    <div className="product-card-content">
                        <div className="product-card-block">
                            <h2>Product list</h2>
                            <div className='product-main'>
                                <div className='product-card-info'>
                                    <GiFruitBowl/>
                                    <p className='product-mail'> Vegetables furies</p>
                                </div>
                                <div className='product-card-info'>
                                    <GiBeerBottle/>
                                    <p className='product-mail'>Juices</p>

                                </div>
                                <div className='product-card-info'>
                                    <TbBread/>
                                    <p className='product-mail'>Grocery</p>
                                </div>
                                <div className='product-card-info'>
                                    <BiTestTube/>
                                    <p className='product-mail'> Cosmetics, hygiene</p>
                                </div>
                                <div className='product-card-info'>
                                    <RiAliensLine/>
                                    <p className='product-mail'> Vegetables furies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
