import React, { useState } from "react";
import Styles from "./reviews.module.scss";


export default function Reviews() {
    return (
        <div className={Styles.reviewWrap}>
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
            </div>
        </div>
    );  
}

const Review = ({title, body}) => {
    return(
        <div className={Styles.review}>
            <h3>{title}</h3>
            <p>{body}</p> 
        </div>
    )
}
