import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./booking-betslip-footer.styles.css";
import { fetchAllArtistStart } from "../../redux/profile/profile.actions";
import { fetchAllSongStart } from "../../redux/songs/songs.actions";
import { fetchAllPhotoStart } from "../../redux/photo/photo.actions";
import { SelectAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import { ProfileAllArtists } from "../../redux/profile/profile.selectors";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


const BookingBetslipFooter = ({}) => {
    
    return (
        <div className="booking-betslip__footer">
            <div className="booking-betslip__footer__wrap">
                <div className="container">
                    <div className="booking-betslip__footer__item">
                        <div className="booking-betslip__footer__row">
                            <span>Single</span><span className="active-span">multiples</span><span>system</span>
                        </div>
                        <div className="booking-betslip__footer__row">
                            <div className="booking-betslip__footer__col">
                                <div className="booking-betslip__odds">
                                    <span>Total Odds:</span><span>3:19</span>
                                </div>
                                <div className="booking-betslip__amount">
                                    <span>N</span>
                                    <FormInput inputtype='SmallInput'/>
                                </div>
                            </div>
                            <div className="booking-betslip__footer__col">
                                <span>Clear</span><span>100</span><span>200</span><span>500</span><span>1000</span>
                            </div>
                        </div>
                        <div className="booking-betslip__footer__row">
                            <div className="booking-betslip__footer__col">
                                <span>Total Stake</span>
                                <span>0.00</span>
                            </div>
                            <div className="booking-betslip__footer__col">
                                <span>Potential Win</span>
                                <span>0.00</span>
                            </div>
                            <CustomButton buttonType="MajorButton">Book A Bet</CustomButton>

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
 export default connect(mapStateToProps, mapDispatchToProps)(BookingBetslipFooter);



































 