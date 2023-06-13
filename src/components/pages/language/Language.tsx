import React from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import "./Language.scss"
import "./media/LanguageMedia.scss"
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getLanguage, getUpdateLan} from "../../../store/reducer/darkSlice";
import kg from "../../../assets/image/flagKg.png"
import en from "../../../assets/image/flagEn.png"
import ru from "../../../assets/image/flagRu.png"
const Language = () => {
    const {language, productCard,upDateLan} = useAppSelector(s => s.dark)
    const dispatch = useAppDispatch()
    const handleBtn = (e: any) => {
        const data: any = localStorage.getItem("date")
        let UpDate = JSON.parse(data) || ""
        UpDate = e.target.innerText
        localStorage.setItem("data", UpDate)
        dispatch(getUpdateLan(e.target.innerText))
        dispatch(getLanguage(!language))
    }


    return (
        <>
            <div className="language">
                {
                    productCard ? "" :
                        language &&
                        <div className="language--group" onClick={handleBtn}>
                            <button style={{
                                background: `url("${kg}") no-repeat center/cover`
                            }} className="language--group__kg">kg</button>
                            <button
                                style={{
                                    background: `url("${ru}") no-repeat center/cover`
                                }} className="language--group__ru">ru</button>
                            <button style={{
                                background: `url("${en}") no-repeat center/cover`
                            }} className="language--group__en"><span className="language--group__en--block"></span><p>en</p></button>
                        </div>
                }
            </div>
        </>
    );
};

export default Language;