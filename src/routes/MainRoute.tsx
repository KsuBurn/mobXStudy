import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const MainPage = React.lazy(() => import('../components/MainPage/MainPage'));
const UserList = React.lazy(() => import('../components/UserList/UserList'));
const UserPage = React.lazy(() => import('../components/UserPage/UserPage'));

export const MainRoute = () => {
  return(
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/user_list' component={UserList}/>
        <Route exact path='/user' component={UserPage}/>
      </Switch>
    </Suspense>
  )
};