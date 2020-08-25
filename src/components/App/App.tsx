import React, {FC, useEffect} from 'react';
import {MainRoute} from '../../routes/MainRoute';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';
import {autorun} from 'mobx';
import {useStore} from '../../hooks/useStore';

const LoginPage = React.lazy(() => import('../../components/LoginPage/LoginPage'));

const App: FC = () => {
  const {usersStore} = useStore();

  useEffect(() => {
    autorun(() => {
      usersStore.userState();
    })
  });

  return(
    <BrowserRouter>
      <Switch>
        {/*@ts-ignore*/}
        <PrivateRoute exact={true} path='/' component={MainRoute} />
        <Route exact path='/login' component={LoginPage}/>
        <MainRoute/>
      </Switch>

    </BrowserRouter>
  )
};

export default App;
