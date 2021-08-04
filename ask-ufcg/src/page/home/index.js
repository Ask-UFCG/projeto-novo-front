import { observer } from 'mobx-react';
import './index.css';
import React from 'react';
import HomeIndexStore from '../../stores/home';
import LeftMenu from '../../components/LeftMenu/index';

@observer
class homeIndex extends React.Component {
  constructor() {
    super();
    this.store = new HomeIndexStore();
  }

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <>
        <LeftMenu />
      </>
    );
  }
}

export default homeIndex;
