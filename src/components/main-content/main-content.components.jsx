import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import "./main-content.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import MainContentCard from "../main-content-card/main-content-card.components";
import LeagueCard from "../league-card/league-card.components";


const MainContent = ({leagueNames}) => {
    const LiveBetting__AccordionHash = [
        {title: 'Soccer', icon: <span>&#9993;</span>, active:true}, 
        {title: 'Tennis', icon: <span>&#9993;</span>}, 
        {title: 'BasketBall', icon: <span>&#9993;</span>},
        {title: 'VolleyBall', icon: <span>&#9993;</span>}, 
        {title: 'Ice Hockey', icon: <span>&#9993;</span>}, 
        {title: 'Table Tennis', icon: <span>&#9993;</span>},
        {title: 'Beach Volley', icon: <span>&#9993;</span>}
    ]
    const Upcoming__AccordionHash = [
        {title: 'Soccer', icon: <span>&#9993;</span>, active:true}, 
        {title: 'Tennis', icon: <span>&#9993;</span>}, 
        {title: 'BasketBall', icon: <span>&#9993;</span>},
        {title: 'BaseBall', icon: <span>&#9993;</span>}, 
        {title: 'HandBall', icon: <span>&#9993;</span>}, 
        {title: 'Rugby', icon: <span>&#9993;</span>},
    ]
    const [teamsA, setTeamsA] = useState([
        {homeTeam:'Z-Everton', awayTeam:'Z-Wolves', time:"66'",scoreHome:2, scoreAway:3, 
        homeW:1.44, x:3.13, awayW:2.57, homeDC:2.99, DC:1.23, awayDC:3.63}, 
        {homeTeam:'Z-Newcastle', awayTeam:'Z-Arsenal', time:"90 + 5'",scoreHome:5, 
        scoreAway:3, homeW:2.78, x:3.11, awayW:1.23, homeDC:2.05, DC:3.23, awayDC:2.76},
        {homeTeam:'Z-Bolton', awayTeam:'Z-Aston Villa', time:"12'",scoreHome:2, 
        scoreAway:1, homeW:1.93, x:2.03, awayW:5.23, homeDC:2.23, DC:1.43, awayDC:5.99},
    ])
    const [teamsB, setTeamsB] = useState([
        {homeTeam:'Barcelona', awayTeam:'Real Madrid', time:'9:00',scoreHome:2, scoreAway:3, 
        homeW:1.23, x:3.23, awayW:2.55, homeDC:2.23, DC:2.23, awayDC:2.63}, 
        {homeTeam:'Villareal', awayTeam:'Espanyol', time:'9:30',scoreHome:5, scoreAway:3, 
        homeW:2.23, x:3.11, awayW:1.23, homeDC:2.25, DC:2.23, awayDC:2.23},
        {homeTeam:'Atletico', awayTeam:'Valencia', time:'10:00',scoreHome:2, scoreAway:1, 
        homeW:2.43, x:2.23, awayW:5.23, homeDC:2.23, DC:2.43, awayDC:2.99}, 
        {homeTeam:'Athletic Bilbao', awayTeam:'Tenerife', time:'10:10',scoreHome:2, 
        scoreAway:2, homeW:4.23, x:5.23, awayW:4.23, homeDC:2.83, DC:2.33, awayDC:2.23},
        {homeTeam:'Real Betis', awayTeam:'Real Sociedad', time:'10:55',scoreHome:1, 
        scoreAway:1, homeW:1.23, x:3.23, awayW:2.23, homeDC:1.13, DC:2.03, awayDC:4.23}, 
        {homeTeam:'Celt Vigo', awayTeam:'Real Zaragoza', time:'11:30',scoreHome:0, 
        scoreAway:0, homeW:2.53, x:2.27, awayW:2.25, homeDC:2.21, DC:3.23, awayDC:2.23},
        {homeTeam:'Grenada', awayTeam:'Osasuna', time:'11:40',scoreHome:5, scoreAway:0, 
        homeW:2.23, x:3.23, awayW:2.53, homeDC:5.23, DC:2.24, awayDC:2.29}, 
        {homeTeam:'Sevilla', awayTeam:'Albacete', time:'12:00',scoreHome:3, scoreAway:0, 
        homeW:7.23, x:2.23, awayW:3.23, homeDC:2.03, DC:3.33, awayDC:9.23},
    ])
    const [league, setLeague] = useState([
        {'English Premier League':{
            'Fri 16 Sep':[
                {homeTeam:'Everton', awayTeam:'Wolves', time:"09:44",scoreHome:2, scoreAway:3, 
                homeW:1.44, x:3.13, awayW:2.57, homeDC:2.99, DC:1.23, awayDC:3.63}, 
                {homeTeam:'Newcastle', awayTeam:'Arsenal', time:"12:34",scoreHome:5, 
                scoreAway:3, homeW:2.78, x:3.11, awayW:1.23, homeDC:2.05, DC:3.23, awayDC:2.76},
                {homeTeam:'Bolton', awayTeam:'Aston Villa', time:"01:22",scoreHome:2, 
                scoreAway:1, homeW:1.93, x:2.03, awayW:5.23, homeDC:2.23, DC:1.43, awayDC:5.99},
            ],
            'Sat 17 Sep':[
                {homeTeam:'Chelsea', awayTeam:'Nottingham Forest', time:"12:00",scoreHome:2, scoreAway:3, 
                homeW:2.54, x:2.13, awayW:7.57, homeDC:2.99, DC:1.23, awayDC:7.63}, 
                {homeTeam:'Man United', awayTeam:'Southampton', time:"13:00",scoreHome:5, 
                scoreAway:3, homeW:7.78, x:7.11, awayW:2.23, homeDC:5.05, DC:4.23, awayDC:2.76},
                {homeTeam:'Man City', awayTeam:'Swansea', time:"16:00",scoreHome:2, 
                scoreAway:1, homeW:1.93, x:2.03, awayW:6.13, homeDC:7.23, DC:8.43, awayDC:5.99},
            ],
            'Sun 18 Sep':[
                {homeTeam:'Liverpool', awayTeam:'West Ham', time:"11:11",scoreHome:2, scoreAway:3, 
                homeW:1.22, x:4.53, awayW:2.57, homeDC:7.99, DC:1.23, awayDC:6.63}, 
                {homeTeam:'Leicester City', awayTeam:'West Brom', time:"12:00",scoreHome:5, 
                scoreAway:3, homeW:1.78, x:2.11, awayW:3.23, homeDC:2.05, DC:3.23, awayDC:2.76},
                {homeTeam:'Bournemouth', awayTeam:'Brighton', time:"13:09",scoreHome:2, 
                scoreAway:1, homeW:3.93, x:2.03, awayW:5.23, homeDC:2.23, DC:8.43, awayDC:5.99},
                {homeTeam:'Totenham', awayTeam:'Birmingham', time:"14:43",scoreHome:5, 
                scoreAway:3, homeW:5.78, x:3.11, awayW:1.23, homeDC:2.05, DC:4.23, awayDC:2.76},
                {homeTeam:'Portmouth', awayTeam:'Blackburn', time:"16:00",scoreHome:2, 
                scoreAway:1, homeW:8.93, x:2.03, awayW:9.23, homeDC:2.23, DC:1.46, awayDC:5.99},
            ]
        }},
        {'Italy Seria A':{
            'Fri 16 Sep':[
                {homeTeam:'Ac Milan', awayTeam:'Benevento', time:"08:09",scoreHome:2, scoreAway:3, 
                homeW:1.22, x:3.13, awayW:2.57, homeDC:2.99, DC:1.23, awayDC:3.63}, 
                {homeTeam:'Inter Milan', awayTeam:'Bologna', time:"09:25",scoreHome:5, 
                scoreAway:3, homeW:2.78, x:3.11, awayW:1.23, homeDC:2.05, DC:3.23, awayDC:2.76},
                {homeTeam:'Juventus', awayTeam:'Hella Verona', time:"10:00",scoreHome:2, 
                scoreAway:1, homeW:1.93, x:2.03, awayW:5.23, homeDC:2.23, DC:1.43, awayDC:5.99},
            ],
            'Sat 17 Sep':[
                {homeTeam:'Atlanta', awayTeam:'Cromonese', time:"11:10",scoreHome:2, scoreAway:3, 
                homeW:3.04, x:2.13, awayW:7.57, homeDC:2.99, DC:1.23, awayDC:7.63}, 
                {homeTeam:'Florentina', awayTeam:'Spezia', time:"13:00",scoreHome:5, 
                scoreAway:3, homeW:7.78, x:7.11, awayW:2.23, homeDC:5.05, DC:4.23, awayDC:2.76},
                {homeTeam:'Napoli', awayTeam:'Salernitana', time:"13:00",scoreHome:2, 
                scoreAway:1, homeW:1.93, x:2.03, awayW:6.13, homeDC:7.23, DC:8.43, awayDC:5.99},
            ],
            'Sun 18 Sep':[
                {homeTeam:'Roma', awayTeam:'Empoli', time:"14:45",scoreHome:2, scoreAway:3, 
                homeW:1.94, x:4.53, awayW:2.57, homeDC:7.99, DC:1.23, awayDC:6.63}, 
                {homeTeam:'Torino', awayTeam:'Monza', time:"15:00'",scoreHome:5, 
                scoreAway:3, homeW:1.78, x:2.11, awayW:3.23, homeDC:2.05, DC:3.23, awayDC:2.76},
                {homeTeam:'Udinese', awayTeam:'Spezia', time:"16:05",scoreHome:2, 
                scoreAway:1, homeW:3.93, x:2.03, awayW:5.23, homeDC:2.23, DC:8.43, awayDC:5.99},
                {homeTeam:'Sassuolo', awayTeam:'Sampdoria', time:"19:44'",scoreHome:5, 
                scoreAway:3, homeW:5.78, x:3.11, awayW:1.23, homeDC:2.05, DC:4.23, awayDC:2.76},
                {homeTeam:'Lazio', awayTeam:'Como', time:"20:00",scoreHome:2, 
                scoreAway:1, homeW:8.93, x:2.03, awayW:9.23, homeDC:2.23, DC:1.46, awayDC:5.99},
            ]
        }},
        {'German Bundesliga':{
            'Fri 16 Sep':[
                {homeTeam:'Bayern Munchen', awayTeam:'Ausburg', time:"10:00",scoreHome:2, scoreAway:3, 
                homeW:2.01, x:3.13, awayW:2.57, homeDC:2.99, DC:1.23, awayDC:3.63}, 
                {homeTeam:'Borrusia Dortmond', awayTeam:'Werder Bremen', time:"11:00",scoreHome:5, 
                scoreAway:3, homeW:2.78, x:3.11, awayW:1.23, homeDC:2.05, DC:3.23, awayDC:2.76},
                {homeTeam:'Freigburg', awayTeam:'Eintrant Frankfurt', time:"12:00",scoreHome:2, 
                scoreAway:1, homeW:1.93, x:2.03, awayW:5.23, homeDC:2.23, DC:1.43, awayDC:5.99},
            ],
            'Sat 17 Sep':[
                {homeTeam:'Stuttgart', awayTeam:'Union Berlin', time:"13:00",scoreHome:2, scoreAway:3, 
                homeW:5.04, x:2.13, awayW:7.57, homeDC:2.99, DC:1.23, awayDC:7.63}, 
                {homeTeam:'Bochum', awayTeam:'Borusia Mochengladbach', time:"14:00",scoreHome:5, 
                scoreAway:3, homeW:7.78, x:7.11, awayW:2.23, homeDC:5.05, DC:4.23, awayDC:2.76},
                {homeTeam:'Leipzig', awayTeam:'Hamburg', time:"15:00",scoreHome:2, 
                scoreAway:1, homeW:1.93, x:2.03, awayW:6.13, homeDC:7.23, DC:8.43, awayDC:5.99},
                {homeTeam:'Nurnberg', awayTeam:'Wolfburg', time:"16:00",scoreHome:5, 
                scoreAway:3, homeW:7.78, x:7.11, awayW:2.23, homeDC:5.05, DC:4.23, awayDC:2.76},
                {homeTeam:'Hannover', awayTeam:'Heidermin', time:"17:00",scoreHome:2, 
                scoreAway:1, homeW:1.93, x:2.03, awayW:6.13, homeDC:7.23, DC:8.43, awayDC:5.99},
            ]
        }}
    ])
    return (
        <div id="main-content">
            <div id="m-con-item">
                <div className="container">
                    <div className="m-con-item__wrap">
                        <div className="m-con-item__top-level">
                            <div className="carousel" style={{userSelect:'none'}}>
                                <img src={require("../../Media/others/xps-8pb7Hq539Zw-unsplash.png")}/>
                            </div>
                        </div>
                        <div className="m-con-item__btm-level">
                            <MainContentCard AccordionHash={LiveBetting__AccordionHash} LiveBetting data={teamsA}/>
                            <MainContentCard AccordionHash={Upcoming__AccordionHash} Upcoming data={teamsB}/>
                            
                            {
                                league
                                ? league.map((data, idx) => <LeagueCard key={idx} data={data} leagueNames={leagueNames}/>)
                                : null
                            }
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
//  export default SideBar;
 export default connect(mapStateToProps, mapDispatchToProps)(MainContent);


