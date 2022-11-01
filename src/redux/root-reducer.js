import {combineReducers} from "redux"
import SongsReducer from "./songs/songs.reducers"
import PhotoReducer from "./photo/photo.reducers"
import profilesReducer from "./profile/profile.reducers"
// import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"



// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: []
// }
const rootReducer = combineReducers({
    song: SongsReducer,
    photos: PhotoReducer,
    profiles: profilesReducer,
})

export default rootReducer;
// export default persistReducer(persistConfig, rootReducer);



