import React from 'react'

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Layout, { Footer } from 'antd/lib/layout/layout'
import Header from './components/Header/header'
import LoginForm from './page/login/form'
import RegisterForm from './page/register/form'
import ProfileForm from './page/profile/form'
import PerguntaForm from './page/pergunta/form'
import Visualizacao from './page/visualizacao/form'
import { observer } from 'mobx-react'
import RegrasComunidadeForm from './page/regras/form'
import HomeIndex from './page/home/index'
import { userContext } from './userContext'
import { ASK, HOME, NEW_ASK, PROFILE, REGISTER, RULES, SIGN_IN } from './stores/common/UrlRouter'
import { observable } from 'mobx'
@observer
class App extends React.Component {
  @observable title = ''
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      token: undefined,
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user')) || undefined
    const token = JSON.parse(localStorage.getItem('token')) || undefined
    this.title = HOME.text
    this.setState({ user, token })
  }

  logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.setState({ user: undefined, token: undefined })
  }

  login = (response) => {
    const { user, token } = response
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', JSON.stringify(token))
    this.setState({ user, token })
  }

  setUser = (response) => {
    const { user } = response
    this.setState({ user })
  }

  setTitle = (title = '') => {
    if (title !== this.title) {
      this.title = title
    }
  }

  render() {
    const value = {
      user: this.state.user,
      token: this.state.token,
      title: this.title,
      setTitle: this.setTitle,
      logoutUser: this.logout,
      loginUser: this.login,
      setUser: this.setUser,
    }
    return (
      <Router>
        <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
          <userContext.Provider value={value}>
            <Header />
            <Switch>
              <Route
                path={HOME.route}
                exact
                render={(routeProps) => <HomeIndex {...routeProps} setTitle={this.setTitle} />}
              />
              <Route
                path={REGISTER.route}
                exact
                render={() =>
                  this.state.user ? (
                    <Redirect to={HOME.route} />
                  ) : (
                    <Route
                      path={REGISTER.route}
                      exact
                      render={(routeProps) => (
                        <RegisterForm {...routeProps} setTitle={this.setTitle} />
                      )}
                    />
                  )
                }
              />
              <Route
                path={SIGN_IN.route}
                exact
                render={() =>
                  this.state.user ? (
                    <Redirect to={HOME.route} />
                  ) : (
                    <Route
                      path={SIGN_IN.route}
                      exact
                      render={(routeProps) => (
                        <LoginForm {...routeProps} setTitle={this.setTitle} />
                      )}
                    />
                  )
                }
              />
              <Route
                path={PROFILE.route}
                exact
                render={() =>
                  this.state.user ? (
                    <Route
                      path={PROFILE.route}
                      exact
                      render={(routeProps) => (
                        <ProfileForm {...routeProps} setTitle={this.setTitle} />
                      )}
                    />
                  ) : (
                    <Redirect to={SIGN_IN.route} />
                  )
                }
              />
              <Route
                path={NEW_ASK.route}
                exact
                render={() =>
                  this.state.user ? (
                    <Route
                      path={NEW_ASK.route}
                      exact
                      render={(routeProps) => (
                        <PerguntaForm {...routeProps} setTitle={this.setTitle} />
                      )}
                    />
                  ) : (
                    <Redirect to={SIGN_IN.route} />
                  )
                }
              />
              <Route
                path={RULES.route}
                render={(routeProps) => (
                  <RegrasComunidadeForm {...routeProps} setTitle={this.setTitle} />
                )}
              />
              <Route
                path={ASK.route}
                render={(routeProps) => <Visualizacao {...routeProps} setTitle={this.setTitle} />}
              />
              <Route
                path="/*"
                render={(routeProps) => <HomeIndex {...routeProps} setTitle={this.setTitle} />}
              />
            </Switch>
          </userContext.Provider>
          <Footer style={{ textAlign: 'center' }}>
            Ask-UFCG ©2021 Created by a Group of UFCG Students
          </Footer>
        </Layout>
      </Router>
    )
  }
}

export default App
