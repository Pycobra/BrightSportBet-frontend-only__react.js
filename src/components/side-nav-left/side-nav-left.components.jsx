import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./side-nav-left.styles.css";
import FormGroup from "../form-group/form-group.components";
import Accordion from "../accordion/accordion.components";


const SideNavLeft = ({leagueNames, AccordionHash}) => {
    const [clicked, setClicked] = useState(
        Array.from(leagueNames).map((obj,idx) => obj.active ? true : false)
    )
    const [leagueActivate, setLeagueActivate] = useState(leagueNames)
    const HandleClick = (e, position) => {
        const clickedState = clicked.map((obj, index) => index === position ? !obj : obj); 
        setClicked(clickedState)
        const updateLeague = leagueActivate.map((obj, index) => 
            index === position ? {...obj, 'active': !obj.active} : obj); 
        setLeagueActivate(updateLeague)
    }

    return (
        <div id="side-nav-left" className='s-nav__wrap'>
            <div className="s-nav__item">
                <FormGroup SideBarType/>
                <div className='s-nav__top-level__ul-wrap'>
                    <ul className='s-nav__list'>
                     {
                        leagueActivate
                        ? leagueActivate.map(({title, icon, active}, idx) => 
                        <li onClick={e => HandleClick(e, idx)} 
                            // onMouseEnter={e => HandleMouseEnter(e, idx)} 
                            // onMouseLeave={e => HandleMouseLeave(e, idx)} 
                            data-index={idx} key={idx} className='s-nav__list-item' 
                            title={title} id={`s-nav__list-item-${idx}`}>
                            <div className="s-nav__list-item__img-holder" data-index={idx}>
                                <span className="icon" data-index={idx}>{icon}</span>
                            </div>
                            <div className='s-nav__list-item__text' data-index={idx}>
                                <Link data-index={idx} className={`text ${active ? 'active-span' : null}`} 
                                    to="/" id={`s-nav__list-item-${idx}`} title={title}>{title}</Link>
                            </div>
                            {/* <span className="list-cover" data-index={idx}></span> */}
                        </li>
                        )
                        : null
                     }
                     </ul>
                </div>
            </div>
            <div className="s-nav__item">
                <div className="time-filter">
                    <div className="time-filter__image-holder">
                        <span className='icon-timer'>&#9776;</span>
                    </div>
                    <div className="time-filter__list">
                        <div className="time-filter__item">
                            <span className="time-filter__link">TODAY</span>
                        </div>
                        <div className="time-filter__item">
                            <span className="time-filter__link">3H</span>
                        </div>
                        <div className="time-filter__item">
                            <span className="time-filter__link">24H</span>
                        </div>
                        <div className="time-filter__item">
                            <span className="time-filter__link">72H</span>
                        </div>
                        <div className="time-filter__item">
                            <span className="time-filter__link">All</span>
                        </div>
                    </div>
                </div>
                <h1 className="head">SPORTS</h1>
                <Accordion AccordionHash={AccordionHash} SideNav/>
            </div>
        </div>
            
    )
}
 export default SideNavLeft;
