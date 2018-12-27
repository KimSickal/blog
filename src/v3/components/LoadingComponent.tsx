import React from 'react';

import '../../animations/rotation.css';

import {
	styles,
} from '../styles/LoadingComponentStyle';

interface ComponentProps {
	height?: number;
	backgroundColor?: string;
}

export class LoadingComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			height,
			backgroundColor,
		} = this.props;

		const componentHeight = ((height === undefined) || (height < 64)) ? 64: height;

		return (
			<div
				style={{
					...styles.loading,
					width: '100%',
					height: componentHeight,
					backgroundColor: backgroundColor,
				}}
			>
				<div
					style={styles.loading_spinner}
				/>
			</div>
		);
	}
}
