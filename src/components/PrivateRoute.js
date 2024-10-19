import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn,children}) => {
    /*children by default aa jata hai props me child mera dashboard hai*/
      if(isLoggedIn)  {
        return children;
      }
      else{
        return <Navigate to="/login"/>
      }
}

export default PrivateRoute
