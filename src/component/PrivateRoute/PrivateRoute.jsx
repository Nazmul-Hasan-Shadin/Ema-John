import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ( {children}) => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
  
     if (!loggedInUser) {
        return  <Navigate to='/login' replace></Navigate>
        
     }
     return children;




};

export default PrivateRoute;