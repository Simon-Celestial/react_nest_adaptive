import React from "react";
import "./Header.css";
import downArrow from "../../assets/images/down-arrow.png";
import franceFlag from "../../assets/images/france.png";
import germanyFlag from "../../assets/images/germany.png";
import russiaFlag from "../../assets/images/russia.png";
import nestLogo from "../../assets/images/nest-logo.svg";
import searchImg from "../../assets/images/search.png";
import locationImg from "../../assets/images/location.png";


const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header-top-container">
                <div className="header-top-items">
                    <a href="#" className="header-text-border">About Us</a>
                    <a href="#" className="header-text-border">My Account</a>
                    <a href="#" className="header-text-border">Wishlist</a>
                    <a href="#">Order Tracking</a>
                </div>
                <div className="header-top-items header-marquee-block">
                    <marquee behavior="scroll" direction="down" scrolldelay="500" scrollamount="5px">100% Secure
                        delivery without contacting the courier
                    </marquee>
                </div>
                <div className="header-top-items">
                    <div className="header-options-container">
                        <p>Need help?</p>
                        <p>Call Us:</p>
                        <p className="green-color-number">+1800 900</p>
                        <div className="header-text-arrow">
                            <p>English
                                <img src={downArrow} alt="down-arrow"/>
                                <div className="lang-dropdown languages-dropdown">
                                    <p>
                                        <img src={franceFlag} alt="france"/>
                                        Français</p>
                                    <p>
                                        <img src={germanyFlag} alt="germany"/>
                                        Deutsch</p>
                                    <p>
                                        <img src={russiaFlag} alt="russia"/>
                                        Pусский</p>
                                </div>
                            </p>
                            <p>USD
                                <img src={downArrow} alt="down-arrow"/>
                                <div className="lang-dropdown money-dropdown">
                                    <p>
                                        <img src={franceFlag} alt="france"/>
                                        INR</p>
                                    <p>
                                        <img src={germanyFlag} alt="germany"/>
                                        MBP</p>
                                    <p>
                                        <img src={russiaFlag} alt="russia"/>
                                        EU</p>
                                </div>

                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="header-middle-container">
                <div className="logo-box">
                    <img src={nestLogo} alt="site-logo"/>
                </div>
                <div className="header-search-box">
                    <div className="category-selection">
                        <b>All Categories
                            <img src={downArrow} alt="down-arrow"/>
                        </b>
                    </div>
                    <form action="#">
                    <input type="text" id="headerSearch" placeholder="Search for items..."/>
                    </form>
                    <img src={searchImg} alt="search"/>
                </div>
                <div className="location-wrapper">
                        <img src={locationImg} alt="location"/>
                        <p>Your Location</p>
                        <img src={downArrow} alt="down-arrow"/>
                </div>
            </div>
        </header>
    )
};

export default Header;
