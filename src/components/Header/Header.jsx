import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Header() {
    return (
        <header className={Styles.header}>
            <div>
                <img />
                <p>Climenhaga Systems</p>
            </div>
            <nav className={Styles.nav}>
                <a>About Us</a>
                <a>Projects</a>
            </nav>
        </header>
    );  
}