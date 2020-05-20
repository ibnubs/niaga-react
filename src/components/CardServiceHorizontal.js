import React, { Fragment } from 'react';
import '../assets/style/Services.css'


class CardServiceHorizontal extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="horizontal-card-body">
                    <div className="horizontal-card-row">
                        <div className="horizontal-card-img">
                            <img className="horizontal-card-img-content" src={this.props.img} />
                        </div>
                        <div className="horizontal-card-content">
                            <h3 className="horizontal-card-content-title"> {this.props.title} </h3>
                            <p className="horizontal-card-content-desc"> {this.props.desc} 
                                <a href="#"> {this.props.other} </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardServiceHorizontal;