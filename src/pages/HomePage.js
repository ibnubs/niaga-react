import React, { Fragment ,Component } from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan"
import PrioritySection from "../components/PrioritySection";
import SavingSection from "../components/SavingSection";

class HomePage extends React.Component {
    render(){
        return(
            <Fragment>
                <Nav />
                <Hero />
                <Layanan />
                <PrioritySection />
                <SavingSection />
            </Fragment>
        )
    }
}

export default HomePage;