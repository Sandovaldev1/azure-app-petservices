import React from "react";
import { Fragment } from "react";
import { TextContainer } from "../Text-Container/TextContainer";
import { Map } from "../Mapa/Map";
import { Donaciones } from "../Donaciones/Donaciones";
import { Footer } from "../Footer/Footer";





function Home(){
    return(
        <Fragment>
            <TextContainer/>
            <Map/>
            <Donaciones/>
            <Footer/>
        </Fragment>
    );
};



export{Home};