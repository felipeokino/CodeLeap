import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../actions/posts';
import AddNewPost from '../../components/AddNewPost';
import ListPosts from '../../components/ListPosts';
import { getPostsSelector } from '../../selectors/posts';
import { Logout } from '../../utils/icons';

export default function Home() {
    const posts = useSelector(getPostsSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(actions.fetchPosts())
    }, [dispatch]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/login')
    }

    return (
        <div className='flex flex-col w-screen h-screen items-center gap-10 py-6 relative'>
            <AddNewPost  />
            <ListPosts posts={posts} />
            <button onClick={handleLogout} className='absolute bottom-4 right-4'>
                <img src={Logout} alt="" className='w-8 h-8' />
            </button>
        </div>
    )
}