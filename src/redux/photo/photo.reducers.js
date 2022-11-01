import {PhotoData} from "./photo-data.js";
import { PhotoActionTypes } from './photo.types';


const INITIAL_STATE = {
    photo: PhotoData,
    isFetching: false,
}

const PhotoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PhotoActionTypes.FETCH_ALL_PHOTO_START:
            return{
                ...state,
                isFetching: true,
            }
        case PhotoActionTypes.FETCH_ALL_PHOTO_SUCCESS:
            return{
                ...state,
                isFetching: false,
                photo: action.payload,
            }
        case PhotoActionTypes.FETCH_ALL_PHOTO_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}
 
export default PhotoReducer;





