import React, { Fragment } from "react";
import Header from "../component/Header";
import PageContent from "../component/PageContent";
import Footer from "../component/Footer";
import { useEffect } from "react";

const Detail =(props) => {
    useEffect(() => { 
        document.title = props.title + " - Dhimas Roby" || "";
      }, [props.title]);   
        return (            
            <Fragment>
                <head>
                    <title>{props.title}</title>
                </head>
            <center>
                <Header />
                <PageContent img={props.img} title={props.title} subtitle={props.subtitle} desc={props.desc}/>
                <Footer />
            </center>
            </Fragment>
        )
    }

export default Detail;