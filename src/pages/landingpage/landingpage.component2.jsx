import React, {useEffect, useReducer, useDispatch} from 'react';
import { useState } from 'react';
import "./landingpage.styles.css"
import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from "react-redux";
import { SelectAllSongAlbumPhotos, SelectSortedSongs } from "../../redux/songs/songs.selectors";
import { SelectProfileOfSingleArtists } from "../../redux/profile/profile.selectors";
import { ReactComponent as StarSvg } from '../../components/asset/star.svg';
import CustomButton from '../../components/custom-button/custom-button.component';
import SideBar from '../../components/side-bar/side-bar.components';
import { fetchAllSongAlbumPhotos } from "../../redux/songs/songs.selectors";
import Views from '../../components/views/views/views.components';
import ArtistView from '../../components/views/artist-view/artist-view.components';






// const INITIAL_STATE = {albumPhotoCheckedState: [], freshSortingSearch: false, sortSearch: ""}
// const reducer = (state, action) => {
//     switch (action.type){
//       case 'SET_ALBUM_PHOTO_CHECKED_STATE':
//             return {...state, albumPhotoCheckedState: action.payload}
//       case 'SET_FRESH_SORTING_SEARCH':
//             return {...state, freshSortingSearch: action.payload}
//       case 'SET_SORT_SEARCH':
//             return {...state, sortSearch: action.payload}
//       default:
//             return state
//     }
// }
// const setAlbumPhotoCheckedState = i => ({type: 'SET_ALBUM_PHOTO_CHECKED_STATE', payload: i})
// const setFreshSortingSearch = i => ({type: 'SET_FRESH_SORTING_SEARCH', payload: i})
// const setSortSearch = i => ({type: 'SET_SORT_SEARCH', payload: i})

 const Homepage = ({fetchAllSongAlbumPhotos, selectAllSongAlbumPhotos, selectSortedSongs,
    selectProfileOfSingleArtists}) => {
    // const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    // const {albumPhotoCheckedState, freshSortingSearch, sortSearch} = state;
    const [event, setEvent] = useState(null);
    const [sideBarCurrentSelector, setSideBarCurrentSelector ] = useState(selectAllSongAlbumPhotos)
    const [currentlyPlayingSong, setCurrentlyPlayingSong ] = useState({artistName:'', label:'', songName:'', songUrl:'', songUrl:"", songDuration:''})
    const {artistName, label, songName, songUrl, songDuration} = currentlyPlayingSong
    const HandleCurrentSongPlay = (artistName, label, songName, songUrl, songDuration) => {
        setCurrentlyPlayingSong({artistName:artistName, label:label, 
            songName:songName, songUrl:songUrl, songDuration:songDuration})
    }
    const HandleMousever = (e, selector) => {
        setEvent(e.target)
        document.querySelector('template.album-photos').classList.remove('no-display-album-photos')
        document.querySelector('#artist-view').classList.remove('display-artist-view')
        Array.from(document.querySelectorAll('#side-bar > .content > .box >\
                    .left-side > .icon')).map(itm => itm.removeAttribute('style', 'border-radius: \
                    20px 0 0 20px; background-color: var(--normalblack);'))
        Array.from(document.querySelectorAll('#side-bar > .content > .box >\
                    .right-side > .blocks > .list')).map(itm => itm.removeAttribute('style', 'background-color: var(--normalblack);'))
        Array.from(document.querySelectorAll('#side-bar > .content > .box > .right-side > \
                   .blocks > .slide-box > .list')).map(itm => itm.removeAttribute('style', 'background-color: var(--normalblack);'))
        try{
            var num = e.target.className.split(' ')[1].split('-')[1]
            if (e.target.className.split(' ')[0] === 'list-fill'){
                document.querySelector(`#side-bar > .content > .box > .right-side > \
                        .blocks > .slide-box > .list-${num}`)
                        .setAttribute('style', 'border-radius: \
                        20px 0 0 20px;background-color: var(--normalblack);')
            }
            else{
                document.querySelector(`#side-bar > .content > .box >\
                        .left-side > .icon-${num}`).setAttribute('style', 'border-radius: \
                        20px 0 0 20px; background-color: var(--normalblack);')
                document.querySelector(`#side-bar > .content > .box >\
                        .right-side > .blocks > .list-${num}`).setAttribute('style', 'background-color: var(--normalblack);')
            }
        }
        catch (error){console.error();}
         if (!e.target.classList.contains('list-1') && !e.target.classList.contains('icon-1')){
            document.querySelector('#container').classList.add('container-change-color')
            if ((document.querySelector('#side-bar > .content > .box >\
                .right-side > .blocks > .slide-box.slide-open'))  && (!e.target.classList.contains('list-fill'))){
                    document.querySelector('#side-bar > .content > .box >\
                                    .left-side > .icon').classList.toggle('add-px-below')
                    document.querySelector('#side-bar > .content > .box >\
                                    .right-side > .blocks > .list:first-child').classList.toggle('add-px-below')
                    document.querySelector('#side-bar > .content > .box >\
                                    .right-side > .blocks > .slide-box').classList.toggle('slide-open')
                    
                }
         } 
         else {
            document.querySelector('#side-bar > .content > .box >\
                        .left-side > .icon').classList.toggle('add-px-below')
                document.querySelector('#side-bar > .content > .box >\
                        .right-side > .blocks > .list:first-child').classList.toggle('add-px-below')
            e.target.innerHtml = '<span>Collection &#10097</span>'
            document.querySelector('#side-bar > .content > .box >\
                        .right-side > .blocks > .slide-box').classList.toggle('slide-open')
            document.querySelector('#container').classList.remove('container-change-color')
         }
         if (selector){
             // dispatch(setAlbumPhotoCheckedState(selector))
             // dispatch(setFreshSortingSearch(false))
             // e.target.className.split(' ')[1] === 'list-1-fill'
             // ? dispatch(setSortSearch(""))
             // : dispatch(setSortSearch([]))
            setAlbumPhotoCheckedState(selector)
            // return event.classList.contains('list-1-fill')
            // || event.classList.contains('list-1')
            // || event.classList.contains('icon-1')
            // ?  setCurrentPage('FIRST-PAGE')
            // : event.classList.contains('list-2')
            // || event.classList.contains('icon-2') 
            // ? setCurrentPage('ARTIST-PAGE')
            // : event.classList.contains('list-3')
            // || event.classList.contains('icon-3')
            // ? setCurrentPage('SONGS-PAGE')
            // : null
         }
    }
    // var SelectedSortedSearch = useSelector(SelectSortedSongs(sortSearch))
    // const handleSelectChange = (e, selector) => {
    //     const {name, value} = e.target;
    //     // const selected = selector(value)
    //     dispatch(setSortSearch(value))
    //     console.log(SelectedSortedSearch)
    //     dispatch(setAlbumPhotoCheckedState(SelectedSortedSearch))
    //     // dispatch(setFreshSortingSearch(true))

    // } 
    const [singleArtist, setSingleArtist] = useState(null);
    const [currentPage, setCurrentPage] = useState('FIRST-PAGE');
    // const [itemHtml, setItemHtml] = useState('');
    const [albumPhotoCheckedState, setAlbumPhotoCheckedState] = useState(selectAllSongAlbumPhotos);
    const [sortSearch, setSortSearch] = useState('')
    // const {sortSearch, freshSortingSearch} = sortSearchObj
    var SelectedSortedSearch = useSelector(SelectSortedSongs(sortSearch))
    var SelectedSingleItem = useSelector(SelectSortedSongs(singleArtist))
    const handleArtistClick = (e) => {
        const id = e.target.closest('.items').id
        setSingleArtist(id)
        // setCurrentPage('ARTIST-VIEW-PAGE')
        document.querySelector('template.album-photos').classList.add('no-display-album-photos')
        document.querySelector('#artist-view').classList.add('display-artist-view')

    }
    const handleSelectChange = (e, selector) => {
        const {name, value} = e.target;
        setAlbumPhotoCheckedState(SelectedSortedSearch)
        setCurrentPage('SORT-PAGE')
        setSortSearch(value)
    }  
    const HandleImageCheckBox = (e, position) => {
      var cnt = 0
      const updatedCheckedState = albumPhotoCheckedState.map((obj, index) => {
        if (index === position && currentPage!=='SORT-PAGE'){
            return {...obj, selected: !obj.selected} 
        }
        else if (currentPage==='SORT-PAGE'){
            return obj.map(itm => {
                cnt ++
                return cnt === position ? {...itm, selected: !itm.selected} : {...itm}
            })
        }
        return {...obj}
      });
      setAlbumPhotoCheckedState(updatedCheckedState); 
    }
    useEffect(() => {
        if (SelectedSortedSearch.length !== 0){
            setAlbumPhotoCheckedState(SelectedSortedSearch)
        } 
        else if (SelectedSingleItem.length !== 0){
            setAlbumPhotoCheckedState(SelectedSingleItem)
        } 
        console.log(event, 111)
        if (event){
            console.log(event, 222)
            return event.classList.contains('list-1-fill')
            || event.classList.contains('list-1')
            || event.classList.contains('icon-1')
            ?  setCurrentPage('FIRST-PAGE')
            : event.classList.contains('list-2')
            || event.classList.contains('icon-2') 
            ? setCurrentPage('ARTIST-PAGE')
            : event.classList.contains('list-3')
            || event.classList.contains('icon-3')
            ? setCurrentPage('SONGS-PAGE')
            : null
        }
    },[sortSearch, singleArtist, event])
    // useEffect(() => {
    //     if (sortSearch.lenght !== 0){
    //         dispatch(setAlbumPhotoCheckedState(selectAllSongAlbumPhotos))
    //     }
    // },[setAlbumPhotoCheckedState])
    
    // console.log(albumPhotoCheckedState)
    return (
        <div className='homepage'>
            <SideBar handleMousever={HandleMousever} />
            <div className='homepage-body'>
                <div className='content'>
                    <Views 
                        albumPhotoCheckedState={albumPhotoCheckedState}
                        currentPage ={currentPage}
                        sortSearch={sortSearch}
                        singleArtist={singleArtist}
                        handleArtistClick={handleArtistClick}
                        HandleCurrentSongPlay={HandleCurrentSongPlay}
                        HandleImageCheckBox={HandleImageCheckBox}
                        handleSelectChange={(e) => handleSelectChange(e, selectSortedSongs)} />
                    <ArtistView />
                </div>

            </div>
            <div className='bottom-pallete'>
                <div className='body'>
                    <div className='box-1'>
                        <span className='img-holder'> 
                        { songUrl
                            ? <img className='img-top' src={require(`../../Media/song-pic/${songUrl}.PNG`)} />
                            : null
                        }
                        </span>
                        <div>
                            <span className='song'>{`${artistName + ' || ' + label}`}</span>
                            <span className='name'>{songName}</span>
                        </div>
                    </div>
                    <div className='box-2'>
                        <span className='time'>0:44</span>
                        <span className='line'><span className='circle'></span></span>
                        <span className='time'>{songDuration}</span>
                    </div>
                    <div className='box-3'>
                        <span><StarSvg /></span>
                        <span><StarSvg /></span>
                        <span><StarSvg /></span>
                        <span><StarSvg /></span>
                        <span><StarSvg /></span>
                    </div>
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
//  const mapDispatchToProps = (dispatch) => ({
//     clickedSlideImagesStart: (url) => dispatch(fetchClickedSlideImagesStart(url))
//  })
//  export default Homepage;
 export default connect(mapStateToProps)(Homepage);
