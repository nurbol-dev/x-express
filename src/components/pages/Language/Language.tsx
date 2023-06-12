import React from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import "./Language.scss"

const Language = () => {
    const {language, productCard} = useAppSelector(s => s.dark)
    return (
        <>
            <div className="language">
                {
                    productCard ? "" :
                        language &&
                        <div className="language--group">
                            <button className="language--group__kg">kg</button>
                            <button className="language--group__ru">ru</button>
                            <button className="language--group__en"><span className="language--group__en--block"></span><p>en</p></button>
                        </div>
                }
            </div>
        </>
    );
};

export default Language;