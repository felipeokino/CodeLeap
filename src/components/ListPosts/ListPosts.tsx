import { TPost } from '../../types';
import PostCard from './PostCard';
import NoData from '../../assets/undraw_no_data_re_kwbl.svg'
type TListPostsProps = {
    posts: TPost[]
}
function ListPosts({ posts }: TListPostsProps) {
  return (
    <div className='flex flex-col gap-10 w-full items-center max-h-screen overflow-auto snap-y snap-mandatory '>
        {posts.map(post => (
            <PostCard key={post.id} post={post} />
        ))}
        {
          !posts.length && (
            <div className=' flex flex-col text-center justify-center items-center gap-10'>
              <img src={NoData} alt="" className='w-2/4 h-2/4' />
              <span className='text-3xl'>No posts to show</span>
            </div>
          )
        }
    </div>
  )
}

export default ListPosts