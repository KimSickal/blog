import * as React from 'react';

import {
	Link, match,
} from 'react-router-dom';

import {
	tabList,
	selectedStyle,
} from '../../models';

import {
	styles,
} from '../styles/MenuBarComponentStyle';

interface ComponentProps {
	match: match;
}

interface ComponentStates {
	selectedTab: number;
}

export class MenuBarComponent extends React.Component<ComponentProps, ComponentStates> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			selectedTab: -1,
		};
		this.checkCurrentTab = this.checkCurrentTab.bind(this);
	}

	private checkCurrentTab() {
		const {
			match,
		} = this.props;

		const currentTab = window.location.pathname.slice(match.path.length + 1).split('/')[0];
		tabList.map((tabName, i) => {
			if(tabName.substring(1) === currentTab.substring(1)) {
				this.setState({
					selectedTab: i,
				});
			}
		});
	}

	public componentDidMount() {
		this.checkCurrentTab();
	}

	public render() {
		const {
			match,
		} = this.props;

		const {
			selectedTab,
		} = this.state;

		return (
			<div style={styles.menuBar}>
				{
					tabList.map((e, i) => {
						return (
							<Link
								to={`${match.path}/${e}`}
								style={styles[selectedStyle('menuBar_menu', selectedTab === i)]}
								key={i}
								onClick={this.checkCurrentTab}
							>
								<p style={styles[selectedStyle('menuBar_menu_p', selectedTab === i)]}>
									{e}
								</p>
							</Link>
						);
					})
				}
			</div>
		);
	}
}
