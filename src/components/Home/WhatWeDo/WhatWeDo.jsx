import React, { useState } from "react";
import Styles from "./whatwedo.module.scss";


export default function WhatWeDo(props) {


    const [active, setActive]= useState(null);

    const handleMouseOver = (value) =>{
        console.log("Over " + value)
        setActive(value)
    }



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

                    <Card active={active} no={1} content={{data:["React", "Node", ".Net"]}} title={"Websites"} handleMouseOver={handleMouseOver} />
                    <Card active={active} no={2} content={{data:["Android", "iOS", "React Native", "Flutter"]}} handleMouseOver={handleMouseOver} title={"Apps"}  />
                    <Card active={active} no={3} content={{data:["Figma", "bye"]}} handleMouseOver={handleMouseOver} title={"Branding"}  />
                </div>
            
            </div>
            
        </div>
    );  
}

const Card =  ({title, no, content, background, active, handleMouseOver}) =>{
    return(
        <div className={`${Styles.card} ${ active !== null ? (active === no) ? Styles.active : Styles.notActive : Styles.default}`} onMouseOver={() =>handleMouseOver(no)} onMouseLeave={() =>handleMouseOver(null)}>
            {/* <img src={background} /> */}
            <div className={Styles.content}>
                <h3>{title}</h3>
                <ul>
                    {
                        content.data.map( (item, idx) =>{
                            return <li key={idx}>{item}</li>
                        })
                    }
                </ul>
            </div>
        
        </div>  
    )
}