import React, {useState} from 'react';
import "./Header.scss"
import {BsBoxSeam, BsGlobe} from "react-icons/bs";
import {CgDarkMode} from "react-icons/cg";
import {SlBasket} from "react-icons/sl";
import {MdFavoriteBorder, MdOutlineTextsms} from "react-icons/md";
import {BiUserCircle} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import pointerDown = Simulate.pointerDown;


const Header = () => {
    return (
        <div id="header">
            <div className="header">
                <div className="header--logo">
                    logo
                </div>
                <div className="header--nav">
                    <BsBoxSeam className="header--nav__btn"/>
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
