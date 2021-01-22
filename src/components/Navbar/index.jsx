import React from "react";
import "./Navbar.css";
import logo from "./poke-logo.png";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img className="logo-img" src={logo} alt="website logo"></img>
            </div>
            <div className="navbar-items">
                <ul className="navbar-items-list">
                    <li className="item"><Link className="link" to="/">Todos PKMN</Link></li>
                    <li className="item"><Link className="link" to="/mypokemons">Meus PKMN</Link></li>
                </ul>
                <form className="form-search" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </div >
    )
}

export default Navbar;