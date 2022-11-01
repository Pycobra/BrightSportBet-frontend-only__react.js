import { SongsActionTypes } from "./songs.types"

export const fetchAllSongStart = (className) => ({
    type: SongsActionTypes.FETCH_ALL_SONG_START,
    payload: className
})
export const fetchAllSongSuccess = (className) => ({
    type: SongsActionTypes.FETCH_ALL_SONG_SUCCESS,
    payload: className
})
export const fetchAllSongFailure = (className) => ({
    type: SongsActionTypes.FETCH_ALL_SONG_FAILURE,
    payload: className
})

