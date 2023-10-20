import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';


const isAuth = localStorage.getItem('username') ?? null
const Authenticated = (Component: ComponentType): ComponentType<any> => (props) => {
    
    if (!isAuth) {
        return <Navigate to={'/login'} replace/>
    }

    return <Component  {...props}/>
}

export default Authenticated