import React from "react";
import {useState, useRef } from "react"
import axios from "axios"
import WeatherInformations from "../../components/WeatherInformations/WeatherInformations"

function Home(){
    const inputRef = useRef()
    const [weather, setWeather] = useState()

    async function searchCity(){
        // console.log(inputRef.current.value)
        const city = inputRef.current.value
        const key = "3d07319392a8ab4c06f1763246a9fd9d"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
        const apiInfo = await axios.get(url)
        setWeather(apiInfo.data)
        console.log(apiInfo.data)

    }

    return (
        <div>

                <h1>Componente Home</h1>
                <input ref={inputRef} type="text" placeholder="Digite a cidade"/>
                <button onClick={searchCity}>Buscar</button>
                {weather && <WeatherInformations weather={weather}/> }
        </div>
    )
}

export default Home