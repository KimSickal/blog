import * as React from 'react';

import {
	match,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import {
	NotFoundComponent,
} from 'src/NotFoundComponent';

import {
	Post,
	tabList,
} from '../models';

import {
	BannerComponent,
	MenuBarComponent,
} from './components';

import {
	ArtowrkPostContainer,
	PostListContainer,
	GalleryContainer,
} from './containers';

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

	public componentDidUpdate({}: ComponentProps, prevStates: ComponentStates) {
		const {
			match,
		} = this.props;

		const currentTab = window.location.pathname.slice(match.path.length + 1).split('/')[0];
		tabList.map((tabName, i) => {
			if(tabName.substring(1) === currentTab.substring(1)) {
				if(prevStates.selectedTab !== i) {
					this.setState({
						selectedTab: i,
					});
				}
			}
		});
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
					<MenuBarComponent
						{...this.props}
						selectedTab={selectedTab}
					/>
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
									<PostListContainer
										{...this.props}
									/>
								);
							}}
						/>
						<Route
							exact={true}
							path={`${match.path}/gallery`}
							render={(props) => {
								return (
									<GalleryContainer
										{...this.props}
										{...props}
									/>
								);
							}}
						/>
						<Route
							exact={true}
							path={`${match.path}/post/:postId`}
							render={(props) => {
								const postId = parseInt(props.match.params.postId, 10);
								return (
									<ArtowrkPostContainer
										post={data[data.length - postId]}
										postNumber={postId}
									/>
								);
							}}
						/>
						<Route
							component={NotFoundComponent}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

