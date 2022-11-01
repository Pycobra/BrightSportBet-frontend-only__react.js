import { createSelector } from "reselect";
import { selectAllPhoto } from "../photo/photo.selectors";
import { selectAllSongs } from "../songs/songs.selectors";

const selectProfile = state => state.profiles
const selectSongsFromProfile = state => state.song
const selectPhotoFromProfile = state => state.photos

export const SelectAllProfiles = createSelector(
    [selectProfile],
    (profile) => Object.values(profile.profiles)
)
export const ProfileAllArtists = createSelector(
    [SelectAllProfiles, selectSongsFromProfile, selectPhotoFromProfile],
    (profile, song, photo) => {
        const names = profile.map(pro => pro.name).sort()
        const artistProfile = names.map(nam => profile.map(pro => {
                return pro.name.slice(0,1) === nam.slice(0,1)
                ? {
                    id: pro.id,
                    name: pro.name, 
                    songs: Object.values(song.songs).find(sng => sng.artistID === pro.id)
                            .songs,
                    url: Object.values(photo.photo).find(pic => pic.artistID === pro.id)
                            .photos[0].url}
                    
                : null }).filter(obj => obj))
            // .map(obj => obj.map(itm => {
            //     // console.log(itm)
            //     if (!itm.name in sortList){
            //         sortList.push(itm.name)
            //         return itm
            //     }
            // }))
        // artistProfile.map(itm => {
            
        // })
        // console.log(artistProfile)
        return [...new Set(artistProfile)]
    }
)
export const SelectProfileOfSingleArtists = (artistObj) => createSelector(
    [SelectAllProfiles, selectSongsFromProfile, selectPhotoFromProfile],
    (profile, song, photo) => {
        const artistProfile = profile.map(pro => {
                return pro.id === parseInt(artistObj)
                ? {
                    id: pro.id,
                    name: pro.name, 
                    clickedUserSong: Object.values(song.songs).find(sng => sng.artistID === pro.id)
                            .songs.find(itm => itm.artistID=== parseInt(artistObj)),
                    // clickedUserImg: console.log(photo.photo[artistObj].photos),
                    songs: Object.values(song.songs).find(sng => sng.artistID === pro.id)
                            .songs,
                    url: Object.values(photo.photo).find(pic => pic.artistID === pro.id)
                            .photos}
                    
                : null }).find(obj => obj)
        // console.log(artistProfile)
        return artistProfile


    }
)