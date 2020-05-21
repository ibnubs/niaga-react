import React, { Fragment } from "react";
import icon from '../assets/images/hosting-super-cepat.svg'

class CardHorizontal extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="" key={this.props.id} >
                    <div className="content-img-priority">
                        <img src={this.props.img} />
                    </div>
                    <div className="content-card-prioirty">
                        <h4 className="title-card-priority">{this.props.title}  </h4>
                        <p className="desc-card-priority">{this.props.desc} </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default CardHorizontal;