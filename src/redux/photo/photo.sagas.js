import { take, takeEvery, takeLatest, all, call, put } from "redux-saga/effects"
import { PhotoActionTypes } from "./photo.types"
import {  
    fetchAllPhotoSuccess,
    fetchAllPhotoFailure,
} from "./photo.actions"



export function* getAllPhotoStart({payload}) {
    console.log(payload)
    try{
        yield put(fetchAllPhotoSuccess(payload))
    } catch (error){
        yield put(fetchAllPhotoFailure(error.message))
    }
}
export function* onfetchAllPhotoStart() {
    yield takeLatest(PhotoActionTypes.FETCH_ALL_PHOTO_START, 
        getAllPhotoStart)
}
export function* photoSagas(){
    yield all([ 
        call(onfetchAllPhotoStart),
    ])
}


