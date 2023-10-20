import { createSlice } from '@reduxjs/toolkit';
import { TPost } from '../../types';

type TPostInitialState = {
    posts: TPost[]
    postData: TPost
    loading: boolean
}

type TSetLoadingPayload = {
    type: string
    payload: boolean
}
type TSetPostDataPayload = {
    type: string
    payload: TPost
}
type TSetPostDataByFieldPayload = {
    type: string
    payload: {
        field: string
        value: string
    }
}
export const initialState: TPostInitialState = {
    posts: [],
    postData: {} as TPost,
    loading: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => ({
            ...state,
            posts: action.payload,
            loading: false
        }),
        setLoading: (state, action: TSetLoadingPayload) => ({
            ...state,
            loading: action.payload
        }),
        setPostDataByField: (state, {payload: {field, value}}: TSetPostDataByFieldPayload) => ({
            ...state,
            postData: {
                ...state.postData,
                [field]: value
            }
        }),
        setPostData: (state, {payload}: TSetPostDataPayload) => ({
            ...state,
            postData: payload
        }),
        clearPostData: (state) => ({
            ...state,
            postData: {} as TPost
        })
    },
})

export const posts = postsSlice
export default postsSlice.reducer;