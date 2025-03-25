import React from "react";
import style from "./InputField.module.css"


function InputField({label, value, onChange}){
    return(
        <>
            <div className={style.input}>
                <label>{label}</label>
                <input className={style.inputs} type="number" value={value} onChange={onChange}/>
            </div>
        </>
    )
}

export default InputField