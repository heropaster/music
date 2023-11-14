import React, {ReactNode} from 'react'
import {Navigate} from 'react-router-dom'

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const user = localStorage.getItem('user')
    if (!user) {
        return <Navigate to="/login" replace={true}/>
    }
    return <>{children}</>
}