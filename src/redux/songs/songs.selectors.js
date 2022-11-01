import { createSelector } from "reselect";
import { SelectAllProfiles } from "../profile/profile.selectors";

const selectSongs = state => state.song
// const selectProfile = state => state.profiles

export const selectAllSongs = createSelector(
    [selectSongs],
    (song) => Object.values(song.songs)
)

export const SelectAllSongAlbumPhotos = createSelector(
    [selectAllSongs, SelectAllProfiles],
    (song, profile) => {
        const myList = []
        const myProfile = []
        var cnt = 0
         song.reduce(
            (li, currentSong, index) => {
                profile.map(acc => {
                    if (acc.id === currentSong.artistID){
                        currentSong.songs.map(itm => {
                            itm['selected'] = false
                            itm['id'] = currentSong.id
                            itm['artistID'] = currentSong.artistID
                            itm['artistName'] = acc.name
                            li.push(itm)
                        })
                    }
                })
                return li
            }, myList
            )
        return myList
    }
)

export const SelectSortedSongs = (selected) => createSelector(
    [SelectAllSongAlbumPhotos],
    (myList) => {
        var newList = []
        const Genre = []
        const ArtistID = []
        const Artist = []
        const Label = []
        const A2Z = []
        const ReleaseYear = []
        myList.map(itm => {
            Genre.push(itm.genre)
            ArtistID.push(itm.artistID)
            Artist.push(itm.artistName)
            Label.push(itm.label)
            // A2Z.push(itm.Genre)
            ReleaseYear.push(itm.release_year)
        })
        var uniqueGenre =[...new Set(Genre)]
        var uniqueArtistID =[...new Set(ArtistID)]
        var uniqueArtist =[...new Set(Artist)]
        var uniqueReleaseYear =[...new Set(ReleaseYear)]
        var uniqueLabel =[...new Set(Label)]
        
        // console.log(uniqueGenre)
        if (selected === 'Genre'){
            uniqueGenre.map(unique => { 
                var uniqueArray = []
                myList.map(itm => {
                    if (itm.genre === unique){
                        uniqueArray.push(itm)
                        newList.push(uniqueArray)
                        // newList.push({[itm.genre]: uniqueArray})
                    }
                })
            })
        }
        else if (selected === 'Artist'){
            uniqueArtist.map(unique => { 
                var uniqueArray = []
                myList.map(itm => {
                    if (itm.artistName === unique){
                        uniqueArray.push(itm)
                        newList.push(uniqueArray)
                    }
                })
            })
        }
        else if (selected === 'Release Year'){
            uniqueReleaseYear.map(unique => { 
                var uniqueArray = []
                myList.map(itm => {
                    if (itm.release_year === unique){
                        uniqueArray.push(itm)
                        newList.push(uniqueArray)
                    }
                })
            })
        }
        else if (selected === 'Label'){
            uniqueLabel.map(unique => { 
                var uniqueArray = []
                myList.map(itm => {
                    if (itm.label === unique){
                        uniqueArray.push(itm)
                        newList.push(uniqueArray)
                    }
                })
            })
        }
        var newList =[...new Set(newList)]
        // console.log(newList)
        return newList
    }
)


export const SelectSingleSong = createSelector(
    [selectAllSongs, SelectAllProfiles],
    (song, profile) => {
        const myList = []
        const myProfile = []
        var cnt = 0
         song.reduce(
            (li, currentSong, index) => {
                profile.map(acc => {
                    if (acc.id === currentSong.artistID){
                        currentSong.songs.map(itm => {
                            itm['selected'] = false
                            itm['id'] = currentSong.id
                            itm['artistID'] = currentSong.artistID
                            itm['artistName'] = acc.name
                            li.push(itm)
                        })
                    }
                })
                return li
            }, myList
            )
        return myList
    }
)

