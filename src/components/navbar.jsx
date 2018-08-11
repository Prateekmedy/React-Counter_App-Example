import React from 'react';
import { NavLink } from 'react-router-dom';

// Stateless Funtional Component

const NavBar = ({totalCounter, name}) => {
    console.log("NavBar - Rendered");
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">
                Counter React App
                <span className="badge badge-primary badge-pill badge-sm">{totalCounter}</span>
                <NavLink to="/"> Home</NavLink>
                <NavLink to={`/about/${name}`}> About</NavLink>
                <NavLink to="/contact"> Contact</NavLink>
            </div>
        </nav>
     );
}
 
export default NavBar;
