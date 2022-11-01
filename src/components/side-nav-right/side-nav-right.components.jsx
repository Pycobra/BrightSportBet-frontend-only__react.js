import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import "./side-nav-right.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import FormInput from "../form-input/form-input.component";
import { ReactComponent as CaretLeft } from '../asset/caret-double-left-duotone.svg';
import { ReactComponent as CaretRight } from '../asset/caret-double-right-duotone.svg';
import CustomButton from "../custom-button/custom-button.component";
import CheckBoxInput from "../checkbox-input/checkbox-input.component";
import BookingBetslipFooter from "../booking-betslip-footer/booking-betslip-footer.components";
import BookingBetslip from "../booking-betslip/booking-betslip.components";




const SideNavRight = ({}) => {
    
    return (
        <div id="side-nav-right" className='s-nav__wrap'>
            <div className="container main">
                <div className="s-nav__item">
                    <div className="s-nav__head">
                        <div className="s-nav__head-row">
                            <div className="content">
                                <div className="s-nav__head-text"><span>Betslip</span><span></span></div>
                                <div className="s-nav__head-text"><span>My Bets</span><span className="text-active"></span></div>
                            </div>
                        </div>
                        <div className="s-nav__head-row">
                            <div className="content">
                                <span className="active-span">Singles</span>
                                <span>Multiples</span>
                            </div>
                        </div>
                        <div className="s-nav__head-row">
                            <div className="content">
                                <div className="s-nav__head-col"><CheckBoxInput inputType='CHECKBOX2'/><span className="text-active">Accept Odds Changes</span></div>
                                <div className="s-nav__head-col"><span>&#9993;</span><span className="text-active">&#9993;</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-nav__item">
                    <div className="s-nav__item-row u">
                        <span>Your Betslip is empty</span>
                        <span>Please make one or more selection in order to place a bet</span>
                    </div>
                    <div className="s-nav__item-row form">
                        <span>Book:</span>
                        <span>Please insert a booking number below</span>
                        <form>
                            <FormInput inputtype='SearchInputType2'/>
                            <CustomButton style={{fontWeight:'bold',color:'var(--yellow)'}} buttonType="FlatButton">Book</CustomButton>
                        </form>
                    </div>
                    <div className="s-nav__item-row form">
                        <span>Check Bet:</span>
                        <span>Insert a valid Bet ID to check status</span>
                        <form>
                            <FormInput inputtype='SearchInputType2'/>
                            <CustomButton style={{fontWeight:'bold',color:'var(--yellow)'}} buttonType="FlatButton">Check</CustomButton>
                        </form>
                    </div>
                </div>
                <div className="s-nav__item">
                    <BookingBetslip />
                </div>
                <div className="s-nav__item">
                    <BookingBetslipFooter />
                </div>
                <div className="s-nav__item">
                    <span className="color-break"></span>
                </div>
                <div className="s-nav__item">
                    <span className="img-holder">
                        <div className="carousel">
                            <img src={require("../../Media/vacation/gantas-vaiciulenas-4d3E8MYaK_Y-unsplash.png")}/>
                        </div>
                        <div className="nav-icon">
                            <span className="icon"><CaretLeft /></span>
                            <div>
                                <span className="icon icon-1">.</span>
                                <span className="icon icon-2">.</span>
                                <span className="icon icon-3">.</span>
                            </div>
                            <span className="icon"><CaretRight /></span>
                        </div>
                    </span>
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
 export default connect(mapStateToProps, mapDispatchToProps)(SideNavRight);



































 