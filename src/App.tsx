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
	NotFoundComponent,
} from './NotFoundComponent';

import {
	latestVersion,
	screenSize,
	baseURL,
	versions,
} from './constants';

import './App.css';
import { Link } from 'react-router-dom';

interface ComponentStates {
	data: Post[];
	screenWidth: number;
	selectedVersion: number;
}

class App extends React.Component<{}, ComponentStates> {
	constructor(props: {}) {
		super(props);
		let selectedVersion = parseInt(window.location.pathname.substring(7).split('/')[0], 10);
		if(isNaN(selectedVersion)) {
			selectedVersion = latestVersion;
		}
		this.state = {
			data: requireData(),
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
		window.addEventListener('resize', this.onResize);
		this.onResize();
	}

	public render() {
		return (
			<div className="App">
				<div className="header" style={{ width: this.state.screenWidth }}>
					<div
						className="headerTitle"
					>
						<Link
							to={baseURL}
						>
							{'Name of this page'}
						</Link>
					</div>
					<div
						className="headerSearchBar"
					>
						<p>
							{'Search bar'}
						</p>
					</div>
					<div
						className="headerVersionControl"
					>
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
				<Switch>
					<Route
						exact={true}
						path={baseURL}
						render={() => {
							return (
								<Redirect
									to={`${baseURL}/v${latestVersion}`}
								/>
							);
						}}
					/>
					{
						versions.map((Component,i) => {
							return (
								<Route
									path={`${baseURL}/v${i + 1}`}
									render={(props) => {
										return (
											<Component
												{...this.state}
												match={props.match}
											/>
										);
									}}
									key={i}
								/>
							);
						})
					}
					<Route
						component={NotFoundComponent}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
