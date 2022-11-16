import React from "react";
import "./booking-betslip-footer.styles.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


const BookingBetslipFooter = ({}) => {
    const HandleClick = e => {
        Array.from(e.target.parentElement.children).map(i => i.classList.remove('active-span'))
        e.target.classList.toggle('active-span')
        
    }
    return (
        <div className="booking-betslip__footer">
            <div className="booking-betslip__footer__wrap">
                <div className="container">
                    <div className="booking-betslip__footer__item">
                        <div onClick={e => HandleClick(e)}
                             className="booking-betslip__footer__row">
                            <span>Single</span><span className="active-span">multiples</span><span>system</span>
                        </div>
                        <div className="booking-betslip__footer__row">
                            <div className="booking-betslip__footer__col">
                                <div className="booking-betslip__odds">
                                    <span>Total Odds:</span><span>156.2</span>
                                </div>
                                <div className="booking-betslip__amount">
                                    <span>N</span>
                                    <FormInput inputtype='SmallInput'/>
                                </div>
                            </div>
                            <div onClick={e => HandleClick(e)} 
                                 className="booking-betslip__footer__col">
                                <span>Clear</span><span className="active-span">100</span>
                                <span>200</span><span>500</span><span>1000</span>
                            </div>
                        </div>
                        <div className="booking-betslip__footer__row">
                            <div className="booking-betslip__footer__col">
                                <span>Total Stake</span>
                                <span>0.00</span>
                            </div>
                            <div className="booking-betslip__footer__col">
                                <span>Potential Win</span>
                                <span>0.00</span>
                            </div>
                            <CustomButton buttonType="MajorButton">Book A Bet</CustomButton>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
 export default BookingBetslipFooter;



































 