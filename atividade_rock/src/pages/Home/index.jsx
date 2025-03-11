import React from "react";
import Aside from "../../components/Aside/index"
import Footer from "../../components/Footer/index"
import Header from "../../components/Header/index"
import Main from "../../components/Main/index"


function Home() {
    return (
        <>
            <Header />,
            <Main />
            <Aside />
            <Footer />
        </>
    )
}

export default Home