import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="navbarlinks"> 
                <Link to="/random"> Рандомный фильм </Link>
                <Link to="/films"> Главная </Link>
            </div>
      </div>
    );
}

export default Navbar;