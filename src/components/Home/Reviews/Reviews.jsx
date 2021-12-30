import React, { useState } from "react";
import Styles from "./reviews.module.scss";
import icon from "../../../../public/assets/IMG/ICON.jpg"


export default function Reviews() {
    return (
        <div className={Styles.reviewWrap}>
            <div className={Styles.reviews}>
                <Review 
                    img={icon}
                    title={"JOO JOO"} 
                    body={"asdfasfasfasfasjhfaksjfhajksfhjksfh"} 
                />
                <Review 
                    img={icon}
                    title={"JOO JOO"} 
                    body={"asdfasfasfasfasjhfaksjfhajksfhjksfh"} 
                />
                <Review 
                    img={icon}
                    title={"JOO JOO"} 
                    body={"asdfasfasfasfasjhfaksjfhajksfhjksfh"} 
                />
            </div>
        </div>
    );  
}

const Review = ({title, body, img}) => {
    return(
        <div className={Styles.review}>
            <div>
                <img className={Styles.review_img} src={img} />
                <h3>{title}</h3>
            </div>
       
            <p>{body}</p> 
        </div>
    )
}
