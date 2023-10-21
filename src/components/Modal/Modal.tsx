import { title } from 'process';
import React, { ReactNode } from 'react'
import { Close } from '../../utils/icons';

type ModalProps = {
    handleClose: () => void
    title?: string
    children: ReactNode
}
function Modal({handleClose, title, children}: ModalProps) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-zinc-800/70 flex justify-center items-center'>
        <div className='relative left-0  w-[50%] min-h-[200px] bg-zinc-700 rounded-md p-6 flex flex-col justify-evenly'>
        <button onClick={handleClose} className='absolute top-2 right-2'>
          <img src={Close} alt="" className='w-8 h-8'/>
        </button>
            <span className='text-2xl'>{title}</span>
            {children}
        </div>
    </div>
  )
}

export default Modal