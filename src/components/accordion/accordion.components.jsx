import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import "./accordion.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import { ReactComponent as Caret } from '../asset/caret-down-white.svg';
import { ReactComponent as CaretGrey } from '../asset/caret-down-grey.svg';


const Accordion = ({AccordionHash, SideNav, MainContentCard}) => {
    return (
            <div id="accordion">
                <div className="accordion-wrap">
                    {SideNav ? <span className="accordion-header">SPORTS</span> : null}
                    <div className={`accordion-content ${MainContentCard ? 'm-c-card' : null}`}>
                    {
                        AccordionHash
                        ? 
                        AccordionHash.map(({title, icon, active}, idx) => 
                            (<div key={idx} className="accordion-item" title={title} id={`accordion${idx}`}>
                                <div className="accordion-item-col">
                                    <div className="accordion-item__img-holder">
                                        {icon}
                                    </div>
                                    <span className='accordion-item__text'>{title}</span>
                                    {MainContentCard 
                                    ? active ? <Caret /> : <CaretGrey />
                                    : null}
                                </div>
                                {SideNav 
                                ? <span className="accordion-item__img-holder">
                                    <Caret />
                                </span>
                                : null}
                            </div>)
                        )
                        : null
                    }
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
 export default connect(mapStateToProps, mapDispatchToProps)(Accordion);


