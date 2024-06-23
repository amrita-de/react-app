import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="lo">
                <div className="logo">h</div>
                <div className="logo1">Hobby
                    <div className="logo2">Cue</div>
                </div>
            </div>
            <div className="search-bar input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                    <button className="btn btn-default" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="nav-items">
                <div className="dropdown">
                    <button className="dropbtn">
                        <i className="fas fa-compass"></i> Explore <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Explore 1</a>
                        <a href="#">Explore 2</a>
                        <a href="#">Explore 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                        <i className="fas fa-compass"></i> Hobbies <i className="fas fa-chevron-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Hobby 1</a>
                        <a href="#">Hobby 2</a>
                        <a href="#">Hobby 3</a>
                    </div>
                </div>
                <a href="#"><i className="fas fa-bookmark"></i></a>
                <a href="#"><i className="fas fa-bell"></i></a>
                <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <a href="#" className="signin">Sign In</a>
            </div>
            <div className="mobile-nav">
                <i className="fas fa-search"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-bars" onClick={toggleDropdown}></i>
                {isOpen && (
                    <div className="mobile-dropdown-content">
                        <a href="#"><i className="fas fa-compass"></i> Explore</a>
                        <a href="#"><i className="fas fa-compass"></i> Hobbies</a>
                        <a href="#"><i className="fas fa-bookmark"></i> Bookmark</a>
                        <a href="#"><i className="fas fa-shopping-cart"></i> Cart</a>
                        <a href="#" className="signin"><i className="fas fa-sign-in-alt"></i> Sign In</a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
