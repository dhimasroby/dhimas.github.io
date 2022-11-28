import React, {Component} from "react";
import Banner from "../component/Banner";
import Content from "../component/Content";
import Footer from "../component/Footer";
import "../css/style.css";

import renaette from "../img/renat.png";
import LCV from "../img/lcv.png";
import rays from "../img/rays.png";
import ff from "../img/fleting.png";
import at from "../img/aliti.png";
import masgan from "../img/masgan.png";

class Home extends Component {
    render() {
        return (
            <center>
                <Banner />
                <div className="container animate__animated animate__fadeIn animate__delay-0.7s animate__slow">
                    <Content title="LCV Juice" img={LCV} url="lcvjuice"/>
                    <Content title="Rays Official" img={rays} url="raysofficial"/>
                    <Content title="Renaette" img={renaette} url="renaette"/>
                    <Content title="Fleeting Flee" img={ff} url="fleetingflee"/>
                    <Content title="akutunggu.com" img={at} url="akutunggu"/>
                    <Content title="Masgan.Art" img={masgan} url="masganart"/>
                </div>
                <Footer />
            </center>
        )
    }
}



export default Home;