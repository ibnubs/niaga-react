import React, { Fragment ,Component } from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan"
import PrioritySection from "../components/PrioritySection";
import SavingSection from "../components/SavingSection";
import Footer from "../components/Footer";
import Customer from "../components/Customer";

class HomePage extends React.Component {
    render(){
        return(
            <Fragment>
                <Nav />
                <Hero />
                <Layanan />
                <PrioritySection />
                <SavingSection />
                <Customer />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage;