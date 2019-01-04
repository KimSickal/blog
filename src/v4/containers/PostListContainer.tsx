import * as React from 'react';

import {
	Link,
	match,
} from 'react-router-dom';

import {
	Post,
} from 'src/models';

import {
	ArtworkSummaryComponent,
} from '../components';

interface ComponentProps {
	data: Post[];
	match: match;
}

export class PostListContainer extends React.Component<ComponentProps> {
	public render() {
		const {
			data,
			match,
		} = this.props;

		return (
			data.map((post, i) => {
				return (
					<Link
						to={`${match.path}/post/${data.length - i}`}
						key={i}
					>
						<ArtworkSummaryComponent
							post={post}
							postNumber={data.length - i}
						/>
					</Link>
				);
			})
		);
	}
}
