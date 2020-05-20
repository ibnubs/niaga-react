import React, { Fragment ,Component } from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan"

class HomePage extends React.Component {
    render(){
        return(
            <Fragment>
                <Nav />
                <Hero />
                <Layanan />
            </Fragment>
        )
    }
}

export default HomePage;