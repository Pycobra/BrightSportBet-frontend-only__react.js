import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import "./side-nav-left.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import FormGroup from "../form-group/form-group.components";
import Accordion from "../accordion/accordion.components";


const SideNavLeft = ({leagueNames}) => {
    console.log(leagueNames)
    const AccordionHash = [{title: 'Soccer', icon: <span>&#9993;</span>}, {title: 'Special Soccer', icon: <span>&#9993;</span>}, {title: 'Zoom Soccer', icon: <span>&#9993;</span>}, 
            {title: 'Antepost Soccer', icon: <span>&#9993;</span>}, {title: 'Player Soccer', icon: <span>&#9993;</span>}, 
            {title: 'Tennis', icon: <span>&#9993;</span>}, {title: 'BaseBall', icon: <span>&#9993;</span>}, {title: 'Special BasketBall', icon: <span>&#9993;</span>}, 
            {title: 'American Football', icon: <span>&#9993;</span>}, {title: 'BaseBall', icon: <span>&#9993;</span>}, {title: 'HandBall', icon: <span>&#9993;</span>}, 
            {title: 'Rugby', icon: <span>&#9993;</span>}, {title: 'VolleyBall', icon: <span>&#9993;</span>}, {title: 'Ice Hockey', icon: <span>&#9993;</span>}, 
            {title: 'Waterpollo', icon: <span>&#9993;</span>}, {title: 'Boxing', icon: <span>&#9993;</span>}, {title: 'Cricket', icon: <span>&#9993;</span>}, 
            {title: 'Table Tennis', icon: <span>&#9993;</span>}, {title: 'Squash', icon: <span>&#9993;</span>}, {title: 'Futsal', icon: <span>&#9993;</span>}, 
            {title: 'FloorBall', icon: <span>&#9993;</span>}, {title: 'Specials', icon: <span>&#9993;</span>}, {title: 'Outright', icon: <span>&#9993;</span>}]
    
    return (
        <div id="side-nav-left" className='s-nav__wrap'>
            <div className="s-nav__item">
                <FormGroup SideBarType/>
                <div className='s-nav__top-level__ul-wrap'>
                    <ul className='s-nav__list'>
                     {
                     leagueNames.map(({title,icon}, idx) => 
                     <li key={idx} className='s-nav__list-item' title={title} id={`s-nav__list-item-${idx}`}>
                         {icon}
                         <Link className={
                            title==='Live Betting' || title==='Italy Seria A' ||
                            title==='Germany Bundesliga' || title==='England Premier League'
                            ? 'active-link' : null} to="/" id={`s-nav__list-item-${idx}`} title="Live Betting">{title}</Link>
                     </li>
                     )
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
                <Accordion AccordionHash={AccordionHash} SideNav/>
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
 export default connect(mapStateToProps, mapDispatchToProps)(SideNavLeft);



































 