import React, { Component, Fragment } from 'react'
import '../assets/style/Hero.css'
import hero from '../assets/images/hero-home-ramadhan.webp'

class Hero extends React.Component {
    render(){
        return(
            <Fragment>
                <div className="container-hero">
                    <div className="inner-container-hero">
                        <div className="col-hero left">
                            <h1 className="hero-title">Unlimited Web Hosting Terbaik di Indonesia</h1>
                            <h2 className="hero-description">Ada banyak peluang bisa Anda raih dari rumah dengan memiliki website. Manfaatkan diskon hosting hingga 75% dan tetap produktif di bulan Ramadhan bersama Niagahoster.</h2>
                            <div className="countdown">
                                <p className="countdown-title">Yuk segera order karena diskon dapat berakhir sewaktu-waktu!</p>
                                <ul className="countdown-counter d-flex list-unstyled">
                                    <li className="countdown-counter-item">
                                        <p className="item-time">00</p>
                                        <p className="item-title mt-n3">Hari</p>
                                    </li>
                                    <li className="countdown-counter-item">
                                        <p className="item-time">00</p>
                                        <p className="item-title mt-n3">Jam</p>
                                    </li>
                                    <li className="countdown-counter-item">
                                        <p className="item-time">00</p>
                                        <p className="item-title mt-n3">Menit</p>
                                    </li>
                                    <li className="countdown-counter-item">
                                        <p className="item-time">00</p>
                                        <p className="item-title mt-n3">Detik</p>
                                    </li>
                                </ul>
                                <a href="" className="btn btn-choose">Pilih Sekarang</a>
                            </div>
                        </div>



                        <div className="col-hero right ">
                            <img className="img-hero" src={hero} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Hero;