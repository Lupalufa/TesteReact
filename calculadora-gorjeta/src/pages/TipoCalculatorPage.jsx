import React from "react"
import { useState } from "react"
import Button from "../components/Button/Button"
import InputField from "../components/InputField/InputField"
import ResultDisplay from "../components/ResultDisplay/ResultDisplay"
import style from "./TipoCalculatorPage.module.css"


function TipoCalculatorPage() {
    const [valorConta, setValorConta] = useState("")
    const [percentualGorjeta, setPercentualGorjeta] = useState("")
    const [resultado, setResultado] = useState("")

    const calcularGorjeta = () => {
        const valor = parseInt(valorConta)
        const valorGorjeta = (valor * parseFloat(percentualGorjeta)) / 100
        const total = valor + valorGorjeta;
        setResultado({ gorjeta: valorGorjeta, total: total })
    }

    return (
        <>
            <div className={style.tipoCalculador}>
                <h1>Calculadora de Gorjeta</h1>
                <InputField
                    label="Valor da conta:"
                    value={valorConta}
                    onChange={(e) => setValorConta(e.target.value)}
                />
                <InputField
                    label="Porcentagem da Gorjeta (%)"
                    value={percentualGorjeta}
                    onChange={(e) => setPercentualGorjeta(e.target.value)}
                />
                <Button
                    text="calcular" onClick={calcularGorjeta}
                />
                {
                    resultado && (
                        <ResultDisplay gorjeta={resultado.gorjeta} total={resultado.total} />
                    )
                }
            </div>
        </>
    )
}

export default TipoCalculatorPage