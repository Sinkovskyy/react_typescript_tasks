
import { createStore, applyMiddleware } from "@reduxjs/toolkit"
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistedReducer = persistReducer(
    {
        key: 'root',
        storage,
        whitelist: ['todo']
    },
    rootReducer
)



const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const store = createStore(persistedReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store



