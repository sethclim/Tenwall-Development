import React, { useState } from "react";
import Styles from "./reviews.module.scss";


export default function Reviews() {
    return (
        <div className={Styles.reviews}>
            <Review 
                title={"JOO JOO"} 
                body={"asdfasfasfasfasjhfaksjfhajksfhjksfh"} 
            />
            <Review 
                title={"JOO JOO"} 
                body={"asdfasfasfasfasjhfaksjfhajksfhjksfh"} 
            />
            <Review 
                title={"JOO JOO"} 
                body={"asdfasfasfasfasjhfaksjfhajksfhjksfh"} 
            />
            <Review 
                title={"JOO JOO"} 
                body={"asdfasfasfasfasjhfaksjfhajksfhjksfh"} 
            />
        </div>
    );  
}

const Review = ({title, body}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>{body}</p> 
        </div>
    )
}
