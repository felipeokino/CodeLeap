import {configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import postReducer from './posts'
import rootSaga from '../sagas/sagas';

const reducers = combineReducers({posts: postReducer})


const  createConfigureStore = () => {
    const sagasMiddleware = createSagaMiddleware()
    const store = configureStore({
        reducer: reducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagasMiddleware)
    });
    
    sagasMiddleware.run(rootSaga)

    return store;
}


export default createConfigureStore
export type IStoreState = ReturnType<typeof reducers>;