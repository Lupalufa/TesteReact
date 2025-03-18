import React from "react"
import Home from "./pages/Home/index"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BandDetalhes from "./pages/BandDetalhes/BandDetalhes"

function App(){
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/band/:id" element={<BandDetalhes />} />
          </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default App