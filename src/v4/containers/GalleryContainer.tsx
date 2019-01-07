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
	artworkForScreen,
} from 'src/constants';

import {
	styles,
} from '../styles/GalleryContainerStyle';

interface ComponentProps {
	data: Post[];
	match: match;
}

interface ComponentStates {
	lengthOfList: number;
}

export class GalleryContainer extends React.Component<ComponentProps & RouterProps, ComponentStates> {
	constructor(props: ComponentProps & RouterProps) {
		super(props);
		this.state = {
			lengthOfList: Math.min(this.props.data.length, artworkForScreen),
		};
		this.onScroll = this.onScroll.bind(this);
	}

	public componentDidMount() {
		window.onscroll = this.onScroll;
	}

	private onScroll() {
		const {
			data,
		} = this.props;

		const {
			lengthOfList,
		} = this.state;

		console.log(`${window.innerHeight} + ${document.documentElement.scrollTop} = ${window.innerHeight + document.documentElement.scrollTop}`);
		console.log(`${document.documentElement.offsetHeight}`);

		if(window.innerHeight + document.documentElement.scrollTop + 500 >= document.documentElement.offsetHeight) {
			this.setState({
				lengthOfList: Math.min(lengthOfList + artworkForScreen, data.length),
			});
		}
	}

	public render() {
		const {
			data,
			match,
			history,
		} = this.props;

		const {
			lengthOfList,
		} = this.state;

		return (
			<div
				style={styles.container}
			>
				{
					data.slice(0, lengthOfList).map((post, i) => {
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
