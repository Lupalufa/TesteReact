import React, { useState } from "react";
import style from "./Band.module.css"

function Band({imagem, nome, descricao,}) {
        
    return (
       <>
        <div className={style.band}>
                
                    <img src={imagem} alt="Banda 1" />
                    <div className={style.band_info}>
                        <h2>{nome}</h2>
                        <p>{descricao}</p>
                    </div>
               

            {/* <section>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2" />
                    <div class="band-info">
                        <h2>Banda 2</h2>
                        <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2" />
                    <div class="band-info">
                        <h2>Banda 3</h2>
                        <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2" />
                    <div class="band-info">
                        <h2>Banda 4</h2>
                        <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section> */}
        </div>
        
        </>
    )
}

export default Band