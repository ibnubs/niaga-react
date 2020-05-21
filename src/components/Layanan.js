import React, {Fragment, Component } from "react";
import CardLayanan from '../components/CardLayanan';
import "../assets/style/Services.css";
import CardServiceHorizontal from "./CardServiceHorizontal";

class Layanan extends React.Component {
    render(){

    const services =[
            {
                id:1,
                image: require ('../assets/images/icons-shared-hosting.svg'),
                title: "Unlimited Hosting", 
                desc:  "Cocok untuk website skala kecil dan menengah",
                start: "Mulai Dari",
                price: "Rp. 10.000,-"
            },
            {
                id:2,
                image: require ('../assets/images/icons-cloud-hosting.svg'),
                title: "Cloud Hosting", 
                desc:   "Dedicated resource dengan akses root dan konfigurasi mandiri",
                start: "Mulai Dari",
                price: "Rp. 10.000,-"
            },
            {
                id:3,
                image: require ('../assets/images/icons-cloud-vps.svg'),
                title: "Cloud VPS", 
                desc:  "Dedicated resource dengan akses root dan konfigurasi mandiri",
                start: "Mulai Dari",
                price: "Rp. 104.000,-"
            },
            {
                id:4,
                image: require ('../assets/images/icons-domain.svg'),
                title: "Domain", 
                desc:   "Temukan nama domain yang Anda inginkan",
                start: "Mulai Dari",
                price: "Rp. 14.000,-"
            }
        ];
    
    const websiteCreate = [
        {
            id:1,
            img: require ('../assets/images/home-pembuatan-website.svg'),
            title: "Pembuatan Website",
            desc: "500 perusahaan lebih percayakan pembuatan websitenya pada kami.",
            other: "Cek selengkapnya..."
        }
    ]



        return(
            <Fragment>
                <div className="container-layanan">
                    <div className="inner-container-layanan">
                        <h3 className="service-title">Layanan Niagahoster</h3>
                        {services.map ((serviceItem) => {
                            return(
                                <CardLayanan 
                                    id={serviceItem.id}
                                    image={serviceItem.image}
                                    title={serviceItem.title}
                                    desc={serviceItem.desc}
                                    start={serviceItem.start}
                                    price={serviceItem.price}
                                />
                            )
                        })}
                        {websiteCreate.map ((webCreateItem) => {
                            return(
                                <CardServiceHorizontal 
                                    img={webCreateItem.img}
                                    title={webCreateItem.title}
                                    desc={webCreateItem.desc}
                                    other={webCreateItem.other}
                                />
                            )
                        })} 
                    </div>
                </div> 
            </Fragment>
        )
    }
}

export default Layanan;