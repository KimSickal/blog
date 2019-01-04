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

export class V4Container extends React.Component<ComponentProps> {
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

		return (
			<div style={styles.container}>
				<BannerComponent />
				<div
					style={{ ...styles.container_contents, width: this.props.screenWidth }}
				>
					<MenuBarComponent
						{...this.props}
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
										history={props.history}
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

