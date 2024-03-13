import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';

const ProtectedRoute = () => {
    const location = useLocation();
    const token = localStorage.getItem("auth");
  return (
     token ? <Outlet /> : <Navigate replace state={{from:location}} to='/login' />
  )
}

export default ProtectedRoute;