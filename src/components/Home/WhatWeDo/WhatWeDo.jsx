import React, { useState } from "react";
import Styles from "./whatwedo.module.scss";

export default function WhatWeDo() {
    return (
        <div className={Styles.WhatWeDo}>
            <div className={Styles.right}>
                <h3>We provide Web app development</h3>
                <p>Climenhaga Systems produces custom web solutions.  
                We specialize in modern up to date approachs in development.  
                Bringing you fast and reposonive sites.    </p>  
            </div>
            <div className={Styles.left}>
                <h1>Web Dev</h1>
                <h1>Server</h1>
                <h1>Design</h1>
            </div>
            
        </div>
    );  
}