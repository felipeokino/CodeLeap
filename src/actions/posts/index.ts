import {createAction} from '@reduxjs/toolkit';
import {posts} from '../../redux/posts'
const name = 'posts';

const fetchPosts = createAction(`${name}/fetch`);

export const actions = {
    fetchPosts,
    ...posts.actions
}