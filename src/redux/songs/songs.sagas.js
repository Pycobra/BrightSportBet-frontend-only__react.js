import { take, takeEvery, takeLatest, all, call, put } from "redux-saga/effects"
import { SongsActionTypes } from "./songs.types"
import {  
    fetchAllSongSuccess,
    fetchAllSongFailure,
} from "./songs.actions"



export function* getAllSongStart({payload}) {
    console.log(payload)
    try{
        yield put(fetchAllSongSuccess(payload))
    } catch (error){
        yield put(fetchAllSongFailure(error.message))
    }
}
export function* onFetchAllSongStart() {
    yield takeLatest(SongsActionTypes.FETCH_ALL_SONG_START, 
        getAllSongStart)
}
export function* songsSagas(){
    yield all([ 
        call(onFetchAllSongStart),
    ])
}


