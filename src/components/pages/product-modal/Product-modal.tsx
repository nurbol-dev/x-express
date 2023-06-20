import React from 'react';
import './Product-modal.scss'
import {useAppSelector} from "../../../hooks/useAppSelector";
import {AiOutlineClose} from "react-icons/ai";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getDeleteCard} from "../../../store/reducer/darkSlice";
import {MdFavoriteBorder} from "react-icons/md";
import {getFavorite} from "../../../store/reducer/favoriteSlice";

const ProductModal = () => {
    const {detail} = useAppSelector(state => state.dark)
    const dispatch = useAppDispatch()

    const delProductCard = () => {
        dispatch(getDeleteCard(detail))
    }



    return (
        <>
            {
                detail.id &&
                <div className='blur-modal'>
                    <div className='product-modal'>
                        <div className="container">
                            <div className="product-modal-content">
                                <div onClick={delProductCard}><AiOutlineClose className="product-modal-content-icons"/></div>
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
                                            <p>{detail.price} c</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-modal-content-price">
                                    <h2>{detail.name_en}</h2>
                                    <p className='price-modal'>{detail.price}</p>
                                </div>
                                <div className="product-modal-content-count">
                                    <button>+</button>
                                    <p>{detail.quantity}</p>
                                    <button>-</button>
                                </div>
                                <div className="product-modal-content-favorite">
                                    <MdFavoriteBorder onClick={() => dispatch(getFavorite(detail))} className='product-modal-content-favorite-icon'/>
                                    <button>Buy</button>
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
