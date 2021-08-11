import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout, { Footer } from 'antd/lib/layout/layout';
import Header from './components/Header/header';
import LoginForm from './page/login/form';
import RegisterForm from './page/register/form';
import ProfileForm from './page/profile/form';
import PerguntaForm from './page/pergunta/form';
import { observer } from 'mobx-react';
import RegrasComunidadeForm from './page/regras/form';
import HomeIndex from './page/home/index';
import { userContext } from './userContext';
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      token: undefined,
    };

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  logout() {
    this.setState({ user: undefined, token: undefined });
  }

  login(response) {
    const { user, token } = response;
    this.setState({ user, token }, console.log(user));
  }

  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
      loginUser: this.login,
    };
    return (
      <Router>
        <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
          <userContext.Provider value={value}>
            <Header />
            <Switch>
              <Route path='/' exact component={HomeIndex} />
              <Route path='/login' component={LoginForm} />
              <Route path='/register' component={RegisterForm} />
              <Route path='/profile' component={ProfileForm} />
              <Route path='/new-ask' component={PerguntaForm} />
              <Route path='/rules' component={RegrasComunidadeForm} />
            </Switch>
          </userContext.Provider>
          <Footer style={{ textAlign: 'center' }}>
            Ask-UFCG ©2021 Created by a Group of UFCG Students
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
