import React, { useState } from "react";
import Styles from "./problem_solve.module.scss";

export default function ProblemSolve() {
    return (
        <div className={Styles.problemsolve}>
            <div className={Styles.card1}>
                <div className={Styles.msgWrap}>
                    <h3>App Development</h3>
                    <p>Test driven development process focused on creating reliable and maintainable software</p>
                </div>
            </div>   
            <div className={Styles.card2}>
                <div className={Styles.msgWrap}>
                    <h3>Design</h3>
                    <p>User driven design for both intuitive operation and beautiful visuals</p>
                </div>
            </div>   
            <div className={Styles.card3}>
                <div className={Styles.msgWrap}>
                    <h3>Take your site to the next level</h3>
                    <p>Breath life into your site</p>
                </div>
            </div>   
        </div>
    );  
}




