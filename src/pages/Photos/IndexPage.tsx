import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "../../components";
import { useTypedSelector } from "../../hooks";
import { getPhotoSelector, photoActions } from "../../store";
import { Container, PhotosContainer, SearchContainer } from "./styled";




const IndexPage: FC = () => {


    const dispatch = useDispatch()
    const { photos, meta } = useTypedSelector(getPhotoSelector)

    const [albomIndex, setAlbomIndex] = useState<number | null>(null)

    const Events = {

        onInputChangeHandler: (e: SyntheticEvent) => {
            setAlbomIndex(parseInt((e.target as HTMLInputElement).value))
        },
        onClickButtonHandler: () => {
            Schema.albomValue.condition && meta?.albumId != albomIndex && dispatch(photoActions.getPhotos({ albumId: albomIndex as number }))
        }

    }

    const Schema = {
        albomValue: {
            condition: albomIndex as number >= 1 && albomIndex as number <= 100
        }
    }




    return (
        <Container>
            <SearchContainer>
                <Input type='number' label='Insert number from 1 to 100:' onChange={Events.onInputChangeHandler} isValid={Schema.albomValue.condition} />
                <Button onClick={Events.onClickButtonHandler} colorTheme={(meta?.albumId == albomIndex || !Schema.albomValue.condition) ? 'grey' : 'blue'}>Get photos</Button>
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