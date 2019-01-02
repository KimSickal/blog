import * as React from 'react';

import {
	Switch,
	Route,
	Redirect,
} from 'react-router';

import {
	Post,
	requireData,
} from './models';

import {
	V1Container,
} from './v1/V1Container';

import {
	V2Container,
} from './v2/V2Container';

import {
	V3Container,
} from './v3/V3Container';

import {
	screenSize,
} from './constants/screen';

import {
	latestVersion,
} from './constants/constants';

import './App.css';

interface ComponentStates {
	data: Post[];
	screenWidth: number;
	selectedVersion: number;
}

class App extends React.Component<{}, ComponentStates> {
	constructor(props: {}) {
		super(props);
		const selectedVersion = parseInt(window.location.pathname.substring(7).split('/')[0], 10);
		this.state = {
			data: [],
			screenWidth: this.calculateScreenWidth(),
			selectedVersion: selectedVersion,
		};
		this.calculateScreenWidth = this.calculateScreenWidth.bind(this);
		this.onResize = this.onResize.bind(this);
	}

	private handleSelect(event: React.FormEvent<HTMLSelectElement>) {
		this.setState({ selectedVersion: parseInt(event.currentTarget.value, 10) });
		window.location.pathname = `blog/v${event.currentTarget.value}`;
	}

	private calculateScreenWidth() {
		return Math.max(Math.min(document.body.clientWidth, screenSize.maxWidth), screenSize.minWidth);
	}

	private onResize() {
		this.setState({ screenWidth: this.calculateScreenWidth() });
	}

	public componentDidMount() {
		this.setState({
			data: requireData(),
		});
		window.addEventListener('resize', this.onResize);
		this.onResize();
	}

	public render() {
		return (
			<div className="App">
				<div className="header" style={{ width: this.state.screenWidth }}>
					<div className="headerTitle"><p>Name of this page</p></div>
					<div className="headerSearchBar"><p>Search bar</p></div>
					<div className="headerVersionControl">
						<select
							className="versionList"
							onChange={(event) => this.handleSelect(event)}
							value={this.state.selectedVersion}
						>
							{
								Array.from(Array(latestVersion)).map((e, i) => {
									return (
										<option
											value={`${i + 1}`}
											key={i}
										>
											{`v${i + 1}`}
										</option>
									);
								})
							}
						</select>
					</div>
				</div>
				{/* {
					(() => {
						switch (this.state.selectedVersion) {
							case 1:
								return <V1Container {...this.state} />;
							case 2:
								return <V2Container {...this.state} />;
							case 3:
								return <V3Container {...this.state} />;
							default:
								return null;
						}
					})()
				} */}
				<Switch>
					<Route
						exact={true}
						path={'/blog'}
						render={() => {
							return (
								<Redirect
									to={'/blog/v3'}
								/>
							);
						}}
					/>
					<Route
						path={'/blog/v3'}
						render={() => {
							return (
								<V3Container
									{...this.state}
								/>
							);
						}}
					/>
					<Route
						path={'/blog/v2'}
						render={() => {
							return (
								<V2Container
									{...this.state}
								/>
							);
						}}
					/>
					<Route
						path={'/blog/v1'}
						render={() => {
							return (
								<V1Container
									{...this.state}
								/>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
