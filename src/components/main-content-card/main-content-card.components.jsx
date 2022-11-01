import React, { useEffect, useState } from "react";
import "./main-content-card.styles.css";
import Accordion from "../accordion/accordion.components";
import BetslipTableItem from "../betslip-table-item/betslip-table-item.components";

const MainContentCard = ({LiveBetting, Upcoming, AccordionHash, data}) => {
    
    return (
        <div id="main-content-card">
            <div className="container">
                <div className="m-c-c-item__wrap">
                    <div className="m-c-c-item">
                        <div className="m-c-c-item__head-1">
                            <span>{LiveBetting ? 'Live Highlights' : Upcoming ? 'Upcoming' : null}</span>
                            <span>{LiveBetting ? 'View Live Highlights' : Upcoming ? 'View Upcoming' : null}</span>
                        </div>
                    </div>
                    <div className="m-c-c-item">
                        <div className="m-c-c-item__head-2">
                            <Accordion AccordionHash={AccordionHash} MainContentCard/> 
                        </div>
                    </div>
                    <div className="m-c-c-item">
                        <div className="m-c-c-item__table">
                            <div className="container">
                                <div className={`m-c-c-item__table-betting 
                                    ${LiveBetting ? 'live-betting' : 'sport-betting'}`}>
                                    <div className={`m-c-c-item__table-betting-wrap 
                                        ${LiveBetting ? 'l-betting__wrap' : 's-betting__wrap'}`}>
                                        
                                        <div className={`m-c-c-item__table-item 
                                            ${LiveBetting ? 'l-betting__item' : 's-betting__item'}`}>
                                            <div className={`m-c-c-item__table-head 
                                                ${LiveBetting ? 'l-betting__item__head-1' : 's-betting__item__head-1'}`}>
                                                <div className="content">
                                                    <span>{Upcoming ? 'Today' : null}</span>
                                                    <div className="content-odd__title">
                                                        <span className="content-odd__title-col">1/2</span> 
                                                        <span className="content-odd__title-col">Double Chance</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`m-c-c-item__table-item 
                                            ${LiveBetting ? 'l-betting__item' : 's-betting__item'}`}>
                                            <div className={`m-c-c-item__table-head 
                                                ${LiveBetting ? 'l-betting__item__head-2' : 's-betting__item__head-2'}`}>
                                                <div className="content">
                                                    <span className="content-date">Thur 13 Oct</span>
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
                                        <div className={`m-c-c-item__table-item 
                                            ${LiveBetting ? 'l-betting__item' : 's-betting__item'}`}>
                                            <div className={`m-c-c-item__table-item__wrap 
                                                ${LiveBetting ? 'l-betting__item-wrap' : 's-betting__item-wrap'}`}>
                                                {
                                                    data
                                                    ? data.map((team,idx) =>
                                                    <BetslipTableItem  key={idx} data={team} tableType={
                                                        LiveBetting ? 'LiveBetting' : Upcoming ? 'Upcoming' : null}/>
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
    )
}

 export default MainContentCard;


