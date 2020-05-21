import React, { Fragment } from 'react';
import "../assets/style/Main.css"
import "../assets/style/Priority.css"
import CardHorizontal from "./CardHorizontal";
import Button from "./Button";


class PrioritySection extends React.Component{
    render(){

        const prioritys = [
            {
                id:1,
                imgPriority: require ('../assets/images/hosting-super-cepat.svg') ,
                titlePriority: "Hosting Super Cepat",
                descPriority: "Pengunjung tidak suka website lambat. Dengan dukungan LiteSpeed Web Server, waktu loading website Anda akan meningkat pesat.",
            },
            {
                id:2,
                imgPriority:require('../assets/images/domain-keamanan-ekstra.svg'),
                titlePriority:"Keamanan Website Ekstra",
                descPriority:"Teknologi keamanan Imunify 360 memungkinkan website Anda terlindung dari serangan hacker, malware, dan virus berbahaya setiap saat.",
            }
        ]
        
        return(
            <Fragment>
                <section className="Priority-container">
                    <div className="Title-row">   
                        <h3 className="Title-section">Prioritas Kecepatan dan Keamanan</h3>
                    </div>
                    <div className="Priority-content-row">
                        <div className="Priority-content-left">
                            {
                                prioritys.map((priorityItem)=>{
                                    return(
                                        <CardHorizontal 
                                            id={priorityItem.id}
                                            img={priorityItem.imgPriority}
                                            title={priorityItem.titlePriority}
                                            desc={priorityItem.descPriority}
                                        />
                                    )
                                })
                            }
                            <div className="btn-priority">
                                <Button 
                                    label="LIHAT SELENGKAPNYA"                                
                                />
                            </div>
                        </div>
                        <div className="Priority-content-right">
                            <img  class="img-fluid img-server" src= {require('../assets/images/server.webp')} alt="" />
                            <img  class="img-fluid img-graphic" src={require("../assets/images/graphic.svg")} alt=""/>
                            <img  class="img-imufiy" src={require("../assets/images/imunify.svg")} alt=""/>
                            <img  class="img-litespeed" src={require("../assets/images/lite-speed.svg")} alt=""/>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default PrioritySection;