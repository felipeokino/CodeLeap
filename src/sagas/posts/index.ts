import { put, takeLatest } from 'redux-saga/effects';
import { actions } from '../../actions/posts';
import { fakePosts } from './mock';

export function* FetchPostsWorker() {
    yield put(actions.setLoading(true))
    yield put(actions.setPosts(fakePosts))
    console.log('chamei')
}

export default function* watchPostsWorker() {
    yield takeLatest(actions.fetchPosts, FetchPostsWorker);
  }