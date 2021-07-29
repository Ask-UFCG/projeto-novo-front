import Layout, { Footer, Header } from 'antd/lib/layout/layout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import LoginForm from './page/login/form';
import RegisterForm from './page/register/form';
import { observer } from 'mobx-react';
@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ backgroundColor: '#A8DADC' }}></Header>
          <Router>
            <Switch>
              <Route path='/login'>
                <LoginForm />
              </Route>
              <Route path='/register'>
                <RegisterForm />
              </Route>
            </Switch>
          </Router>
          <Footer style={{ textAlign: 'center' }}>
            Ask UFCG ©2021 Created by a Group of UFCG Students
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
