import React, { Fragment } from "react";
import "../assets/style/Main.css"
import "../assets/style/Saving.css"
import "../assets/style/Priority.css"
import CardHorizontal from "./CardHorizontal";

class SavingSection extends React.Component{
    render(){
        const savings =[
            {
                id:1,
                imgSaving: require ("../assets/images/icons-domain-harga-murah.svg"),
                titleSaving: "Harga Murah, Fitur Lengkap",
                descSaving: "Anda bisa berhemat dan tetap mendapatkan hosting terbaik dengan fitur lengkap, dari auto install WordPress, cPanel lengkap, hingga SSL gratis",
            },
            {
                id:2,
                imgSaving: require("../assets/images/icons-website-selalu-online.svg"),
                titleSaving: "Website Selalu Online",
                descSaving: "Jaminan server uptime 99,98% memungkinkan website Anda selalu online sehingga Anda tidak perlu khawatir kehilangan trafik dan pendapatan.",
            },
            {
                id:3,
                imgSaving: require("../assets/images/icons-domain-support-andal.svg"),
                titleSaving:"Tim Support Andal dan Cepat Tanggap",
                descSaving: "Tidak perlu menunggu lama, selesaikan masalah Anda dengan cepat secara real time melalui live chat 24/7",
            },

        ]
        
        return(
            <Fragment>
                <section className="Saving-container">
                    <div className="Title-row">
                        <h3 className="Title-section">Biaya Hemat, Kualitas Hebat</h3>
                    </div>
                    <div className="Priority-content-row">
                        <div className="Priority-content-left">
                            <img className="saving-img1" src={require("../assets/images/titis.webp")} alt="" />
                            <img className="saving-img2" src={require("../assets/images/man.webp")} alt="" />
                            <img className="saving-img3" src={require("../assets/images/woman1.webp")} alt="" />
                            <img className="saving-img4" src={require("../assets/images/woman2.webp")} alt="" />
                            <img className="saving-img5" src={require("../assets/images/intercom-logo.svg")} alt="" />
                            <img className="saving-img6" src={require("../assets/images/icon-online.svg")} alt="" />
                        </div>
                        <div className="Priority-content-right">
                            {savings.map((savingItem)=>{
                                return(
                                    <CardHorizontal 
                                        id={savingItem.id}
                                        img={savingItem.imgSaving}
                                        title={savingItem.titleSaving}
                                        desc={savingItem.descSaving}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </Fragment>    
        )
    }

}

export default SavingSection;