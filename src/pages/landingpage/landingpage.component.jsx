import React, {useEffect, useMemo, useReducer, useDispatch} from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./landingpage.styles.css"
import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from "react-redux";
import { SelectAllSongAlbumPhotos, SelectSortedSongs } from "../../redux/songs/songs.selectors";
import { SelectProfileOfSingleArtists } from "../../redux/profile/profile.selectors";
import { ReactComponent as StarSvg } from '../../components/asset/star.svg';
import SideNav from '../../components/side-nav/side-nav.components';
import MainContent from '../../components/main-content/main-content.components';



const Homepage = ({}) => {
    const [leagueNames, setLeagueNames] = useState([
    {title:'Live Betting', icon: <span>&#9993;</span>}, 
    {title:'Uefa Europa League', icon: <span>&#9993;</span>}, 
    {title:'Uefa Europa Confer...', icon: <span>&#9993;</span>}, 
    {title:'England Premier League', icon: <span>&#9993;</span>}, 
    {title:'Spain LaLiga', icon: <span>&#9993;</span>}, 
    {title:'Italy Seria A', icon: <span>&#9993;</span>}, 
    {title:'Germany Bundesliga', icon: <span>&#9993;</span>}, 
    {title:'France Ligue 1', icon: <span>&#9993;</span>}, 
    {title:'England Championship', icon: <span>&#9993;</span>}, 
    {title:'ATP/WTA', icon: <span>&#9993;</span>}, 
    {title:'NBA', icon: <span>&#9993;</span>}, 
    {title:'FIVB World Championship Women', icon: <span>&#9993;</span>}, 
    {title:'F1 - USA Grand Prix', icon: <span>&#9993;</span>}])
    return (
        <div className='main-page'>
            <div className="main-page__wrap">
                <div className="sport-toolbar__item">
                    <div className="sport-toolbar__wrap">
                        <div className="sport-toolbar__col">
                            <div className="sport-toolbar__time">
                                <div className="sport-toolbar__timezone">09:03&nbsp;Africa/Lagos</div>
                            </div>
                            
                            <div className="sport-toolbar__nav">
                                <div className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Help</Link>
                                </div>
                                <div className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Stat</Link>
                                </div>
                                <div className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Live&nbsp;Score</Link>
                                </div>
                                <div className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Coupon&nbsp;Check</Link>
                                </div>
                                <div className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Old&nbsp;Desktop</Link>
                                </div>
                            </div>
                        </div>

                        <div className="sport-toolbar__col">
                            <div className="sport-toolbar__info">
                                <Link to="/">Show Match ID</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-page__main-content">
                    <SideNav Type1 leagueNames={leagueNames}/>
                    <MainContent leagueNames={leagueNames}/>
                    <SideNav Type2/>
                </div>
            </div>
        </div>
    )
 };

const mapStateToProps = createStructuredSelector({
    selectAllSongAlbumPhotos: SelectAllSongAlbumPhotos,
    selectSortedSongs: SelectSortedSongs,
    selectProfileOfSingleArtists: SelectProfileOfSingleArtists
})
 export default connect(mapStateToProps)(Homepage);
