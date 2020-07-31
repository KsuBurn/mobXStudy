import React, {FC, useState, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';

// @ts-ignore
const PrivateRoute: FC = ({component: Component, ...rest}) => {

  return(
    <Route
      {...rest}
      render={props =>
        Boolean(localStorage.getItem('auth')) ? (
          <Component {...props}/>
          ) : (
          <Redirect to='/login'/>
        )
      }
    />
  )
};

export default PrivateRoute;