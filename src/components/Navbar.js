import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
//<Link to="home" smooth={true} duration={1}></Link>
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={`${process.env.PUBLIC_URL}Screenshot 2024-05-28 185504.png`} alt="Logo" className="logo" />
                <div className="nav-links">
                   
                    <Link to="about" smooth={true} duration={1}>About</Link>
                    <Link to="services" smooth={true} duration={1}>Services</Link>
                    <Link to="services" smooth={true} duration={1}>Frames</Link>
                </div>
                <div className="widget-button">
                    <a
                        className="call-button"
                        href="tel:939-337-0012"
                        onClick={() => console.log('Conversion reported')}
                    >
                        Call for Appointment
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
