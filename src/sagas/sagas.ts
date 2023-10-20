import {all, spawn} from 'redux-saga/effects';
import postSagas from './posts';

export default function* rootSaga() {
  yield all([postSagas].map((saga) => spawn(saga)));
}