import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Header() {
    return (
        <>
            <div>
                <div>
                    <img />
                    <p></p>
                </div>
                <nav>
                    <button>About Us</button>
                    <button>Projects</button>
                </nav>
            </div>
        </>
    );  
}