import React, { Fragment } from 'react';
import "../assets/style/Customer.css";
import "../assets/style/Main.css"
import ListCustomer from './ListCustomer';

class Customer extends React.Component{
    render(){

        const customers = [
            {
                id:1,
                video: "https://www.youtube.com/embed/m7Friw3UJAQ",
                img: "https://www.niagahoster.co.id/assets/images/2019/client-testimony/devjavu.png",
                icon: require("../assets/images/icon-play.svg"),
                desc:"Website itu sangat penting bagi UMKM sebagai sarana promosi untuk memenangkan persaingan di era digital.",
                name:"Didik & Johan - ",
                titleOwner:"Owner Devjavu"
            },
            {
                id:2,
                video: "https://www.youtube.com/embed/m7Friw3UJAQ",
                img: require("../assets/images/optimizer.webp"),
                icon: require("../assets/images/icon-play.svg"),
                desc:"Bagi saya Niagahoster bukan sekadar penyedia hosting, melainkan partner bisnis yang bisa dipercaya.",
                name:"Bob Setyo - ",
                titleOwner:"Owner Digital Optimizer Indonesia" 
            },
            {
                id:3,
                video: "https://www.youtube.com/embed/m7Friw3UJAQ",
                img: require("../assets/images/sateratu.webp"),
                icon: require("../assets/images/icon-play.svg"),
                desc:"Solusi yang diberikan tim support Niagahoster sangat mudah dimengerti buat saya yang tidak paham teknis.",
                name:"Budi Johan - ",
                titleOwner:"Owner Sate Ratu"
            }
        ]





        return(
            <Fragment>
                <section className="Customer-container">
                    <div className="Inner-customer-container">
                        <h3 className="Title-section Text-left Title">Kata Pelanggan Tentang Niaga Hoster</h3>
                        <ul className="Ul-style">
                            {customers.map((customerItem)=>{
                                return(
                                    <ListCustomer 
                                        id={customerItem.id}
                                        video={customerItem.video}
                                        img={customerItem.img}
                                        icon={customerItem.icon}
                                        desc={customerItem.desc}
                                        name={customerItem.name}
                                        titleOwner={customerItem.titleOwner}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </Fragment>
        )
    }
}


export default Customer;