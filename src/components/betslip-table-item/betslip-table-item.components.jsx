import React from "react";
import "./betslip-table-item.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignRight } from "@fortawesome/free-solid-svg-icons"




const BetslipTableItem = ({data, index, tableType}) => {
    const {time, awayTeam, homeTeam, scoreHome, scoreAway, homeW, x, awayW, homeDC, DC, awayDC} = data
    
    const HandleOddClick = e => {
        e.target.classList.toggle('active-odd-text')
    }
    return (
    <div className="table-item">
        <div className="table-item-col">
            <div className="table-item__time-text">{time}</div>
            <div className="table-item__team">
                <div className="table-item__team-wrap">
                    <span className="team-text home">{homeTeam}</span>
                    <span className="team-text away">{awayTeam}</span>
                </div>
            </div>
        </div>
        <div className="table-item-col">
            <div className="table-item__img-holder">
                <span className="icon"><FontAwesomeIcon icon={faAlignRight} /></span>
            </div> 
            <div className="table-item__score">
            {tableType === 'LiveBetting'
            ?
                <div className="table-item__score-wrap">
                    <span className="score-text home">{scoreHome}</span>
                    <span className="score-text away">{scoreAway}</span>
                </div>
            : null}
            </div>
            <div className="table-item__odd">
                <div className="table-item__odd-wrap">
                    <div className="table-item__odd-item">
                        <span onClick={e => HandleOddClick(e)} className={`odd-text ${index === 0
                        ? 'active-odd-text' : null}`}>{homeW}</span>
                        <span onClick={e => HandleOddClick(e)} className="odd-text">{x}</span>
                        <span onClick={e => HandleOddClick(e)} className="odd-text">{awayW}</span>
                    </div>
                    <div className="table-item__odd-item">
                        <span onClick={e => HandleOddClick(e)} className="odd-text">{homeDC}</span>
                        <span onClick={e => HandleOddClick(e)} className="odd-text">{DC}</span>
                        <span onClick={e => HandleOddClick(e)} className="odd-text">{awayDC}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
                                                    
    )
}

 export default BetslipTableItem;


