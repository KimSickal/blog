import * as React from 'react';

import {
	styles,
} from '../styles/BannerComponentStyle';

import Background from '../../data/sources/banner_image_revolve.jpg';

export class BannerComponent extends React.Component {

	public render() {
		return (
			<div
				style={{
					...styles.banner,
					backgroundImage: `url(${Background})`,
					width: document.body.clientWidth,
				}}
			>
				<h1 style={styles.banner_h1}>
					있어보이는 제목
				</h1>
					<p style={styles.banner_h1}>
						Sustainable Blog Project
				</p>
			</div>
		);
	}
}
