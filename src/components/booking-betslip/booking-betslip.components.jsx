import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./booking-betslip.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import CheckBoxInput from "../checkbox-input/checkbox-input.component";


const BookingBetslip = ({}) => {
    
    return (
        <div className="booking-betslip">
            <div className="booking-betslip__wrap">
                <div className="container">
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Everton - Wolves</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Premier League</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.44</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Chelsea - Nottinham Forest</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Premier League</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>2.54</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Liverpool - West Ham</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Premier League</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.22</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Ac milan - Benevento</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Serie A</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.22</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Atalanta - Cromonese</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Serie A</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>3.04</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Roma - Empoli</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Serie A</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>1.94</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Bayern - Ausburg</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Bundesliga</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>2.01</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-betslip__item">
                        <div className="booking-betslip__head">
                            <div className="booking-betslip__text-place">
                                <CheckBoxInput inputType='CHECKBOX2'/>
                                <span>Stuttgart - Union Berlin</span>
                            </div>
                            <div className="booking-betslip__img-holder">
                                <span>&#9993;</span>
                            </div>
                        </div>
                        <div className="booking-betslip__body">
                            <div className="booking-betslip__body-col">
                                <span>1</span>
                                <span>Home/Away</span>
                                <span>Bundesliga</span>
                            </div>
                            <div className="booking-betslip__body-col">
                                <span>5.04</span>
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
//  export default SideBar;
 export default connect(mapStateToProps, mapDispatchToProps)(BookingBetslip);



































 