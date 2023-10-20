import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../../actions/posts';
import { Http } from '../../services/http';
import { TPost } from '../../types';

type TAddPostProps = ReturnType<
  typeof actions.addPost
>;

type TDeletePost = ReturnType<
  typeof actions.deletePost
>;
type TPatchPost = ReturnType<
  typeof actions.updatePost
>;



enum Status {
    OK = 200, 
    CREATED = 201,
    MODIFIED = 204

}
export function* FetchPostsWorker() {
    try {
        const http = new Http()
        yield put(actions.setLoading(true))
    
        const { data, status }: AxiosResponse<{results: TPost[]}> = yield call(http.get, '')
    
        if (status === Status.OK) {
            yield put(actions.setPosts(data.results));
        }
    } catch(error) {
        console.error(error)
    } 
}

export function* AddPostsWorker({payload}: TAddPostProps) {
    try {
        const username = localStorage.getItem('username')!;
        yield put(actions.setLoading(true))
    
        const http = new Http()
    
        const {status}:AxiosResponse = yield call(http.post, '', {...payload, username});
    
        if (status === Status.OK) {
            yield put(actions.clearPostData())
            yield put(actions.fetchPosts());
        }
    } catch (error) {
        console.error(error)
    } 
   
}

export function* PatchPostsWorker({payload}: TPatchPost) {
    try {
        const {id, title, content} = payload;
        yield put(actions.setLoading(true))
    
        const http = new Http()
    
        const {status}:AxiosResponse = yield call(http.patch, '', id, {content, title});

        if (status === Status.OK) {
            yield put(actions.clearPostData())
            yield put(actions.fetchPosts());
        }
    } catch (error) {
        console.error(error)
    }
   
}

export function* DeletePostWorker({payload}: TDeletePost) {
    try {
        const http = new Http()

        const {status}:AxiosResponse = yield call(http.delete, '', payload.id);

        if (status === Status.MODIFIED) {
            yield put(actions.setLoading(false))
            yield put(actions.fetchPosts());
        }
    } catch (error) {
        console.error(error)
    }
}

export default function* watchPostsWorker() {
    yield takeLatest(actions.fetchPosts, FetchPostsWorker);
    yield takeLatest(actions.addPost, AddPostsWorker);
    yield takeLatest(actions.updatePost, PatchPostsWorker);
    yield takeLatest(actions.deletePost, DeletePostWorker)
  }