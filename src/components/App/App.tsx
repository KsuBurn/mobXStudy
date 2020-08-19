import React, {FC} from 'react';
import {MainRoute} from '../../routes/MainRoute';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';

const LoginPage = React.lazy(() => import('../../components/LoginPage/LoginPage'));

const App: FC = () => {

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
