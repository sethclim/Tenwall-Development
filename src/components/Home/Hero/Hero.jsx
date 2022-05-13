import React, { useState } from "react";
import Styles from "./hero_style.module.scss";

export default function Hero() {
    return (
        <div className={Styles.hero}>
            <div>
                <p>We make it happen</p>
                <h3>Websites Mobile Apps Branding</h3>  
                <button className={Styles.CTA}>Work With Us</button>
            </div>
            
        </div>
    );  
}