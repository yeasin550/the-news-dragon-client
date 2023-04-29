import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}}  replace></Navigate>
};

export default PrivetRoute;

/**
 *  STEPS
 *  1. check user is logged user in or not
 * 2. if user is logged in, then allow them to visit the route
 *  3. else redirect the user to the login page
 *  4. set up the privet router
 *  5. handle loading
 * **/ 