import React, { Fragment, Component } from 'react'
import "../assets/style/Services.css";

class CardLayanan extends Component{
    render(){
        return(
            <Fragment >
                <ul className="outside-card" key={this.props.id}>
                    <li className="color-text">
                        <a href="#">
                            <img className="img-card" src={this.props.image} />
                            <h5 className="service-title-card">{this.props.title}</h5>
                            <p className="service-desc-card"> {this.props.desc} </p>
                            <p className="service-start-from-card"> {this.props.start} </p>
                            <p className="service-price-card"> {this.props.price} </p>
                        </a>
                    </li>
                </ul>
            </Fragment>
        )
    }
}


export default CardLayanan;
