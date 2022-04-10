
export type TInitialState = {
    photos: TPhoto[],
    meta: TMeta | null
}


export type TMeta = {
    albumId: number
}

export type TPhoto = {
    url: string
}


export type TGetPhotosPayload = {
    albumId: number
}

export type TSetPhotosPayload = {
    photos: TPhoto[],
    meta: TMeta
}
