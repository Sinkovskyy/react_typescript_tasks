import { all } from 'redux-saga/effects'
import { photosWatcher } from './photo'





function* rootSaga() {

    yield all([

        photosWatcher()

    ])

}


export default rootSaga