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

@observer
class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
          <Header />
          <Switch>
            <Route path='/' exact component={HomeIndex} />
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/profile' component={ProfileForm} />
            <Route path='/nova-pergunta' component={PerguntaForm} />
            <Route path='/regras' component={RegrasComunidadeForm} />
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
