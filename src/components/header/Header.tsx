import React, {useState} from 'react';
import "./Header.scss"
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
import {getProductCard} from "../../store/reducer/darkSlice";


const Header = () => {
    const [comp, setComp] = useState(false)
    const dispatch = useAppDispatch();
    const {productCard} = useAppSelector(state => state.dark)

    const getProduct = () => {
            dispatch(getProductCard(!productCard))
    }
    console.log(productCard)
    return (
        <div id="header">
            <div className="header">
               <NavLink to="/">
                   <div className="header--logo">
                       logo
                   </div>
               </NavLink>
                <div className="header--nav">
                  <div  onClick={() => {getProduct()}}> <BsBoxSeam className="header--nav__btn"/></div>
                    <CgDarkMode className="header--nav__btn"/>
                    <SlBasket className="header--nav__btn"/>
                </div>
                <div className="header--nav-two">
                    <BsGlobe className="header--nav-two__btn"/>
                    <MdFavoriteBorder className="header--nav-two__btn"/>
                    <MdOutlineTextsms className="header--nav-two__btn"/>
                    <BiUserCircle className="header--nav-two__btn"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
