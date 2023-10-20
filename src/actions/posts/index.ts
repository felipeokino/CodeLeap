import {createAction} from '@reduxjs/toolkit';
import {posts} from '../../redux/posts'
import { TPost, TPostBody } from '../../types';
const name = 'posts';

const fetchPosts = createAction(`${name}/fetch`);
const addPost = createAction(`${name}/add`, (payload: Omit<TPostBody, 'username'> & {id?: string}) => ({payload}));
const updatePost = createAction(`${name}/update`, (payload: Omit<TPost, 'username'> & {id: string}) => ({payload}));
const deletePost = createAction(`${name}/delete`, (payload: {id: string}) => ({payload}));

export const actions = {
    fetchPosts,
    addPost,
    updatePost,
    deletePost,
    ...posts.actions
}