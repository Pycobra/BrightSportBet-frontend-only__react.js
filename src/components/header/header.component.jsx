import React, { useEffect, useState } from "react";
import "./header.styles.css";
import { ReactComponent as Crown } from '../asset/crown.svg';
import { ReactComponent as Account } from '../asset/user.svg';
import { ReactComponent as GooglePlay } from '../asset/google-play-black.svg';
import FormGroup from "../form-group/form-group.components";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component"






const Header = ({}) => {
    return (
        <header id="header-item">
            <div className="h-item">
                <div className="container">
                    <div className="h-item__wrap">
                        <div className="h-item__top-level">
                            <div className="h-item__top-level__col-1">
                                <div className='h-item__logo'>
                                    <Link to="/" className='h-item__logo-icon'><span>BRIGHT</span><span>Bet</span></Link>
                                </div>
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
                                        <Link to="/" className="text-primary" id="header__loggedout__register" title="Register">Register</Link>
                                    </div>
                                    <div className="h-item__acc-item">
                                        <Link to="/" className="text-primary" id="header__loggedout__passwordrecovery" title="Register">Forgotten Password</Link>
                                    </div>
                                        {/* <CustomButton buttonType="FlatButton">Login</CustomButton> */}
                                    <div className="h-item__acc-item">
                                        <CustomButton buttonType="FlatButton">Login</CustomButton>
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
// export default connect(mapStateToProps)(Header);


