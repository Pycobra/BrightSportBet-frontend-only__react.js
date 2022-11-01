import { createSelector } from "reselect";

const selectPhoto = state => state.photo


export const selectAllPhoto = createSelector(
    [selectPhoto],
    (photo) => {
        Object.values(photo.photo)
    }
)
export const fetchAllSongAlbumPhotos = createSelector(
    [selectPhoto],
    (photo) => photo.photo
)