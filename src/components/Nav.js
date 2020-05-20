import React from'react';
import '../assets/style/Nav.css'
import logo from '../assets/images/nh-logo.svg'
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <header className='navbar-container'>
                <div class="container">
                    <div className="upper-nav">
                        <ul className="mb-0">
                            <li >
                                <a href="#" ><i  className="material-icons icn-nav">phone_enabled</i>0274-2885822</a>
                            </li>
                            <li>
                                <a href="#" ><i  className="material-icons icn-nav">chat_bubble_outline</i> Live Chat</a>
                            </li>
                            <li>
                                <a href="#" ><i  className="material-icons icn-nav">shopping_cart</i></a>
                            </li>
                        </ul>
                    </div>
                    <nav>
                        <div className='navbar-logo'>
                            <Link to="/">
                                <img className="img-logo" src={logo} alt='logo' />
                            </Link>
                        </div>
                        <div className='navbar-menu'>
                            <ul>
                                <li>
                                    <Link className="nav-menu" to="/unlimited-hosting">UNLIMITED HOSTING</Link>
                                </li>
                                <li>
                                    <Link className="nav-menu" to="/cloud-hosting">CLOUD HOSTING</Link> 
                                </li>
                                <li>
                                    <Link className="nav-menu" to="/cloud-vps">CLOUD VPS</Link>
                                </li>
                                <li>
                                    <Link className="nav-menu" to="/domain">DOMAIN</Link>
                                </li>
                                <li>
                                    <Link className="nav-menu" to="/afiliasi">AFILIASI</Link>
                                </li>
                                <li>
                                    <Link className="nav-menu" to="/blog">BLOG</Link>
                                </li>
                                <li>
                                    <Link className="nav-menu" to="/login">LOGIN</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Nav;