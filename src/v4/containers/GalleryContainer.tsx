import * as React from 'react';

import {
	Post,
} from 'src/models';

import {
	ArtworkPostImageComponent,
} from '../components';

import {
	styles,
} from '../styles/GalleryContainerStyle';

interface ComponentProps {
	data: Post[];
}

export class GalleryContainer extends React.Component<ComponentProps> {
	public render() {
		const {
			data,
		} = this.props;

		return (
			<div
				style={styles.container}
			>
				{
					data.map((post, i) => {
						return (
							<ArtworkPostImageComponent
								post={post}
								key={i}
								onClick={() => console.log('asdf')}
							/>
						);
					})
				}
			</div>
		);
	}
}
