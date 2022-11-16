import React from "react";
import "./league-card.styles.css";
import LeagueCardMainItem from "../league-card-main-item/league-card-main-item.components";
// import { ReactComponent as CaretRight } from '../asset/caret-double-right-duotone.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faCaretRight } from "@fortawesome/free-solid-svg-icons"



const LeagueCard = ({data, leagueNames}) => {
    const name= Object.keys(data).map(title => title)
    const date= Object.keys(data[name])
    const values= data[name]

    
    const HandleSpanClick = e => {
        Array.from(e.target.parentElement.children).map(i => i.classList.remove('active-span'))
        e.target.classList.toggle('active-span')
    }
    
    return (    
        <div id="league-card">
            <div className="league-card__wrap">
                <div className="league-card__item">
                    <ul className='l-card__list'>
                        {
                            leagueNames.map(({title, icon, active}, idx) => 
                                <li onClick={e => HandleSpanClick(e)} key={idx} id={`l-card__list-item-${idx}`}
                                    className={`l-card__list-item ${name[0] === title ? 'active-span' : null}`} title={title}>
                                    {title}
                                </li>
                                )
                        }
                        <li className='l-card__list-item' title="empty">
                            <span to="/" title="empty"></span>
                        </li>
                        <li className='l-card__list-item' title="empty">
                            <span to="/" title="empty"></span>
                        </li>
                        <li className='l-card__list-item' title="empty">
                            <span to="/" title="empty"></span>
                        </li>
                    </ul>
                </div>
                <div className="league-card__item">
                        <div id="league-card__main-content">
                            <div className="container">
                                <div className="l-c-item__wrap">
                                    <div className="l-c-item">
                                        <div className="l-c-item__head">
                                            <span>{name}</span>
                                            <span>Home / Coupon</span>
                                        </div>
                                    </div>
                                    <div className="l-c-item">
                                        <div className="l-c-item__head">
                                            <div className="col" onClick={e => HandleSpanClick(e)}><span>Today</span><span>Week</span><span className="active-span">All</span></div>
                                            <div className="col"><span>Order By:</span><span>League</span></div>
                                        </div>
                                    </div>
                                    <div className="l-c-item">
                                        <div onClick={e => HandleSpanClick(e)} className="content">
                                            <span className="active-span">Popular Markets</span>
                                            <span>1st Half Markets</span>
                                            <span>2nd Half Markets</span>
                                            <span>Home / Away</span>
                                            <span>Combined Market</span>
                                            <span>Multi Goal</span>
                                            <span>Corner Markets</span>
                                            <span>Booking</span>
                                            <span>Other</span>
                                        </div>
                                    </div>
                                    <div className="l-c-item">
                                        <div onClick={e => HandleSpanClick(e)} className="content">
                                            <span className="active-span">Main Markets</span>
                                            <span>GG/NG</span>
                                            <span>DNB</span>
                                            <span>Handicap</span>
                                            <span>HT/FT</span>
                                            <span>Correct Score</span>
                                            <span>C.Score-Multi{'(1)'}</span>
                                            <span>C.Score-Multi{'(2)'}</span>
                                            <span>1X2 Interval 5/10/15</span>
                                            <span>1X2 Interval 20/25/30</span>
                                            <span>Score Interval 5/10</span>
                                            <span>Score Interval 20/30</span>
                                            <span>First/Last Goal</span>
                                            <span>Odd/Even</span>
                                            <span>Total Goal Exact</span>
                                        </div>
                                    </div>
                                    <div className="l-c-item">
                                        <div className="l-c-item__head-1">
                                            <span>{name}</span>
                                            <span><FontAwesomeIcon icon={faCaretRight} /></span>
                                        </div>
                                    </div>
                                    <div className="l-c-item">
                                        <div className="l-c-item__table">
                                            <div className="container">
                                                <div className='l-c-item__table-betting'>
                                                    <div className='l-c-item__table-betting-wrap'>
                                                        
                                                        <div className='l-c-item__table-item'>
                                                            <div className='l-c-item__table-head'>
                                                                <div className="content">
                                                                    <span>All</span>
                                                                    <div className="content-odd__title">
                                                                        <span className="content-odd__title-col">1/2</span> 
                                                                        <span className="content-odd__title-col">Double Chance</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='l-c-item__table-item'>
                                                        {
                                                            date
                                                            ? date.map((dateStr, idx) =>
                                                                <LeagueCardMainItem key={idx} dateStr={dateStr} data={values} />
                                                            )
                                                            : null
                                                        }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

 export default LeagueCard;


