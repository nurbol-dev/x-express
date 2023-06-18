import React from 'react';
import './Product-modal.scss'
import {useAppSelector} from "../../../hooks/useAppSelector";

const ProductModal = () => {
    const {detail} = useAppSelector(state => state.dark)
    console.log("Detail", detail)
    return (
        <>
            {
                detail.id &&
                <div className='blur-modal'>
                    <div className='product-modal'>
                        <div className="container">
                            <div className="product-modal-content">
                                <div className="product-modal-content-date">
                                    <div className="product-modal-content-date-img">
                                        <img src={detail.image}  alt=""/>
                                    </div>
                                    <div className="product-modal-content-date-info">
                                        <div className="product-modal-content-date-info-card">
                                            <p>Name:</p>
                                            <p>Capasity:</p>
                                            <p>Price:</p>
                                        </div>
                                        <div className="product-modal-content-date-info-card">
                                            <p>{detail.name_en}</p>
                                            <p>1.5 L</p>
                                            <p>{detail.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-modal-content-price">
                                    <h2>{detail.name_en}</h2>
                                    <p className='price-modal'>{detail.price}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    );
};

export default ProductModal;
