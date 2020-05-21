import React, { Fragment } from 'react';
import '../assets/style/Hero.css'


// class Button extends React.Component{
//     render(){
//         return(
//             <Fragment>
//                 <a href="" className="btn btn-choose">{this.props.button}</a>
//             </Fragment>
//         )
//     }
// }

function Button(props){
    return(
        <Fragment>
            <a href="" className="btn btn-choose">{props.label}</a>
        </Fragment>
    )
}


export default Button;