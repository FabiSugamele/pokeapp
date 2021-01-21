import React from "react";
import "./Navbar.css";
import logo from "./poke-logo.png"

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img className="logo-img" src={logo} alt="website logo"></img>
            </div>
            <div className="navbar-items">
                <ul className="navbar-items-list">
                    <li className="item"><a href="/">Todos PKMN</a></li>
                    <li className="item"><a href="/">Meus PKMN</a></li>
                </ul>
                <form className="form-search" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div >
    )
}

export default Navbar;