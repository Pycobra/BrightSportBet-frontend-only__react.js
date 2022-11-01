import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./menu-bar.styles.css";
import FormInput from "../form-input/form-input.component";
import { ReactComponent as StarSvg2 } from '../asset/star2.svg';
import { ReactComponent as GooglePlay } from '../asset/google-play-black.svg';
import CustomButton from "../custom-button/custom-button.component";
import FormGroup from "../form-group/form-group.components";
import { ReactComponent as Account } from '../asset/user2.svg';



 const MenuBar = () => {
    const HandleAccount = (e) => {
        document.querySelector('template#sign-up').setAttribute('style', 'display: flex;')
        document.querySelector('#header > .content > .box-2 > .menutimes').setAttribute('style', 'display:none')
        document.querySelector('#header > .content > .box-2 > .menubar').setAttribute('style', 'display:block')
        document.querySelector('template#menubar-hover').classList.remove('slide-down-menu-bar')
        document.querySelector('template#menubar-hover').classList.add('slide-up-menu-bar')
        document.querySelector('template#menubar-hover.slide-up-menu-bar').setAttribute('style', 'animation: slideUpMenuBar 500ms ease-in 1;')
        }
    return (
        <template id="menubar-hover">
            <div className="list-place">
                <FormGroup MenuBarType/>
                <ul>
                    <li>home</li>
                    <li>Podcast</li>
                    <li>Download&nbsp;App</li>
                </ul>
                <div onClick={e => HandleAccount(e)} className="sign-up"><span>Sign up</span><Account /></div>
            </div>
        </template>
    )}
 export default MenuBar;
