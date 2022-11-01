import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import "./league-card.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import LeagueCardMainItem from "../league-card-main-item/league-card-main-item.components";
import { ReactComponent as CaretRight } from '../asset/caret-double-right-duotone.svg';



const LeagueCard = ({data, leagueNames}) => {
    const title= Object.keys(data).map(title => title)
    const date= Object.keys(data[title])
    const values= data[title]
    // var yy = []
    // console.log(title[0].split(' ').slice(1,).map(i => yy.join(i) ))
    // const title2 = `${title[0].split(' ').slice(1,)}, ${title[0].split(' ')[0]}`
    // console.log(title2)
    
    // useEffect(() => {
    //     const ddd = document.querySelectorAll('')
    // })
    
    return (    
        <div id="league-card">
            <div className="league-card__wrap">
                <div className="league-card__item">
                    <ul className='l-card__list'>
                        {
                            leagueNames.map(({title,icon}, idx) => 
                                <li key={idx} className='l-card__list-item' title={title} id={`l-card__list-item-${idx}`}>
                                    <span to="/" id={`l-card__list-item-${idx}`} title={title}>{title}</span>
                                </li>)
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
                                            <span>{title}</span>
                                            <span>Home / Coupon</span>
                                        </div>
                                    </div>
                                    <div className="l-c-item">
                                        <div className="l-c-item__head">
                                            <div className="col"><span>Today</span><span>Week</span><span className="active-span">All</span></div>
                                            <div className="col"><span>Order By:</span><span>League</span></div>
                                        </div>
                                    </div>
                                    <div className="l-c-item">
                                        <div className="content">
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
                                        <div className="content">
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
                                            <span>{title}</span>
                                            <span><CaretRight /></span>
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

const mapStateToProps = createStructuredSelector({
    selectAllSongAlbumPhotos: SelectAllSongAlbumPhotos,
    profileAllArtists: ProfileAllArtists,
    selectAllSong: SelectAllSongAlbumPhotos,
})
 const mapDispatchToProps = (dispatch) => ({
    fetchAllArtists: () => dispatch(fetchAllArtistStart()),
    fetchAllSongs: () => dispatch(fetchAllSongStart()),
    fetchAllPhotos: () => dispatch(fetchAllPhotoStart()),
 })
 export default connect(mapStateToProps, mapDispatchToProps)(LeagueCard);


