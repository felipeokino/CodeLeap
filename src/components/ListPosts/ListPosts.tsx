import { TPost } from '../../types';
import PostCard from './PostCard';

type TListPostsProps = {
    posts: TPost[]
}
function ListPosts({ posts }: TListPostsProps) {
  return (
    <div className='flex flex-col gap-10 w-full items-center max-h-screen overflow-auto snap-y snap-mandatory '>
        {posts.map(post => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
  )
}

export default ListPosts