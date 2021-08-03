import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout, { Footer } from 'antd/lib/layout/layout';

import Header from './components/Header/header';
import LoginForm from './page/login/form';
import RegisterForm from './page/register/form';
import ProfileForm from './page/profile/form';

import { observer } from 'mobx-react';

@observer
class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
          <Header />
          <Switch>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/register'>
              <RegisterForm />
            </Route>
            <Route path='/profile'>
              <ProfileForm />
            </Route>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>
            Ask-UFCG ©2021 Created by a Group of UFCG Students
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
