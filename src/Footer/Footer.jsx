import React from "react";
import { Fragment } from "react";




function Footer() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row p-5 pb-2 bg-dark text-white">
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <a className="text-decoration-none text-white" href="/">
                            <p className="h3">PetServices</p>
                        </a>
                        <p className="text-secondary">San José, Costa Rica.</p>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p className="h5 mb-3">Nuestras redes:</p>
                        <div className="mb-2">
                            <a className="text-decoration-none text-secondary" href="https://www.facebook.com/profile.php?id=100092453745676" target="blank">Facebook</a>
                        </div>
                        <div className="mb-2">
                            <a className="text-decoration-none text-secondary" href="https://www.instagram.com/petservicescr1/" target="blank">Instagram</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p className="h5 mb-3">Links:</p>
                        <div className="mb-2">
                            <a className="text-decoration-none text-secondary" href="#">Terms & Conditions</a>
                        </div>
                        <div className="mb-2">
                            <a className="text-decoration-none text-secondary" href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p className="h5 mb-3">Contacto:</p>
                        <p>sandovaldev21@gmail.com</p>
                    </div>
                    <div className="col-xs-12 pt-4">
                        <p className="text-white text-center">PetServicesCR - All right reserved &copy; 2023</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export { Footer };