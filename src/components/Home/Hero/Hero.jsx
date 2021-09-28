import React, { useState } from "react";
import Styles from "./hero_style.module.scss";

export default function Hero() {
    return (
        <div className={Styles.hero}>
            <div>
                <h3>Climenhaga Systems</h3>
                <p>Custom Tailored Quality Systems</p>  
            </div>
            
        </div>
    );  
}