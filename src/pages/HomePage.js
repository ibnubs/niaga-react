import React, { Fragment ,Component } from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan"
import PrioritySection from "../components/PrioritySection";

class HomePage extends React.Component {
    render(){
        return(
            <Fragment>
                <Nav />
                <Hero />
                <Layanan />
                <PrioritySection />
            </Fragment>
        )
    }
}

export default HomePage;