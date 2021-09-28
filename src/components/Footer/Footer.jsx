import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div>
                <p>@Climenhaga Systems 2021</p>
                <a>Facebook</a>
                <a>Instagram</a>
            </div>
        </div>
    );  
}