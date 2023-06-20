import React from "react";
import Styles from "./projects.module.scss";
import * as Unicons from '@iconscout/react-unicons';

import Branding from "../../../branding.jpg"


export default function ProblemSolve() {
    return (
        <div className={Styles.problemsolve}>
            <div className={Styles.header}>
                <h1>Experiences</h1>
            </div>
            <div className={Styles.projectGrid}>
                <ProjectGridItem name="Think Piano" link="https://sethclim.github.io/think-piano/"/>
                <ProjectGridItem name="Seth Climenhaga Portfolio" link="http://sethclimenhaga.com/"/>
                <ProjectGridItem name="Scales App" link={`/Tenwall-Development/projects/scales-app`}/>
            </div>
        </div>
    );  
}


const ProjectGridItem = ({name, link}) =>{
    return(
        <a href={link} target='_blank'>
            <div className={Styles.gridItem} style={{ backgroundImage: `url(${Branding})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}  >

                <div className={Styles.overlay} >
                    <div className={Styles.contents}>
                        <h3>{name}</h3>
                        <Unicons.UilArrowUpRight size="50"  className={Styles.icon} />
                    </div>
                </div>
            </div>
        </a>
    )
}




