import React from'react';
import '../assets/style/Nav.css'

class Nav extends React.Component{
    render(){
        return(
            <div className='navbar-container'>
                <div className='navbar-logo'>LOGO</div>
                <div className='navbar-menu'>
                    <ul>
                        <li>UNLIMITED HOSTING</li>
                        <li>CLOUD HOSTING</li>
                        <li>CLOUD VPS</li>
                        <li>DOMAIN</li>
                        <li>AFILIASI</li>
                        <li>BLOG</li>
                        <a href='#'>LOGIN</a>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;