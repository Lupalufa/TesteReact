import React from "react";
import Band from "../Band/index"
import style from "./Main.module.css"
import bandas from "../../data/bancoBands"
import { Link } from "react-router-dom"

function Main() {
    return (
        <main className={style.main}>
            {
                bandas.map((banda, index) => (

                    <section>
                        <Link key={banda.id} to={`band/${banda.id}`}>
                            <Band key={index} {...banda} />
                        </Link>
                    </section>

                ))
            }
        </main>
    )
}

export default Main