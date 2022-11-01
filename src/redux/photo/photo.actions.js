import { PhotoActionTypes } from "./photo.types"

export const fetchAllPhotoStart = (className) => ({
    type: PhotoActionTypes.FETCH_ALL_PHOTO_START,
    payload: className
})
export const fetchAllPhotoSuccess = (className) => ({
    type: PhotoActionTypes.FETCH_ALL_PHOTO_SUCCESS,
    payload: className
})
export const fetchAllPhotoFailure = (className) => ({
    type: PhotoActionTypes.FETCH_ALL_PHOTO_FAILURE,
    payload: className
})

