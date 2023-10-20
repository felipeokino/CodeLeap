import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/posts';
import { getPostDataSelector, getPostsLoadingSelector } from '../../selectors/posts';
import { TPost } from '../../types';

type TAddNewPostProps = {
  post?: TPost,
  onlyInputs?: boolean
}

function AddNewPost({post, onlyInputs = false}: TAddNewPostProps) {
  const isLoading = useSelector(getPostsLoadingSelector);
  const postData = useSelector(getPostDataSelector)

  const disableButton = isLoading || !(postData.title && postData.content);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    if (postData.id) {
      dispatch(actions.updatePost(postData));
    } else {
      dispatch(actions.addPost(postData));
    }
  }

  const handleEditInput = (field: string, value: string) => {
    dispatch(actions.setPostDataByField({field, value}))
  }

  return (
    <div className='w-2/4 p-6 flex flex-col bg-zinc-800 rounded-md gap-4 max-sm:w-5/6'>
      <span className='text-2xl font-bold'>What's on your mind?</span>
        <div>
          {!onlyInputs && <span>Title</span>}
          <input 
              type="text" 
              className="rounded-md h-8 w-full pl-2 mt-2 text-purple-950" 
              value={postData?.title|| ''}
              onChange={e => handleEditInput('title', e.target.value)}
          />
        </div>
        <div className='w-full'>
          <span>Content</span>
          <textarea 
            maxLength={255}
            className="rounded-md h-8 w-full p-2 mt-2 text-purple-950 min-h-[100px]" 
            value={postData?.content|| ''}
            onChange={e => handleEditInput('content', e.target.value)}
          />
          <span className='ml-auto text-xs text-white/70 w-full text-end block'>Max 255 characters</span>
        </div>
        <button 
          className='flex gap-2 w-1/2 max-sm:w-full ml-auto justify-center items-center bg-blue-700 px-6 py-1 rounded-md uppercase font-bold text-lg disabled:bg-blue-500 hover:bg-blue-800' 
          onClick={handleAddPost}
          disabled={disableButton}
        >
          {postData?.id ? 'Save' : 'Done'}
          {
              isLoading && <div className='w-4 h-4 border-blue-900 animate-[spin_1s_infinite_linear] border-t-2 border-r-4 rounded-full '></div>
          }
        </button>
    </div>
  )
}

export default AddNewPost