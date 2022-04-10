






import { HttpService } from "../../services";
import { PHOTO_URL } from "./config";
import { TGetPhotosPayload } from "./types";

export class ApiPhotoService extends HttpService {



    static getPhotos({ albumId }: TGetPhotosPayload) {

        const response = this.request({
            url: `${PHOTO_URL.getPhotos}?albumId=${albumId}`,
            method: 'GET',

        })

        return response

    }

}