import React, { Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import MenuList from '../components/MenuList/MenuList';
import {Layout} from 'antd';

const MainPage = React.lazy(() => import('../components/MainPage/MainPage'));
const UserList = React.lazy(() => import('../components/UserList/UserList'));
const UserPage = React.lazy(() => import('../components/UserPage/UserPage'));

export const MainRoute = () => {
  const { Content } = Layout;

  return(
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Layout style={{ minHeight: '100vh'}}>
          <MenuList/>
          <Layout>
            <Content style={{padding: 20}}>
              <Route exact path='/' component={MainPage}/>
              <Route exact path='/user_list' component={UserList}/>
              <Route exact path='/user' component={UserPage}/>
            </Content>
          </Layout>
        </Layout>
      </Switch>
    </Suspense>
  )
};
