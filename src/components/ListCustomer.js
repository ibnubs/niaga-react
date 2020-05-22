import React, { Fragment } from 'react';
import "../assets/style/Customer.css";


class ListCustomer extends React.Component{
    render(){
        return(
            <Fragment>
                <li key={this.props.id}>
                    <a href= {this.props.video} target="_blank" />
                    <img className="" src= {this.props.img} alt="" />
                    <div className="icon-play ">
                        <img className="icon-custom"  src= {this.props.icon}  />
                    </div>
                    <div class=" des-testi">
                        <p className="Text-left"> {this.props.desc} </p>
                        <p class="font-weight-bold Text-left"> {this.props.name} <span> {this.props.titleOwner} </span> </p>
                    </div>
                </li>
            </Fragment>
        )
    }
}


export default ListCustomer;