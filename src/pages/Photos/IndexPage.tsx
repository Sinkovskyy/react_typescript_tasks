import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "../../components";
import { useTypedSelector } from "../../hooks";
import { getPhotoSelector, photoActions } from "../../store";
import { Container, PhotosContainer, SearchContainer } from "./styled";




const IndexPage: FC = () => {


    const dispatch = useDispatch()
    const { photos, meta } = useTypedSelector(getPhotoSelector)

    const [albumIndex, setAlbumIndex] = useState<number | null>(null)

    const Events = {

        onInputChangeHandler: (e: SyntheticEvent) => {
            setAlbumIndex(parseInt((e.target as HTMLInputElement).value))
        },
        onClickButtonHandler: () => {
            Schema.albumValue.condition && meta?.albumId != albumIndex && dispatch(photoActions.getPhotos({ albumId: albumIndex as number }))
        }

    }

    const Schema = {
        albumValue: {
            condition: albumIndex as number >= 1 && albumIndex as number <= 100
        }
    }




    return (
        <Container>
            <SearchContainer>
                <Input type='number' label='Insert number from 1 to 100:' onChange={Events.onInputChangeHandler} isValid={Schema.albumValue.condition} />
                <Button onClick={Events.onClickButtonHandler} colorTheme={(meta?.albumId == albumIndex || !Schema.albumValue.condition) ? 'grey' : 'blue'}>Get photos</Button>
            </SearchContainer>
            <PhotosContainer>
                {photos.map((photo, index) => (
                    <img key={index} src={photo.url} />
                ))}
            </PhotosContainer>


        </Container>
    )

}

export default IndexPage