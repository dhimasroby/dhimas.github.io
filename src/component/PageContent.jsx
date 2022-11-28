import React from "react";
import "../css/style.css";

const PageContent = (props) => {
    return (
        <div className="DetailContent  animate__animated animate__fadeIn animate__delay-0.8s animate__slow">
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <h4>{props.subtitle}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default PageContent;