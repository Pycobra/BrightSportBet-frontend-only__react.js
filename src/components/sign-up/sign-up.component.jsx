import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./sign-up.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { createStructuredSelector } from 'reselect';
import FormInput from "../form-input/form-input.component";
// import RadioInput from "../radio-input/radio-input.component";
import { useState } from "react";



const SignUp = () => {
    const [userCredential, setUserCredential] = useState({email: '', firstname: '', lastname: ''})
    const {email, firstname, lastname} = userCredential

    const HandleChange = (e) => {
        const {name, value} = e.target;
        setUserCredential({...userCredential, [name]: value})
    }
    const CancelSlideModal = (e) => {
     e.target.closest('template').setAttribute('style', 'display:none')
    }
    return(
        <template id="sign-up">
            <div className="sign-up-content">
                <div className="content">
                    <div className="inner-block1">
                        <img className='img-top' src={require('../../Media/fashion/revolt-164_6wVEHfI-unsplash.jpg')} />
                    </div>

                    <div className="inner-block2">
                        <div className='box-1'>
                            <span>SIGN UP</span>
                            <span>SIG UP ON OUR PLATFORM TO GET THE LATEST NEWS ON YOUR FAVOURITE ARTIST, AND ACCESS TO MILLIONS OF MUSIC</span>
                        </div>
                        <div className='box-2'>
                            {/* <div className="radio-div">
                                <div><RadioInput name="gender" blacklabel='true' type='radio' label="Male"/></div>
                                <div><RadioInput name="gender" blacklabel='true' type='radio' label="Female"/></div>
                            </div> */}
                            <form className="">
                                <div className="top">
                                    <FormInput 
                                        shrinkinputtype="true"
                                        // inputtype='SmallInputType2'
                                        name="firstname" 
                                        type='text' 
                                        label="First Name*"
                                        value={firstname}
                                        handleChange={(e) => HandleChange(e)}
                                        required  /> 
                                    <FormInput 
                                        shrinkinputtype="true"
                                        // inputtype='SmallInputType2'
                                        name="lastname" 
                                        type='text' 
                                        label="Last Name*"
                                        value={lastname}
                                        handleChange={(e) => HandleChange(e)}
                                        required  /> 
                                    <FormInput 
                                        shrinkinputtype="true"
                                        name="email" 
                                        type='email' 
                                        label="Email*"
                                        value={email}
                                        handleChange={(e) => HandleChange(e)}
                                        required /> 
                                </div> 
                                <CustomButton buttonType="shopNow">Sign Up</CustomButton>
                            </form>
                        </div>
                    </div>    
                    <span className='cancel' onClick={(e) => CancelSlideModal(e)}>X</span>
                    
                </div>
            </div>
        </template>
    )
}


   export default SignUp;