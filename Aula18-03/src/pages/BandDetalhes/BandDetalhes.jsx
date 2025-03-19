import React, { useState } from "react";
import { useParams } from "react-router-dom"
import bandas from "../../data/bancoBands"
import Band from "../../components/Band/index"
import style from "./BandDetalhes.module.css"
import { Link } from "react-router-dom"
import Header from "../../components/Header/index"
import Aside from "../../components/Aside/index"
import Footer, { FooterFixado } from "../../components/Footer/index"




function BandDetalhes() {
    const [like, setLike] = useState(0)
    const { id } = useParams()
    const banda = bandas.find((b) => b.id === parseInt(id));
    if (!banda) {
        return (
            <>
                <Header />
                <h2> Nenhuma Banda foi encontrada</h2>
                <Aside />
                <FooterFixado />
            </>
        )
    }
    return (
        <>
            <Header />
            <div className={style.mainDetalhes}>
                <div className={style.cards}>
                    <div>
                        <Band {...banda} />
                        <div className={style.divisao}>
                            <Link to={`/`}>
                                <button>
                                    Voltar
                                </button>
                            </Link>
                            <p>Curtidas: {like}</p>
                        </div>
                        <button onClick={() => setLike(like + 1)} className={style.button}>
                            👍
                        </button>
                    </div>
                </div>
            </div>
            <Aside />
            <FooterFixado />
        </>
    )
}

export default BandDetalhes;


// <p>{curiosidade}</p>
// <button onClick=({() => setCuriosidade(band.curiosidade)}) Curiosidade </button>
// const [curiosidade, setCuriosidade] = useState('');