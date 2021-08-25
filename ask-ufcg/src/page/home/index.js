import React from 'react'
import { observer } from 'mobx-react'
import './index.css'
import HomeIndexStore from '../../stores/home'
import LeftMenu from '../../components/LeftMenu/'
import RightMenu from '../../components/RightMenu/'
import HomeAskCard from '../../components/HomeAskCard/'
import { ReactComponent as ClockIcon } from '../../assets/clock.svg'
import { ReactComponent as ArrowUpRightIcon } from '../../assets/arrow-up-right.svg'
import { ReactComponent as FireIcon } from '../../assets/whh_hot.svg'
import { ReactComponent as CheckCircleIcon } from '../../assets/check-circle.svg'
import HomeService from '../../services/home'
import User from '../../domain/user'
import { Spin, Input } from 'antd'
import { HOME } from '../../stores/common/UrlRouter'
const { Search } = Input

@observer
class homeIndex extends React.Component {
  constructor() {
    super()
    this.store = new HomeIndexStore(new User(), HomeService, 'User')
  }

  componentDidMount() {
    const { setTitle } = this.props
    setTitle(HOME.text)
    this.store.init()
  }

  render() {
    return (
      <div className="home-page">
        <LeftMenu />
        <div className="main-home-content">
          <div className="buttons-home">
            <button
              className="home-tag-button new-tag"
              id="new"
              onClick={() => this.store.updateFilterAsks('new')}
            >
              <ClockIcon className="tag-icon" /> Novo
            </button>
            <button
              className="home-tag-button other-tag"
              id="vote"
              onClick={() => this.store.updateFilterAsks('vote')}
              disabled
            >
              <ArrowUpRightIcon className="tag-icon" /> Mais Votadas
            </button>
            <button
              className="home-tag-button other-tag"
              id="relevant"
              onClick={() => this.store.updateFilterAsks('relevant')}
              disabled
            >
              <FireIcon className="tag-icon" /> Relevante
            </button>
            <button
              className="home-tag-button other-tag"
              id="answered"
              onClick={() => this.store.updateFilterAsks('answered')}
            >
              <CheckCircleIcon className="tag-icon" />
              Fechadas
            </button>
          </div>
          <div className="menu-search">
            <Search
              placeholder="Pesquise uma pergunta"
              enterButton
              onSearch={(title) => this.store.searchQuestions(title)}
            />
          </div>
          <div className="home-asks-container">
            {this.store.loading ? (
              <Spin />
            ) : (
              this.store.allAsksForCards.map((question, index) => {
                debugger
                return <HomeAskCard ask={question} key={index} {...this.props} />
              })
            )}
          </div>
        </div>
        <RightMenu />
      </div>
    )
  }
}

export default homeIndex
