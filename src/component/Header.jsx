import React from "react";
import "../css/style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // 

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header animate__animated animate__fadeInDown animate__slower">
            <div className="colheader">
                <Link to="/"><h2>DHIMAS ROBY</h2></Link>
            </div>                
            <div className="colheader" id="social-icons-header" >
                <a href="https://github.com/dhimasroby" >
                    <FontAwesomeIcon className="si-content" icon={brands('github')} /></a>
                <a href="https://t.me/dhimasroby" >
                    <FontAwesomeIcon className="si-content" icon={brands('telegram')} /></a>
                <a href="https://www.linkedin.com/in/dhimasroby" >
                    <FontAwesomeIcon className="si-content" icon={brands('linkedin')} /></a>
                <a href="https://instagram.com/dhimasroby" >
                    <FontAwesomeIcon className="si-content" icon={brands('instagram')} /></a>
                <a href="https://www.youtube.com/user/dhimasroby" >
                    <FontAwesomeIcon className="si-content" icon={brands('youtube')} /></a>
            </div> 
        </div>  
    )
}

export default Header;