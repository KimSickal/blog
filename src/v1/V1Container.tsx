import * as React from 'react';
import './V1Container.css';
import { ArtworkComponent } from './components/ArtworkComponent';
import { Post, PostKeys } from '../models/Posts';

interface ComponentProps {
	data: Post[];
}

export class V1Container extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
		super(props);
	}
	public render() {
		return (
			<div className="Container">
				<h1>
					Blog
				</h1>
					{
						this.props.data.map((post, i) => {
							if (post.type !== PostKeys.ARTWORK) {
								return null;
							}
							return (
								<ArtworkComponent
									post={post}
									key={i}
								/>
							);
						})
					}
			</div>
		);
	}
}
