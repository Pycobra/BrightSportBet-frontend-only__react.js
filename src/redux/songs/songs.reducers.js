import {SongsData} from "./songs-data.js";
import { SongsActionTypes } from './songs.types';


const INITIAL_STATE = {
    songs: SongsData,
    isFetching: false,
}

const SongsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SongsActionTypes.FETCH_ALL_SONG_START:
            return{
                ...state,
                isFetching: true,
            }
        case SongsActionTypes.FETCH_ALL_SONG_SUCCESS:
            return{
                ...state,
                isFetching: false,
                songs: action.payload,
            }
        case SongsActionTypes.FETCH_ALL_SONG_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}
 
export default SongsReducer;





