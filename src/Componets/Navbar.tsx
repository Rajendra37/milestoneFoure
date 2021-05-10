import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'



export default function Navbar() {

    return (
        <>
    <div className="MyNavbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand text-uppercase"><span className="HeadText">Book Management System </span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item text-uppercase">
                            <NavLink className="nav-link" to="/Book">Books</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-uppercase" to="/Addbook">AddBooks</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-uppercase" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-uppercase" to="/Register">Register</NavLink>
                        </li>

                    </ul>
                    
                </div>
                </nav>

        </div>
        </>
    )
}
