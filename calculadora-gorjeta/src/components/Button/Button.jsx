import React from "react";
import style from "./Button.module.css"

function Button({ text, onClick }) {
    return (
        <>
            <div>
                <button className={style.botao} onClick={onClick}>{text}</button>
            </div>
        </>
    )
}

export default Button