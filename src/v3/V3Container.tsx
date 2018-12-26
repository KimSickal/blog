import * as React from 'react';

import {
	tabList,
	Post,
	selectedStyle,
} from '../models';

import {
	ArtworkComponent,
	BannerComponent,
} from './components';

import {
	styles,
} from './V3ContainerStyle';

interface ComponentProps {
	data: Post[];
	screenWidth: number;
}

interface ComponentStates {
	selectedTab: number;
}

export class V3Container extends React.Component<ComponentProps, ComponentStates> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			selectedTab: 0,
		};
	}

	public render() {
		const {
			selectedTab,
		} = this.state;

		return (
			<div style={styles.container}>
				<BannerComponent />
				<div
					style={{ ...styles.container_contents, width: this.props.screenWidth }}
				>
					<div style={styles.menuBar}>
						{
							tabList.map((e, i) => {
								return (
									<div
										style={styles[selectedStyle('menuBar_menu', selectedTab === i)]}
										key={i}
									>
										<p style={styles[selectedStyle('menuBar_menu_p', selectedTab === i)]}>
											{e}
										</p>
									</div>
								);
							})
						}
					</div>
					{
						this.props.data.map((post, i) => {
							return (
								<ArtworkComponent
									post={post}
									postNumber={i}
								/>
							);
						})
					}
				</div>
			</div>
		);
	}
}

