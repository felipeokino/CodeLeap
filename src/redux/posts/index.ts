import { createSlice } from '@reduxjs/toolkit';
import { TPost } from '../../types';

type TPostInitialState = {
    posts: TPost[]
    loading: boolean
}

type TSetLoadingPayload = {
    type: string
    payload: boolean
}
export const initialState: TPostInitialState = {
    posts: [],
    loading: false,
};


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => ({
            ...state,
            posts: action.payload
        }),
        setLoading: (state, action: TSetLoadingPayload) => ({
            ...state,
            loading: action.payload
        })
    },
})

export const posts = postsSlice
export default postsSlice.reducer;