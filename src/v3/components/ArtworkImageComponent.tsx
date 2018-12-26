import * as React from 'react';

import {
	Post,
	loadImagesToComponent,
} from 'src/models';

import {
	styles,
} from '../styles/ArtworkImageComponentStyle';

interface ComponentProps {
	post: Post;
}

export class ArtworkImageComponent extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
		super(props);
	}

	public render() {
		const {
			post,
		} = this.props;

		return (
			<div>
				{
					loadImagesToComponent(post, styles.content_img)
				}
			</div>
		);
	}
}
