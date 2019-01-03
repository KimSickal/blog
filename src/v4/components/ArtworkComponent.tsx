import * as React from 'react';

import {
	Post,
	getTitle,
	getPostType,
	getDate,
} from 'src/models';


import {
	styles,
} from '../styles/ArtworkComponentStyle';

interface ComponentProps {
	post: Post;
	postNumber: number;
}

interface ComponentState {
	markdownText: string;
	isOpen: boolean;
}

export class ArtworkComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			markdownText: '',
			isOpen: false,
		};
	}

	public render() {
		const {
			post,
			postNumber,
		} = this.props;

		return (
			<div style={styles.artwork}>
				<div
					style={styles.contract}
				>
					<div
						style={styles.title}
					>
						<p style={styles.title_p}>
							{getTitle(post)}
						</p>
						<p style={styles.title_p}>
							{this.state.isOpen ? '▲' : '▼'}
						</p>
					</div>
					<div
						style={styles.summary}
					>
						<p style={styles.summary_p}>
							{`#${postNumber} / 분류: ${getPostType(post)}`}
						</p>
						<p style={styles.summary_p}>
							{getDate(post)}
						</p>
					</div>
				</div>
				<div style={styles.division} />
			</div>
		);
	}
}
