import React from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import "./logIN.scss"
import user from "../../../assets/image/user.svg"
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getModal} from "../../../store/reducer/logIn";

const LogIn = () => {
    const {modals} = useAppSelector(s => s.logIn)
    const dispatch = useAppDispatch()

    return (
        <>
            <div style={{display: modals ? "block" : "none"}} className="logIn">
                <button style={{
                    background: "transparent",
                    border: "none",
                    color: "red",
                    fontSize: "20px",
                    position: "absolute",
                    right: "10%"
                }} onClick={() => dispatch(getModal(!modals))}>+
                </button>
                <div className="logIn--block">
                    <img width={200} src={user} alt=""/>
                    <input type="text" placeholder="Login"/>
                    <p>Sing up</p>
                </div>
                <button className="logIn--btn">next</button>
            </div>
        </>
    );
};

export default LogIn;