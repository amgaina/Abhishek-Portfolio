import React from "react";
import './navbar.css';
import logo from "../../assets/logo.png";
import {Link} from 'react-scroll';

const Navbar =()=>{
    return (
        <nav className="navbar">
            <img src = {logo} alt = "logo" className="logo"/>
            <div className = "desktopMenuList">
                <Link activeClass = 'active' to = "intro" smooth = {true} offset = {-100} class = "DesktopMenu" >Home</Link>
                <Link activeClass = 'active' to ='skills' smooth = {true} offset = {-100} class = "DesktopMenu">Skills</Link>
                <Link class = "DesktopMenu" activeClass="active" to = "education" smooth = {true} offset = {-100}>Education</Link>
                <Link class = "DesktopMenu" activeClass="active" to = "about" smooth = {true} offset = {-100} >About</Link>
            </div>

            <button className="desktopMenuBtn"><a href = "https://docs.google.com/forms/d/e/1FAIpQLSeyRHgiqxSHyM3RJx4iGRTbY78CvZZQtwIJTnpmut--kSKxYA/viewform?usp=sf_link" target="#"> Contact </a></button>

        </nav>
    )
};
export default Navbar;