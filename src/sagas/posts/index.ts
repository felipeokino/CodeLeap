import { call, put, retry, takeLatest } from 'redux-saga/effects';
import {actions} from '../../actions/posts';

export function* FetchPostsWorker() {
    yield put(actions.setLoading(true))
}

export default function* watchPostsWorker() {
    yield takeLatest(actions.fetchPosts, FetchPostsWorker);
  }