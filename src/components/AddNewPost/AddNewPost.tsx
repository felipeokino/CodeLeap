import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/posts';
import { getPostDataSelector, getPostsLoadingSelector } from '../../selectors/posts';
import { useState } from 'react';


function AddNewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const isLoading = useSelector(getPostsLoadingSelector);
  
  const disableButton = isLoading || !(title && content);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(actions.addPost({content, title}));
  }

  return (
    <div className='w-2/4 p-6 flex flex-col bg-zinc-800 rounded-md gap-4 max-sm:w-5/6'>
      <span className='text-2xl font-bold'>What's on your mind?</span>
        <div>
          <span>Title</span>
          <input 
              type="text" 
              className="rounded-md h-8 w-full pl-2 mt-2 text-purple-950" 
              value={title|| ''}
              onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <span>Content</span>
          <textarea 
            maxLength={255}
            className="rounded-md h-8 w-full p-2 mt-2 text-purple-950 min-h-[100px]" 
            value={content|| ''}
            onChange={e => setContent(e.target.value)}
          />
          <span className='ml-auto text-xs text-white/70 w-full text-end block'>Max 255 characters</span>
        </div>
        <button 
          className='flex gap-2 w-1/2 max-sm:w-full ml-auto justify-center items-center bg-blue-700 px-6 py-1 rounded-md uppercase font-bold text-lg disabled:bg-blue-500 hover:bg-blue-800' 
          onClick={handleAddPost}
          disabled={disableButton}
        >
          Done
          {
              isLoading && <div className='w-4 h-4 border-blue-900 animate-[spin_1s_infinite_linear] border-t-2 border-r-4 rounded-full '></div>
          }
        </button>
    </div>
  )
}

export default AddNewPost