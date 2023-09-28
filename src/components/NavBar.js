import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "light blue",
        textDecoration: "none",
        color: "black"
    }

    return(
        <nav>
            <NavLink to="/"
                exact
                styles = {linkStyles}
                activeStyle={{background: "grey"}}
            >
                Home
            </NavLink>
            <NavLink to="/performanceList"
                exact
                styles = {linkStyles}
                activeStyle={{background: "grey"}}
            >
                Performance List
            </NavLink>
            <NavLink to="/submitForm"
                exact
                styles = {linkStyles}
                activeStyle={{background: "grey"}}
            >
                Add New Song
            </NavLink>
        </nav>
    )
}

export default NavBar