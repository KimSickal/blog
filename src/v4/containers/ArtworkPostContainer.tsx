import * as React from 'react';

import ReactMarkdown from 'react-markdown';

import {
	Post,
	loadMarkdown,
} from 'src/models';

import {
	ArtworkSummaryComponent,
	ArtworkPostImageComponent,
} from '../components';

import {
	styles,
} from '../styles/ArtworkPostContainerStyle';

interface ComponentProps {
	post: Post;
	postNumber: number;
}

interface ComponentState {
	markdownText: string;
}

export class ArtowrkPostContainer extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			markdownText: '',
		};
		loadMarkdown(this.props.post).then((response) => {
			return response.text().then((text) => {
				this.setState ({
					markdownText: text,
				});
			});
		});
	}

	public render() {
		return (
			<div style={styles.content}>
				<ArtworkPostImageComponent
					{...this.props}
				/>
				<ArtworkSummaryComponent
					{...this.props}
				/>
				<div style={styles.markdown}>
					<ReactMarkdown source={this.state.markdownText} />
				</div>
			</div>
		);
	}
}
