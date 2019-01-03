import * as React from 'react';

import {
	match,
	Switch,
	Route,
	Redirect,
	Link,
} from 'react-router-dom';

import {
	tabList,
	Post,
	selectedStyle,
} from '../models';

import {
	ArtworkComponent,
	BannerComponent,
	ArtowrkPostComponent,
} from './components';

import {
	styles,
} from './ContainerStyle';

interface ComponentProps {
	match: match;
	data: Post[];
	screenWidth: number;
}

interface ComponentStates {
	selectedTab: number;
}

export class V4Container extends React.Component<ComponentProps, ComponentStates> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			selectedTab: 0,
		};
	}

	public render() {
		const {
			data,
			match,
		} = this.props;

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
					<Switch>
						<Route
							exact={true}
							path={`${match.path}/`}
							render={() => {
								return (
									<Redirect
										to={`${match.path}/post`}
									/>
								);
							}}
						/>
						<Route
							exact={true}
							path={`${match.path}/post`}
							render={() => {
								return (
									data.map((post, i) => {
										return (
											<Link
												to={`${match.path}/post/${i + 1}`}
											>
												<ArtworkComponent
													post={post}
													postNumber={data.length - i}
													key={i}
												/>
											</Link>
										);
									})
								);
							}}
						/>
						<Route
							exact={true}
							path={`${match.path}/post/:postId`}
							render={(props) => {
								const postNumber = parseInt(props.match.params.postId, 10) - 1;
								console.log(postNumber, data);
								return (
									<ArtowrkPostComponent
										post={data[postNumber]}
										postNumber={postNumber}
									/>
								);
							}}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

