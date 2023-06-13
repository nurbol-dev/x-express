import React, {useState} from 'react';
import "./Header.scss"
import "./Media/HeaderMedia.scss"
import {BsBoxSeam, BsGlobe} from "react-icons/bs";
import {CgDarkMode} from "react-icons/cg";
import {SlBasket} from "react-icons/sl";
import {MdFavoriteBorder, MdOutlineTextsms} from "react-icons/md";
import {BiUserCircle} from "react-icons/bi";
import {NavLink, useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import pointerDown = Simulate.pointerDown;
import ProductCard from "../pages/product-card/Product-card";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {getLanguage, getProductCard} from "../../store/reducer/darkSlice";
import logo from "../../assets/image/logo.png"

const Header = () => {
    const dispatch = useAppDispatch();
    const {productCard,language} = useAppSelector(state => state.dark)

    const getProduct = () => {
        dispatch(getProductCard(!productCard))
    }
    const getLanguageBtn = () => {
        dispatch(getLanguage(!language))
    }

    return (
        <div id="header">
            <div className="header">
                <NavLink to="/">
                    <div className="header--logo">
                        <img width={50} height={50} src={logo} alt=""/>
                    </div>
                </NavLink>
                <div className="header--nav">
                    <div onClick={() => {
                        getProduct()
                    }}><BsBoxSeam className="header--nav__btn"/></div>
                    <CgDarkMode className="header--nav__btn"/>
                    <SlBasket className="header--nav__btn"/>
                </div>
                <div className="header--nav-two">
                    <BsGlobe className="header--nav-two__btn" onClick={getLanguageBtn}/>
                    <MdFavoriteBorder className="header--nav-two__btn"/>
                    <MdOutlineTextsms className="header--nav-two__btn"/>
                    <BiUserCircle className="header--nav-two__btn"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
