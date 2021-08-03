import React from 'react';

import { Layout, Menu } from 'antd';

import { ReactComponent as BloomIcon } from '../../assets/bloom.svg';
import { ReactComponent as ListIcon } from '../../assets/list.svg';
import { ReactComponent as TagIcon } from '../../assets/tag.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as HelpIcon } from '../../assets/help-circle.svg';
import { ReactComponent as MessageIcon } from '../../assets/message-circle.svg';

import './index.css';

class LeftMenu extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Layout.Sider className="left-bar" width="20vw">
				<Menu className="menu-left-bar">
					<Menu.Item key="1" className="menu-left-search" icon={<BloomIcon />}>Buscar</Menu.Item >

					<p className="menu-left-bar-text">Menu</p>
					<Menu.Item key="2" icon={<ListIcon />}>Questoes</Menu.Item >
					<Menu.Item key="3" icon={<TagIcon />}>Tags</Menu.Item >

					<p className="menu-left-bar-text">Navegação Pessoal</p>
					<Menu.Item key="5" icon={<HeartIcon />}>Suas questões</Menu.Item >
					<Menu.Item key="6" icon={<HelpIcon />}>Suas respostas</Menu.Item >
					<Menu.Item key="7" icon={<MessageIcon />}>Suas curtidas e votos</Menu.Item >
				</Menu>
			</Layout.Sider>
		);
	}
}

export default LeftMenu;
