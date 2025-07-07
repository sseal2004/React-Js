import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ use NavLink instead of link

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink className={(e) => e.isActive ? "red" : ""} to="/"><li>Home</li></NavLink>
                <NavLink className={(e) => e.isActive ? "red" : ""} to="/about"><li>About</li></NavLink>
                <NavLink className={(e) => e.isActive ? "red" : ""} to="/contact"><li>Contact</li></NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
