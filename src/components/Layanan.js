import React, {Fragment, Component } from "react";
import CardLayanan from '../components/CardLayanan';
import "../assets/style/Services.css";



class Layanan extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="container-layanan">
                    <div className="inner-container-layanan">
                        <h3 className="service-title">Layanan Niagahoster</h3> 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Layanan;
