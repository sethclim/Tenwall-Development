import React, { useState } from "react";
import Styles from "./whatwedo.module.scss";
import phone from "../../../../public/assets/IMG/phone.jpg"
import branding from "../../../../public/assets/IMG/branding.jpg"
import web from "../../../../public/assets/IMG/web.jpg"

export default function WhatWeDo(props) {
    return (
        <div className={Styles.WhatWeDo}>
            <div className={Styles.right}>
                <h3>We provide Web app development</h3>
                <p>{props.name} produces custom web solutions.  
                We specialize in modern up to date approachs in development.  
                Bringing you fast and reposonive sites.    </p>  
            </div>
            <div className={Styles.left}>
                <div className={Styles.cardWrap}>
                    <Card title={"Websites"} content={"What we do"}  background={web}/>
                    <Card title={"Apps"} content={"What we do"} background={phone}/>
                    <Card title={"Branding"} content={"What we do"}  background={branding}/>
                </div>
            
            </div>
            
        </div>
    );  
}

const Card =  ({title, content, background}) =>{
    return(
        <div className={Styles.card}>
            <img src={background} />
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        
        </div>  
    )
}