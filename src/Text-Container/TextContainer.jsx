import React from "react";
import { Fragment } from "react";
import "./TextContainer.css";


function TextContainer(){
    return(
        <Fragment>
            <div className="Container-fluid py-5 text-bg-info text-white shadow-lg p-3 mb-5 TextContainer">
                <div>
                    <p>¡Con PetServices encuentras el servicio más cercano para tu mascota!</p>
                </div>
            </div>
        </Fragment>
    )
}

export{TextContainer};