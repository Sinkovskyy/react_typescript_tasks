import { createReducer } from "@reduxjs/toolkit";
import { photoActions } from "./actions";
import { TInitialState } from "./types";





const InitialState: TInitialState = {
    photos: [],
    meta: null
}


const reducer = createReducer<TInitialState>(InitialState, builder => {

    builder.addCase(photoActions.setPhotos, (state, { payload }) => ({ ...state, photos: payload.photos, meta: payload.meta }))

})

export default reducer