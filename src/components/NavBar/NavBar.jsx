// import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
    <nav id="navbar" className="">
  <div className="nav-wrapper">

    <div className="logo">

      <Link to="/"><i className="fas fa-chess-knight"></i> Blog</Link>
    </div>


    <ul id="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</nav>



<div className="menuIcon">
  <span className="icon icon-bars"></span>
  <span className="icon icon-bars overlay"></span>
</div>


<div className="overlay-menu">
  <ul id="menu">
  <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
</div>
</div>
    );
};

export default NavBar;



