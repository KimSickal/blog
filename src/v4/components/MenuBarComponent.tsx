import * as React from 'react';

import {
	Link,
	match,
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
	selectedTab: number;
}

export class MenuBarComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			match,
			selectedTab,
		} = this.props;

		return (
			<div style={styles.menuBar}>
				{
					tabList.map((e, i) => {
						return (
							<Link
								to={`${match.path}/${e}`}
								style={styles[selectedStyle('menuBar_menu', selectedTab === i)]}
								key={i}
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
