import React from "react";
import "./side-nav-right.styles.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import CheckBoxInput from "../checkbox-input/checkbox-input.component";
import BookingBetslipFooter from "../booking-betslip-footer/booking-betslip-footer.components";
import BookingBetslip from "../booking-betslip/booking-betslip.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faTrashCan, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"




const SideNavRight = ({}) => {
    const HandleClick = (e, line) => {
        if (line==='line1'){
            Array.from(document.querySelectorAll('.s-nav__head-text')).map(i => i.querySelector('span:last-child').classList.remove('text-active'))
            e.target.parentElement.querySelector('span:last-child').classList.add('text-active')
        } else if (line==='line2'){
            console.log(e.target)
            document.querySelector('.s-nav__head-row:nth-child(2) > .content > .s-nav__head-text.active-span').classList.remove('active-span')
            e.target.closest('.s-nav__head-text').classList.add('active-span')
        }
    }
    return (
        <div id="side-nav-right" className='s-nav__wrap'>
            <div className="container main">
                <div className="s-nav__item">
                    <div className="s-nav__head">
                        <div className="s-nav__head-row">
                            <div onClick={e => HandleClick(e, 'line1')} className="content">
                                <div className="s-nav__head-text"><span>Betslip</span><span></span></div>
                                <div className="s-nav__head-text"><span>My Bets</span><span className="text-active"></span></div>
                            </div>
                        </div>
                        <div className="s-nav__head-row">
                            <div onClick={e => HandleClick(e, 'line2')} className="content">
                                <span className="s-nav__head-text active-span"><span>Singles</span></span>
                                <span className="s-nav__head-text"><span>Multiples</span></span>
                            </div>
                        </div>
                        <div className="s-nav__head-row">
                            <div className="content">
                                <div className="s-nav__head-col"><CheckBoxInput inputType='CHECKBOX2'/><span className="text-active">Accept Odds Changes</span></div>
                                <div className="s-nav__head-col"><FontAwesomeIcon icon={faTrashCan} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-nav__item">
                    <div className="content">
                        <div className="s-nav__item-row u">
                            <span>Your Betslip is empty</span>
                            <span>Please make one or more selection in order to place a bet</span>
                        </div>
                        <div className="s-nav__item-row form">
                            <span>Book:</span>
                            <span>Please insert a booking number below</span>
                            <form>
                                <FormInput inputtype='SearchInputType2'/>
                                <CustomButton style={{fontWeight:'bold',color:'var(--yellow)'}} buttonType="FlatButton">Book</CustomButton>
                            </form>
                        </div>
                        <div className="s-nav__item-row form">
                            <span>Check Bet:</span>
                            <span>Insert a valid Bet ID to check status</span>
                            <form>
                                <FormInput inputtype='SearchInputType2'/>
                                <CustomButton style={{fontWeight:'bold',color:'var(--yellow)'}} buttonType="FlatButton">Check</CustomButton>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="s-nav__item">
                    <BookingBetslip />
                </div>
                <div className="s-nav__item">
                    <BookingBetslipFooter />
                </div>
                <div className="s-nav__item">
                    <span className="color-break"></span>
                </div>
                <div className="s-nav__item">
                    <span className="img-holder">
                        <div className="carousel">
                            <img src={require("../../Media/soccer-pics/img-3.jpg")}/>
                        </div>
                        <div className="nav-icon">
                            <span className="icon"><FontAwesomeIcon icon={faCaretLeft} /></span>
                            <div>
                                <span className="icon icon-1">.</span>
                                <span className="icon icon-2">.</span>
                                <span className="icon icon-3">.</span>
                            </div>
                            <span className="icon"><FontAwesomeIcon icon={faCaretRight} /></span>
                        </div>
                    </span>
                </div>

            </div>
        </div>
    )
}

 export default SideNavRight;



































 