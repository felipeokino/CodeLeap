import { ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/posts';
import { TPost } from '../../types';
import { Delete, Edit, KebabIcon } from '../../utils/icons';
import moment from 'moment';
import Modal from '../Modal';
import { getPostDataSelector } from '../../selectors/posts';

type TPostCardProps = {
    post: TPost,
}
type TConfirmDeleteProps = {
    handleClose: () => void
    id: string
}
const ConfirmDelete = ({handleClose, id}: TConfirmDeleteProps) => {
    const dispatch = useDispatch()

    const handleDeletePost = () => {
        dispatch(actions.deletePost({id}))
    }
    return (
        <div className='flex mt-auto ml-auto gap-6'>
            <button className='px-6 py-2 bg-zinc-300 text-zinc-900 rounded-md text-xl' onClick={handleClose}>Cancel</button>
            <button className='px-6 py-2 bg-red-600 rounded-md text-xl' onClick={handleDeletePost}>Delete</button>
        </div>
    )
}

type TEditPostProps = {
    handleClose: () => void
    
}
const EditPost = ({handleClose}: TEditPostProps) => {
    const dispatch = useDispatch()
    const postData = useSelector(getPostDataSelector)

    const handleEditInput = (field: string, value: string) => {
        dispatch(actions.setPostDataByField({field, value}))
    }
    const handleSave = () => {
        dispatch(actions.updatePost(postData))
        handleClose()
    }
    return (
        <div className='flex flex-col gap-4 mt-6'>
        <div>
          <span>Title</span>
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
            <div className='flex mt-auto ml-auto gap-6'>
                <button className='px-6 py-2 bg-zinc-300 text-zinc-900 rounded-md text-xl' onClick={handleClose}>Cancel</button>
                <button className='px-6 py-2 bg-green-500 text-zinc-900 rounded-md text-xl' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}


function PostCard({post}: TPostCardProps) {
    const {content, created_datetime, title, username, id} = post;
    const [openMenu, setOpenMenu] = useState(false)
    const [openModal, setOpenModal] = useState<{variant: 'edit'|'delete', isOpen: boolean}>();

    const loggedUser = localStorage.getItem('username');
    const isOwner = loggedUser === username
    const dispatch = useDispatch()
    
    const handleClickEdit = () => {
        dispatch(actions.setPostData(post))
        setOpenModal({isOpen: true, variant: 'edit'})
    }


  return (
    <div className='w-2/4 p-6 flex flex-col bg-zinc-800 rounded-md relative snap-start'>
         <span className='text-2xl mb-12'>
            {title}
        </span>
        <div className='w-5/6'>
            <span>
                {content}
            </span>
        </div>
            <div className='flex justify-between mt-4'>
                <span className='text-white/70 '>
                    {moment(created_datetime).fromNow()}
                </span>
                <span className='ml-auto text-white/80'>
                    @{username}
                </span>
            </div>
        
        {
            isOwner && (
                <>
                    <div className='flex gap-2 absolute top-2 right-2'>
                        <div className='relative w-8 h-8 cursor-pointer text-2xl' onClick={() => setOpenMenu(!openMenu)}> 
                            <img src={KebabIcon} alt="" className='w-[28px] h-[28px] rotate-90'/>
                        </div>
                        
                        <div className={`absolute w-max flex flex-col gap-2 top-9 right-6 transition-all delay-75}`}>
                            <button
                                onClick={() => setOpenModal({isOpen: true, variant: 'delete'})}
                            className={`flex justify-center items-center w-0 h-0  transition-all delay-200 rounded-full bg-red-500 ${openMenu && 'w-10 h-10'}`}>
                                <img src={Delete} alt="" className={`w-[28px] h-[28px]`} />
                            </button>
                            <button onClick={handleClickEdit} className={`flex justify-center items-center w-0 h-0  transition-all delay-200 rounded-full bg-blue-500 ${openMenu && 'w-10 h-10'}`}>
                                <img src={Edit} alt=""  className={`w-[28px] h-[28px]`}/>
                            </button>
                        </div>
                    </div>

                    {
                        openModal?.variant === 'delete' && openModal.isOpen && (
                            <Modal handleClose={() => setOpenModal(() => ({variant: 'delete', isOpen: false}))} title='Are you sure if you want remove this item?'>
                                <ConfirmDelete handleClose={() => setOpenModal(() => ({variant: 'delete', isOpen: false}))} id={id}/>
                            </Modal>
                        )
                    }

                    {
                        openModal?.variant === 'edit' && openModal.isOpen && (
                            <Modal handleClose={() => setOpenModal(() => ({variant: 'delete', isOpen: false}))} title='Edit item?'>
                                <EditPost 
                                    handleClose={() => setOpenModal(() => ({variant: 'delete', isOpen: false}))}
                                />
                            </Modal>
                        )
                    }
                </>
            )
        }


    </div>
  )
}

export default PostCard