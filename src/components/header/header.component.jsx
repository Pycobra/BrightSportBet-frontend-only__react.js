import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component"
import SiteLogo from "../site-logo/site-logo.component";





const Header = ({}) => {
    const HandleClick = (e) => {
        const SignIn = document.querySelector('#sign-in')
        SignIn.setAttribute('style', 'display:flex')
    }
    return (
        <header id="header-item">
            <div className="h-item">
                <div className="container">
                    <div className="h-item__wrap">
                        <div className="h-item__top-level">
                            <div className="h-item__top-level__col-0">
                                <div className="h-item__acc">
                                    <div className="h-item__acc-item">
                                        <Link style={{color:'var(--orange)',fontWeight:'bold'}} to="/" className="text-primary" id="header__loggedout__register" title="Register">Register</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="h-item__top-level__col-1">
                                <SiteLogo />
                                <nav className='h-item__nav'>
                                    <ul className='h-item__nav-list'>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link active" id="header__staticlink__sport">Sport</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Live</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Casino</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Live&nbsp;Casino</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">BrightBetPlay</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Virtual</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Lotto</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Super9ja</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">FireBets</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Promotions</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="h-item__top-level__col-2">
                                <div className="h-item__acc">
                                    <div className="h-item__acc-item">
                                        <Link style={{color:'var(--orange)',fontWeight:'bold'}} to="/" className="text-primary" id="header__loggedout__register" title="Register">Register</Link>
                                    </div>
                                    <div className="h-item__acc-item">
                                        <Link to="/" className="text-primary" id="header__loggedout__passwordrecovery" title="Register">Forgotten Password</Link>
                                    </div>
                                    <div className="h-item__acc-item">
                                        <CustomButton onClick={e => HandleClick(e)} buttonType="FlatButton">Login</CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-item__btm-level">
                            <div className="h-item__btm-level__col-1">
                                <nav className='h-item__nav'>
                                    <ul className='h-item__nav-list'>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link active" id="header__staticlink__sport">Sport</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Live</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Casino</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Live&nbsp;Casino</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">BrightBetPlay</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Virtual</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Lotto</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Super9ja</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">FireBets</Link>
                                        </li>
                                        <li className='h-item__nav-item'>
                                            <Link to="/" className="h-item__nav-link" id="header__staticlink__sport">Promotions</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;


