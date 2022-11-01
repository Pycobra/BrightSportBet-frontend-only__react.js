import { call, all } from "redux-saga/effects"
import { photoSagas } from "./photo/photo.sagas"
import { songsSagas } from "./songs/songs.sagas"
import { profilesSagas } from "./profile/profile.sagas"


export default function* rootSaga(){
    yield all([
        call(photoSagas), 
        call(songsSagas), 
        call(profilesSagas), 
    ])
}
