import { createAction } from "@reduxjs/toolkit";
import { GET_PHOTOS, SET_PHOTOS } from "./consts";
import { TGetPhotosPayload, TSetPhotosPayload } from "./types";





export const photoActions = {

    getPhotos: createAction(GET_PHOTOS, (payload: TGetPhotosPayload) => ({ payload })),
    setPhotos: createAction(SET_PHOTOS, (payload: TSetPhotosPayload) => ({ payload }))
}