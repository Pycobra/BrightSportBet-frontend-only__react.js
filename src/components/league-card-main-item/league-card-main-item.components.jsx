import React, { useEffect, useState } from "react";
import "./league-card-main-item.styles.css";
import BetslipTableItem from "../betslip-table-item/betslip-table-item.components";
import { ReactComponent as CaretRight } from '../asset/caret-double-right-duotone.svg';



const LeagueCardMainItem = ({dateStr, data}) => {
    return (                                            
        <div className='league-card__main-item'>
            <div className='l-c__m-i__item'>
                <div className='l-c__m-i__item-head'>
                    <div className="content">
                        <span className="content-date">{dateStr}</span>
                        <div className="content-odd__head">
                            <div className="content-odd__head-col">
                                <span className="odd__head-text">1</span>
                                <span className="odd__head-text">X</span>
                                <span className="odd__head-text">2</span>
                            </div>
                            <div className="content-odd__head-col">
                                <span className="odd__head-text">1X</span>
                                <span className="odd__head-text">12</span>
                                <span className="odd__head-text">X2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='l-c__m-i__item'>
                <div className='l-c__m-i__item__wrap'>
                    {
                        data
                        ? data[dateStr].map((team,idx) =>
                        <BetslipTableItem  key={idx} data={team} index={idx}/>
                        )
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

 export default LeagueCardMainItem;


