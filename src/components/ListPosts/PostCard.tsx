import React, { useState } from 'react'
import { TPost } from '../../types';
import { Delete, Edit, KebabIcon } from '../../utils/icons';

type TPostCardProps = {
    post: TPost
}
function PostCard({post}: TPostCardProps) {
    const {content, created_datetime, title, username} = post;
    const loggedUser = localStorage.getItem('username');
    const isOwner = loggedUser === username
    const [openMenu, setOpenMenu] = useState(false)
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
                    {new Date(+created_datetime).toLocaleString('pt-br').split(',')[0]}
                </span>
                <span className='ml-auto text-white/80'>
                    @{username}
                </span>
            </div>
        
        {
            isOwner && (
                <div className='flex gap-2 absolute top-2 right-2'>
                    <div className='relative w-8 h-8 cursor-pointer text-2xl' onClick={() => setOpenMenu(!openMenu)}> 
                        <img src={KebabIcon} alt="" className='w-[28px] h-[28px] rotate-90'/>
                    </div>
                    
                    <div className={`absolute w-max flex flex-col gap-2 top-9 right-6 transition-all delay-75}`}>
                        <button className={`flex justify-center items-center w-0 h-0  transition-all delay-200 rounded-full bg-red-500 ${openMenu && 'w-10 h-10'}`}>
                            <img src={Delete} alt="" className={`w-[28px] h-[28px]`} />
                        </button>
                        <button className={`flex justify-center items-center w-0 h-0  transition-all delay-200 rounded-full bg-blue-500 ${openMenu && 'w-10 h-10'}`}>
                            <img src={Edit} alt=""  className={`w-[28px] h-[28px]`}/>
                        </button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default PostCard