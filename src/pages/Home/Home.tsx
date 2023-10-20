import { useSelector, useDispatch } from 'react-redux';
import { getPostsSelector } from '../../selectors/posts';
import AddNewPost from '../../components/AddNewPost';
import ListPosts from '../../components/ListPosts';
import { useEffect } from 'react';
import {actions} from '../../actions/posts'
export default function Home() {
    const posts = useSelector(getPostsSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchPosts())
    }, [dispatch])

    return (
        <div className='flex flex-col w-screen h-screen items-center gap-10 py-6'>
            <AddNewPost  />
            <ListPosts posts={posts} />
        </div>
    )
}