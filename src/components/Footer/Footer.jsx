import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div>
                <p>@Tenwall Development 2022</p>
                <a>Facebook</a>
                <a>Instagram</a>
            </div>
        </div>
    );  
}