import React from "react";
import "./booking-betslip.styles.css";
import CheckBoxInput from "../checkbox-input/checkbox-input.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"


const BookingBetslip = ({}) => {
    
    return (
        <div className="booking-betslip">
            <div className="booking-betslip__wrap">
                <div className="container">
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Everton - Wolves</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Premier League</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.44</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Chelsea - Nottinham Forest</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Premier League</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>2.54</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Liverpool - West Ham</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Premier League</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.22</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Ac milan - Benevento</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Serie A</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.22</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Atalanta - Cromonese</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Serie A</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>3.04</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Roma - Empoli</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Serie A</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.94</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Bayern - Ausburg</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Bundesliga</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>2.01</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Stuttgart - Union Berlin</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Bundesliga</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>5.04</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

 export default BookingBetslip;



































 