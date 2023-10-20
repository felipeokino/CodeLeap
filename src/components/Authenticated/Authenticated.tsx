import React, { ComponentType, FC, ReactNode, useState } from 'react'
import Login from '../../pages/Login';
import {Navigate} from 'react-router-dom'


const isAuth = localStorage.getItem('username') || null
const Authenticated = (Component: ComponentType): ComponentType<any> => (props) => {
    
    if (!isAuth) {
        return <Navigate to={'/login'} replace/>
    }

    return <Component  />
}

export default Authenticated