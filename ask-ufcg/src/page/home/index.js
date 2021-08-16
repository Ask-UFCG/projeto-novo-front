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
import { Spin } from 'antd'

@observer
class homeIndex extends React.Component {
  constructor() {
    super()
    this.store = new HomeIndexStore(new User(), HomeService, 'User')
  }

  componentDidMount() {
    this.store.init()
  }

  render() {
    return (
      <div className="home-page">
        <LeftMenu />
        <div className="main-home-content">
          <div className="buttons-home">
            <button className="home-tag-button new-tag">
              <ClockIcon className="tag-icon" /> Novo
            </button>
            <button className="home-tag-button other-tag">
              <ArrowUpRightIcon className="tag-icon" /> Mais Votadas
            </button>
            <button className="home-tag-button other-tag">
              <FireIcon className="tag-icon" /> Relevante
            </button>
            <button className="home-tag-button other-tag">
              <CheckCircleIcon className="tag-icon" />
              Fechadas
            </button>
          </div>
          <div className="home-asks-container">
            {this.store.loading ? (
              <Spin />
            ) : (
              this.store.allAsksForCards.map((ask2, index) => {
                return <HomeAskCard ask={ask2} key={index} />
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
