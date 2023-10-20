import { IStoreState } from '../../redux/store';

export const getPostsSelector = ({posts}: IStoreState) => posts.posts
export const getPostsLoadingSelector = ({posts}: IStoreState) => posts.loading
