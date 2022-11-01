import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import "./side-nav.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import FormInput from "../form-input/form-input.component";
import { ReactComponent as StarSvg } from '../asset/star.svg';
import { ReactComponent as StarSvg2 } from '../asset/star2.svg';
import { ReactComponent as User } from '../asset/user.svg';
import FormGroup from "../form-group/form-group.components";
import CustomButton from "../custom-button/custom-button.component";
import Accordion from "../accordion/accordion.components";
import CheckBoxInput from "../checkbox-input/checkbox-input.component";
import SideNavLeft from "../side-nav-left/side-nav-left.components";
import SideNavRight from "../side-nav-right/side-nav-right.components";








const SideNav = ({Type1, Type2, leagueNames}) => {
    const AccordionHash = [{title: 'Soccer', icon: <span>&#9993;</span>}, {title: 'Special Soccer', icon: <span>&#9993;</span>}, {title: 'Zoom Soccer', icon: <span>&#9993;</span>}, 
            {title: 'Antepost Soccer', icon: <span>&#9993;</span>}, {title: 'Player Soccer', icon: <span>&#9993;</span>}, 
            {title: 'Tennis', icon: <span>&#9993;</span>}, {title: 'BaseBall', icon: <span>&#9993;</span>}, {title: 'Special BasketBall', icon: <span>&#9993;</span>}, 
            {title: 'American Football', icon: <span>&#9993;</span>}, {title: 'BaseBall', icon: <span>&#9993;</span>}, {title: 'HandBall', icon: <span>&#9993;</span>}, 
            {title: 'Rugby', icon: <span>&#9993;</span>}, {title: 'VolleyBall', icon: <span>&#9993;</span>}, {title: 'Ice Hockey', icon: <span>&#9993;</span>}, 
            {title: 'Waterpollo', icon: <span>&#9993;</span>}, {title: 'Boxing', icon: <span>&#9993;</span>}, {title: 'Cricket', icon: <span>&#9993;</span>}, 
            {title: 'Table Tennis', icon: <span>&#9993;</span>}, {title: 'Squash', icon: <span>&#9993;</span>}, {title: 'Futsal', icon: <span>&#9993;</span>}, 
            {title: 'FloorBall', icon: <span>&#9993;</span>}, {title: 'Specials', icon: <span>&#9993;</span>}, {title: 'Outright'}]
    return (
        <aside id='side-nav' className={`${Type1 ? "left-side" : 'right-side'}`}>
            <div className="wrap">
                {
                Type1 
                ? 
                <SideNavLeft  leagueNames={leagueNames}/>
                : 
                <SideNavRight />
                }
            </div>
        </aside>
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
 export default connect(mapStateToProps, mapDispatchToProps)(SideNav);



































 