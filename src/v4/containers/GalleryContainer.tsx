import * as React from 'react';

import {
	match, RouterProps,
} from 'react-router';

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
	match: match;
}

export class GalleryContainer extends React.Component<ComponentProps & RouterProps> {
	public render() {
		const {
			data,
			match,
			history,
		} = this.props;

		return (
			<div
				style={styles.container}
			>
				{
					data.map((post, i) => {
						const targetPost = (match.path.split('/').map((e) => {
							if(e === 'gallery' || e === 'Gallery') {
								return;
							}
							return e;
						})).join('/');
						return (
							<ArtworkPostImageComponent
								post={post}
								key={i}
								onClick={() => history.push(`${targetPost}post/${data.length-i}`)}
							/>
						);
					})
				}
			</div>
		);
	}
}
