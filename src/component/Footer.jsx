import React from "react";
import "../css/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // 

const Footer = () => {
    return (   
        <div className="footer">
            <hr />            
            <div className="col animate__animated animate__fadeIn animate__delay-0.8s animate__slower">
                <h3>DHIMAS ROBY</h3>    
            </div>                
            <div className="col  animate__animated animate__fadeIn animate__delay-0.8s animate__slower" id="social-icons" >
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
            <div className="col  animate__animated animate__fadeIn animate__delay-0.8s animate__slower" id="email-link">
                <FontAwesomeIcon icon={regular('envelope')} />
                <a href="mailto:dhimasroby@outlook.com">dhimasroby@outlook.com</a>
            </div>
        </div>  
    )
}

export default Footer;