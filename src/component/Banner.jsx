import React from "react";
import "../css/style.css"
import 'animate.css';

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => { 
        document.title = "Dhimas Roby" || "";
        // eslint-disable-next-line
      }, "Dhimas Roby");   
    return <div className="banner">
                <Link to="/"><h1 className="animate__animated animate__fadeInDown animate__delay-0.4s animate__slow">DHIMAS ROBY</h1></Link>
                <h2 className="animate__animated animate__fadeInDown animate__delay-0.5s animate__slow">React • Wordpress • Front End Developer • Creative Digital Specialist • Social Media Optimization</h2>
            </div>
}

export default Banner;