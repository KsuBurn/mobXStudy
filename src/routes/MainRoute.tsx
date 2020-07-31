import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const MainPage = React.lazy(() => import('../components/MainPage/MainPage'));
const UserList = React.lazy(() => import('../components/UserList/UserList'));
const UserPage = React.lazy(() => import('../components/UserPage/UserPage'));
const LoginPage = React.lazy(() => import('../components/LoginPage/LoginPage'));

export const MainRoute = () => {
  return(
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
         {/*@ts-ignore*/}
        <PrivateRoute exact={true} path='/' component={MainPage}/>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/user_list' component={UserList}/>
        <Route exact path='/user' component={UserPage}/>
      </Switch>
    </Suspense>
  )
};