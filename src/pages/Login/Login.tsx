import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true)

        localStorage.setItem('username', username);
       setTimeout(() => {
        navigate('/')
       }, 1000)
    }

    return (
        <div className='flex flex-col justify-around items-center bg-zinc-800 w-2/5 h-1/4 rounded-md shadow-lg shadow-zinc-800 max-w-lg'>
            
            <span className='text-3xl'>Welcome to CodeLeap network!</span>
            <div>
                <span>Please enter your username</span>
                <input autoComplete='off'type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-md h-8 w-full pl-2 mt-2 text-purple-950' placeholder='@username' />
            </div>

            <button disabled={!username} className='flex gap-2 justify-center items-center bg-blue-700 px-6 py-1 rounded-md uppercase font-bold text-xl disabled:bg-blue-500 hover:bg-blue-800' onClick={handleClickLogin}>
                Login
                {
                    loading && <div className='w-4 h-4 border-blue-900 animate-[spin_1s_infinite_linear] border-t-2 border-r-4 rounded-full '></div>
                }
            </button>
        </div>
    )
}