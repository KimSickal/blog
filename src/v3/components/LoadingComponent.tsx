import React from 'react';

import '../../animations/rotation.css';

import {
	styles,
} from '../styles/LoadingComponentStyle';

export class LoadingComponent extends React.Component {
	public render() {
		return (
			<div
				style={styles.loading_spinner}
			/>
		);
	}
}
