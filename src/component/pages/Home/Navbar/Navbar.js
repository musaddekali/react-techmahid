import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({isScrolled}) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
        >
            <div className="container">
                <Link className="navbar-brand" to='/'>
                    <h1 className="brand-logo">TechMahid<span className="theme-secondary-text">.</span></h1>
                    {/* you can use image logo also  */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/' >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/portfolio-details">portfolio-details</Link>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#team">Team</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


