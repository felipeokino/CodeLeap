import React from 'react'
import NotFoundPage from '../../assets/undraw_towing_re_wesa-2.svg';
import {useNavigate} from 'react-router-dom'
function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center text-4xl'>
        <img src={NotFoundPage} alt="" className='mb-10'/>
        <span>404</span>
        <span>Page Not Found :(</span>
        <button 
            onClick={() => navigate('/', {replace: true})}
            className='flex gap-2 w-1/2 max-sm:w-full mt-10 justify-center items-center bg-blue-700 px-6 py-1 rounded-md uppercase font-bold text-lg hover:bg-blue-800'
        >
            Back to Home
        </button>
    </div>
  )
}

export default NotFound