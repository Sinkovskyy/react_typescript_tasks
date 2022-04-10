import { call, put, takeLatest } from "redux-saga/effects";
import { TDataWrapper, TResponse } from "../types";
import { photoActions } from "./actions";
import { ApiPhotoService } from "./api.service";
import { TGetPhotosPayload } from "./types";


function* getPhotos({ payload }: TDataWrapper<TGetPhotosPayload>) {

    const { albumId } = payload

    try {
        const response: TResponse = yield call([ApiPhotoService, ApiPhotoService.getPhotos], { albumId })
        if (response.data) yield put(photoActions.setPhotos({ photos: response.data, meta: { albumId } }))
    }
    catch (e) {
        console.log(e)
    }

}


export function* photosWatcher() {
    yield takeLatest(photoActions.getPhotos, getPhotos)
}