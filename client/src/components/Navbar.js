import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/user/:id">Profile</NavLink></li>
                <li><NavLink to="/progress">Progress Page</NavLink></li>
            </ul>
            
        </nav>
    );
}
export default Navbar;