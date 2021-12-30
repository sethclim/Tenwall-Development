import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.brandWrap}>
                <img />
                <div className={Styles.brandName}>
                    <div className={Styles.mainName}>Climenhaga</div>
                    <p>Software Solutions</p>
                </div>
            </div>
            <nav className={Styles.nav}>
                <a>About Us</a>
                <a>Projects</a>
            </nav>
        </header>
    );  
}