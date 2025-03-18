import React from "react";
import { useParams } from "react-router-dom"
import bandas from "../../data/bancoBands"
import Band from "../../components/Band/index"
import style from "./BandDetalhes.module.css"



function BandDetalhes() {
    const { id } = useParams()
    const banda = bandas.find((b) => b.id === parseInt(id));
    if (!banda) return (<h2> Banda não encontrada. </h2>)
    return (
        <>
            <div className={style.cards}>
                <div>
                    <Band {...banda} />
                </div>
            </div>
        </>
    )
}

export default BandDetalhes;