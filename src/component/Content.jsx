import React from "react";
import "../css/style.css";

import { Link } from "react-router-dom";

const Content = (props) => {
    return (
        <div className="Content">
            <Link to={props.url}>
            <div className="thumb">
                <img src={props.img} alt=""/>
            </div>
            <p className="title">{props.title}</p>
            </Link>
        </div>
    )
}

export default Content;