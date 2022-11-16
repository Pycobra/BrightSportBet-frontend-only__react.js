import React, { useEffect } from "react";
import "./sign-in.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import SiteLogo from "../site-logo/site-logo.component";
// import { ReactComponent as CaretDown } from '../asset/caret-down-white.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faCaretDown } from "@fortawesome/free-solid-svg-icons"



const SignIn = () => {
    const [userCredential, setUserCredential] = useState({email: '', firstname: '', lastname: ''})
    const {email, phone, lastname} = userCredential

    const HandleChange = (e) => {
        const {name, value} = e.target;
        setUserCredential({...userCredential, [name]: value})
    }
    const CancelSlideModal = (e) => {
     e.target.closest('template').setAttribute('style', 'display:none')
    }
    return(
        <template id="sign-in">
            <div className="sign-in-content">
                <div className="icon"><SiteLogo /></div>
                <div className="content">
                    <div className="inner-block1">
                        <img className='img-top' src={require('../../Media/soccer-pics/img-3.jpg')} />
                    </div>

                    <div className="inner-block2">
                        <div className='box-1'>
                            <span>Login to BrightSport</span>
                            {/* <span>SIGN UP ON OUR PLATFORM TO GET THE LATEST NEWS ON YOUR FAVOURITE ARTIST, AND ACCESS TO MILLIONS OF MUSIC</span> */}
                        </div>
                        <div className='box-2'>
                            <form className="">
                                <div className="top">
                                    <div className="input-wrap">
                                        <div>
                                            <span className="country-holder">
                                                <img src="https://flagcdn.com/16x12/ng.png" alt="Nigeria"/>
                                            </span>
                                            <FontAwesomeIcon icon={faCaretDown} />
                                            <span>+234</span>
                                        </div>
                                        <FormInput 
                                            inputtype="roundbordertype phone"
                                            name="phone" 
                                            type='mobile' 
                                            placeholder="Phone No*"
                                            value={phone}
                                            handleChange={(e) => HandleChange(e)}
                                            required  /> 
                                    </div>
                                    <FormInput 
                                        inputtype="roundbordertype"
                                        name="phone" 
                                        type='text' 
                                        placeholder="Password*"
                                        value={phone}
                                        handleChange={(e) => HandleChange(e)}
                                        required  /> 
                                </div> 
                                <CustomButton buttonType="MajorButton register">Login</CustomButton>
                            </form>
                        </div>
                    </div>    
                    <span className='cancel' onClick={(e) => CancelSlideModal(e)}>X</span>
                    
                </div>
            </div>
        </template>
    )
}


   export default SignIn;