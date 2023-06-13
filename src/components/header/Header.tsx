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
import logo from "../../assets/image/logos.png"
import kg from "../../assets/image/flagKg.png"
import en from "../../assets/image/flagEn.png"
import ru from "../../assets/image/flagRu.png"
import {uptime} from "os";
import {getModal} from "../../store/reducer/logIn";
const Header = () => {
    const dispatch = useAppDispatch();
    const {productCard, language, upDateLan} = useAppSelector(state => state.dark)
    const {modals} = useAppSelector(s => s.logIn)

    const getProduct = () => {
        dispatch(getProductCard(!productCard))
    }
    const getLanguageBtn = () => {
        dispatch(getLanguage(!language))
    }

    const getModalsBtn = () => {
        dispatch(getModal(!modals))
    }

    return (
        <div id="header">
            <div className="header">
                <NavLink to="/">
                    <div className="header--logo">
                        <img width={80} height={80} src={logo} alt=""/>
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
                    {
                        upDateLan === "" ?
                            <BsGlobe className="header--nav-two__btn" onClick={getLanguageBtn}/>
                            :
                            <p style={{
                                background: `url("${upDateLan === "en" && en || upDateLan === "kg" && kg || upDateLan === "ru" && ru}") no-repeat center/cover`,
                                width: "30px",
                                height: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px"
                            }} onClick={() => dispatch(getLanguage(!language))}>{upDateLan}</p>
                    }
                    <MdFavoriteBorder className="header--nav-two__btn"/>
                    <MdOutlineTextsms className="header--nav-two__btn"/>
                    <BiUserCircle onClick={getModalsBtn} className="header--nav-two__btn"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
