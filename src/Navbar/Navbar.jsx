import React from "react";
import { Fragment } from "react";
import "./Navbar.css";
import { Link, Outlet } from 'react-router-dom';


function Navbar() {
  return (
    <Fragment>
      <>
        <ul className="nav justify-content-center bg-dark py-3 fixed-top navegation">
          <li className="nav-item">
            <Link to={'/'}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to={'/Nosotros'}>Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link to={'/Contacto'}>Contacto</Link>
          </li>
        </ul>

        <Outlet />
      </>
    </Fragment>
  )
}

export { Navbar };