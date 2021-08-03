import Layout, { Footer } from 'antd/lib/layout/layout'
import Header from './components/Header/header'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'
import LoginForm from './page/login/form'
import RegisterForm from './page/register/form'
import { observer } from 'mobx-react'
import InfoProvider from './context/infoContext'
@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <InfoProvider>
            <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
              <Header />
              <Switch>
                <Route path="/login">
                  <LoginForm />
                </Route>
                <Route path="/register">
                  <RegisterForm />
                </Route>
              </Switch>
              <Footer style={{ textAlign: 'center' }}>
                Ask-UFCG ©2021 Created by a Group of UFCG Students
              </Footer>
            </Layout>
          </InfoProvider>
        </Router>
      </div>
    )
  }
}

export default App
