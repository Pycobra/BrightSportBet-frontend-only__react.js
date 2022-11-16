import React, { useState } from "react";
import "./accordion.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretRight, faCaretUp } from "@fortawesome/free-solid-svg-icons"


const Accordion = ({AccordionHash, SideNav, MainContentCard, MainContent}) => {
    const [clickedGrandChild, setClickedGrandChild] = useState(
        Array.from(AccordionHash).fill(false)
    )
    const [countries, setCountries] = useState([
        {icon:"ng", name:"International", leagues:['FIFA World Cup 2022', "International Friendly Games, Women", "International Friendly Games, Men"]},
        {icon:"ng", name:"International Clubs", leagues:["UEFA Champions League", "UEFA Europa League", "UEFA Conference League", 
            "Club Friendly Games, men", , "Club Friendly Games, Women"]},
        {icon:"gb-eng", name:"England", leagues:["Premiership", "Fa Cup", 'Championship', 'League One', 'League Two', 'National League', 
            'National League North', 'National League South', "Professional Development League"]},
        {icon:"es", name:"Spain", leagues:["LaLiga", "LaLiga 2", 'Copa Del Rey', "Primera RFEF", "Primera Division Femina"],}, 
        {icon:"de", name:"Germany", leagues:["Bundesliga", "2. Bundesliga", "3. Bundesliga", "Bayernliga South", 
            'Bremen-Liga', "Hesenliga", 'Oberliga Mittelrhein', 'Oberliga Niederrhein', 'Oberliga HamBurg', 
            'Oberliga Nierdersachen', 'Oberliga Westfalen', 'Regionliga Bavaria', 'Regionliga Bavaria', 
            'Regionliga Bavaria', 'Regionliga Bavaria', 'Regionliga Bavaria',
            'Oberliga Baden-Wuertternberg',  "Oberliga NOFV North", "Oberliga NOFV South"]}, 
        {icon:"it", name:"Italy", leagues:["Serie A", "Serie B", "Serie C", "Serie D", "Compionato Primavera"]}, 
        {icon:"fr", name:"France", leagues:["Ligue 1", "National", "Championnat National 19"]}
    ])
    const [clickedParent, setClickedParent] = useState(
        // Array.from(AccordionHash).fill(false)
        Array.from(AccordionHash).map((obj,idx) => obj.active ? true : false)
    )
    const [clickedChild, setClickedChild] = useState(
        // Array.from(countries).fill(false)
        Array.from(countries).map((obj,idx) => obj.active ? true : false)
    )
    const [accordionActivate, setAccordionActivate] = useState(AccordionHash)
    const HandleClick = (e, position, place) => {
        e.stopPropagation()
        const event = e.currentTarget
        console.log(place)
        if (place === 'SideNavChild'){
            const clickedState = clickedChild.map((obj, index) => index === position ? !obj : false); 
            setClickedChild(clickedState)
        }
        else if (place === 'SideNavGrandChild'){
            const clickedState = clickedGrandChild.map((obj, index) => index === position ? !obj : false); 
            setClickedGrandChild(clickedState)
        }
        else { 
            if (place === 'SideNav'){
                const clickedState = clickedParent.map((obj, index) => index === position ? !obj : false); 
                setClickedParent(clickedState)
                const updateAccordion = accordionActivate.map((obj, index) => 
                    index === position ? {...obj, 'active': !obj.active} : {...obj, 'active': false}); 
                setAccordionActivate(updateAccordion)
                const allChild = clickedChild.map(() => false); 
                setClickedChild(allChild)
            }
            if (place === 'MainContentCard' || place === 'MainContent'){
                const updateAccordion = accordionActivate.map((obj, index) => 
                index === position ? {...obj, 'active': true} : {...obj, 'active': false}); 
                setAccordionActivate(updateAccordion)  
                //this block eliminates all useState record of any side-nav element clicked twice
                const clickedState = clickedParent.map((obj, index) => 
                index === position ? true : false); 
                setClickedParent(clickedState)
            }
        }
    }


    return (
            <div id="accordion" className={`${MainContentCard ? 'm-c-card' : MainContent ? 'm-content' : 's-nav'}`}>
                <div className={`accordion-wrap ${MainContentCard ? 'm-c-card' : MainContent ? 'm-content' : 's-nav'}`}>
                    <ul className="accordion-content">
                    {
                        accordionActivate
                        ? 
                        accordionActivate.map(({title, icon, active}, grandParentIdx) => 
                            (<li 
                                onClick={e => {
                                    let place
                                    MainContent ? place = 'MainContent'
                                    : MainContentCard ? place = 'MainContentCard'
                                    :  place = 'SideNav'
                                    return HandleClick(e, grandParentIdx, place)
                                }} 
                                 data-index={grandParentIdx} key={grandParentIdx}  title={title} id={`accordion${grandParentIdx}`}
                                 className={`accordion-item ${active ? 'active-li' : null}`}>
                                <div className="accordion-item__main-item">
                                    <div className="accordion-item-col" data-index={grandParentIdx}>
                                        <div className={`accordion-item__img-holder top ${active ? 'active-span' : null}`}
                                            data-index={grandParentIdx}>
                                            <span className="icon">{icon}</span>
                                        </div>
                                        <div className={`accordion-item__text ${active ? 'active-span' : null}`}
                                            data-index={grandParentIdx}>
                                            <span className="text" data-index={grandParentIdx}>{title}</span>
                                        </div>
                                    </div>
                                    {SideNav
                                    ? <div data-index={grandParentIdx} className={`accordion-item__img-holder btm`}> 
                                        <span className="icon" data-index={grandParentIdx}>
                                            {active ? null : <FontAwesomeIcon icon={faCaretDown} />}
                                        </span>
                                    </div>
                                    : MainContentCard
                                    ? <div data-index={grandParentIdx} className={`accordion-item__img-holder btm ${active ? 'active-span' : null}`}>
                                        <span className="icon" data-index={grandParentIdx}><FontAwesomeIcon icon={faCaretUp} /></span>
                                    </div>
                                    : null}
                                </div>
                                <div className="accordion-item__sub-item">
                                    {
                                    SideNav  && clickedParent[grandParentIdx]
                                    ? <ul className="list-item__s-nav"> 
                                        {
                                            countries.map(({icon, name, leagues}, parentIdx) => {
                                                    return (
                                                        <li 
                                                            onClick={e => HandleClick(e, parentIdx, "SideNavChild")} 
                                                            key={parentIdx} className="list-item__s-nav__item">
                                                            <div className="list-item__s-nav__item-main">
                                                                <div className="main-col">
                                                                    <span className="country-holder">
                                                                        <img src={`https://flagcdn.com/16x12/${icon}.png`} alt=""/>
                                                                    </span>
                                                                    <div className='list-item__s-nav__item__text' data-index={parentIdx}>
                                                                        <span className="text">{name}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="list-item__s-nav__item__img-holder" data-index={parentIdx}>
                                                                    <span className="icon" data-index={parentIdx}>
                                                                        <FontAwesomeIcon icon={clickedChild[parentIdx] ? faCaretDown : faCaretRight} className="icon"/>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {clickedChild[parentIdx]
                                                                ? <ul className="list-item__s-nav__item-list">
                                                                {
                                                                    leagues.map((itm, childIdx) => (
                                                                    <li 
                                                                        onClick={e => HandleClick(e, childIdx, "SideNavGrandChild")}  
                                                                        key={childIdx} className="list-item">
                                                                        <div className="main-col">
                                                                            <div className='list-item__text' data-index={parentIdx}>
                                                                                <span className="text">{itm}</span>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                                }
                                                            </ul>
                                                            : null}
                                                        </li>
                                                    )
                                            
                                            })
                                        }
                                    </ul>
                                    : null
                                    }
                                </div>
                            </li>)
                        )
                        : null
                    }
                    </ul>
                </div>
            </div>
    )
}

 export default Accordion;


