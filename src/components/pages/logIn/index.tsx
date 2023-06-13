import React from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import "./logIN.scss"
import user from "../../../assets/image/user.svg"
const LogIn = () => {
    const {modals} = useAppSelector(s => s.logIn)

    return (
        <>

            <div style={{opacity: modals ? "1" : "0"}} className="logIn">
                <div className="logIn--block">
                    <img width={200} src={user} alt=""/>
                    <button>Login</button>
                    <p>Sing up</p>
                </div>
                <button className="logIn--btn">next</button>
            </div>
        </>
    );
};

export default LogIn;