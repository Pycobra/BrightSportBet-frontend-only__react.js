import React from 'react';
import { Link } from 'react-router-dom';
import "./landingpage.styles.css"
import SideNav from '../../components/side-nav/side-nav.components';
import MainContent from '../../components/main-content/main-content.components';
import BottomPallete from '../../components/bottom-pallete/bottom-pallete.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faHockeyPuck, faSoccerBall, faBasketball, faTableTennis, 
    faBaseball, faBaseballBatBall, faVolleyball, faHandsClapping
} from "@fortawesome/free-solid-svg-icons"


const Homepage = ({}) => {
    const leagueNames = [
        {title:'Live Betting', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:true}, 
        {title:'Uefa Europa League', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:false}, 
        {title:'Uefa Europa Confer...', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:false}, 
        {title:'England Premier League', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:true}, 
        {title:'Spain LaLiga', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:false}, 
        {title:'Italy Seria A', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:true}, 
        {title:'Germany Bundesliga', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:true}, 
        {title:'France Ligue 1', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:false}, 
        {title:'England Championship', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:false}, 
        {title:'ATP/WTA', icon: <FontAwesomeIcon icon={faTableTennis} className="icon"/>, active:false}, 
        {title:'NBA', icon: <FontAwesomeIcon icon={faBasketball} className="icon"/>, active:false}, 
        {title:'FIVB World Championship Women', icon: <FontAwesomeIcon icon={faVolleyball} className="icon"/>, active:false}, 
        {title:'F1 - USA Grand Prix', icon: <FontAwesomeIcon icon={faSoccerBall} className="icon"/>, active:false}
    ]

    const AccordionHash = [{title: 'Soccer', icon: <FontAwesomeIcon icon={faSoccerBall} />, active:false}, 
        {title: 'Special Soccer', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'Zoom Soccer', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'Antepost Soccer', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'Player Soccer', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'Tennis', icon: <FontAwesomeIcon icon={faTableTennis} />, active: false}, 
        {title: 'BasketBall', icon: <FontAwesomeIcon icon={faBasketball} />, active: false}, 
        {title: 'Special BasketBall', icon: <FontAwesomeIcon icon={faBasketball} />, active: false}, 
        {title: 'American Football', icon: <FontAwesomeIcon icon={faVolleyball} />, active: false}, 
        {title: 'BaseBall', icon: <FontAwesomeIcon icon={faBaseball} />, active: false}, 
        {title: 'HandBall', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'Rugby', icon: <FontAwesomeIcon icon={faBaseballBatBall} />, active: false}, 
        {title: 'VolleyBall', icon: <FontAwesomeIcon icon={faVolleyball} />, active: false}, 
        {title: 'Ice Hockey', icon: <FontAwesomeIcon icon={faHockeyPuck} />, active: false}, 
        {title: 'Waterpollo', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'Boxing', icon: <FontAwesomeIcon icon={faHandsClapping} />, active: false}, 
        {title: 'Cricket', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'Table Tennis', icon: <FontAwesomeIcon icon={faTableTennis} />, active: false}, 
        {title: 'Squash', icon: <FontAwesomeIcon icon={faBaseball} />, active: false}, 
        {title: 'Futsal', icon: <FontAwesomeIcon icon={faSoccerBall} />, active: false}, 
        {title: 'FloorBall', icon: <FontAwesomeIcon icon={faVolleyball} />, active: false}, 
        {title: 'Specials', icon: <FontAwesomeIcon icon={faBasketball} />, active: false}, 
        {title: 'Outright', icon: <FontAwesomeIcon icon={faBaseball} />, active: false}, 
    ]

    return (
        <div className='main-page'>
            <div className="main-page__wrap">
                <div style={{zIndex:'1'}} className="sport-toolbar__item">
                    <div className="sport-toolbar__wrap">
                        <div className="sport-toolbar__col">
                            <div className="sport-toolbar__time">
                                <div className="sport-toolbar__timezone">09:03&nbsp;Africa/Lagos</div>
                            </div>
                            
                            <ul className="sport-toolbar__nav">
                                <li className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Help</Link>
                                </li>
                                <li className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Stat</Link>
                                </li>
                                <li className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Live&nbsp;Score</Link>
                                </li>
                                <li className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Coupon&nbsp;Check</Link>
                                </li>
                                <li className="sport-toolbar__nav-item">
                                    <Link to="/" className="sport-toolbar__nav-link">Old&nbsp;Desktop</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="sport-toolbar__col">
                            <div className="sport-toolbar__info">
                                <Link to="/">Show Match ID</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{zIndex:'1'}} className="main-page__main-content">
                    <SideNav Leftside leagueNames={leagueNames} AccordionHash={AccordionHash}/>
                    <MainContent leagueNames={leagueNames} AccordionHash={AccordionHash}/>
                    <SideNav Rightside/>
                </div>
                <BottomPallete />
            </div>
        </div>
    )
 };
 export default Homepage;
