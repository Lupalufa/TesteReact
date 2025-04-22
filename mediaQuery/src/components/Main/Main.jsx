import React from "react";
import Intro from "../Intro/Intro";
import Tipos from "../Tipos/Tipos"
import Noticias from "../Noticias/Noticias"
import Frameworks from "../Frameworks/Frameworks"
import Recursos from "../Recursos/Recursos";
import style from "./Main.module.css"

function Main(){
    return(
        <main>
            <Intro />
            <Tipos />
            <Noticias />
            <Frameworks />
            <Recursos />
        </main>
    )
}

export default Main