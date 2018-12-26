import * as React from 'react';

import {
	Post,
	getImages,
	requireFileOfPost,
} from 'src/models';

import {
	LoadingComponent,
} from '../components';

import {
	styles,
} from '../styles/ArtworkImageComponentStyle';

interface ComponentProps {
	post: Post;
}

interface ComponentStates {
	imageNumber: number;
	currentImage: string | null;
}

export class ArtworkImageComponent extends React.Component<ComponentProps, ComponentStates> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			imageNumber: 0,
			currentImage: null,
		};
		this.onClickArrow = this.onClickArrow.bind(this);
	}

	private loadImage(imageAddress: string) {
		const img = new Image();
		const file = requireFileOfPost(this.props.post, imageAddress);
		img.onload = (() => {
			this.setState({
				currentImage: file,
			});
		});
		img.src = file;
	}

	public componentDidMount() {
		const {
			post,
		} = this.props;

		const images = getImages(post);

		this.loadImage(images[0]);
	}

	private onClickArrow(increase: boolean) {
		const {
			post,
		} = this.props;

		const images = getImages(post);

		let {
			imageNumber,
		} = this.state;

		const maxLength = getImages(post).length;

		if(maxLength <= 1) {
			return;
		}

		imageNumber += (increase ? 1 : -1);

		if(imageNumber < 0) {
			imageNumber = maxLength - 1;
		}

		if(imageNumber >= maxLength) {
			imageNumber = 0;
		}

		this.loadImage(images[imageNumber]);

		this.setState({
			imageNumber: imageNumber,
		});
	}

	public render() {
		const {
			currentImage,
		} = this.state;

		if(currentImage === null) {
			return (
				<LoadingComponent />
			);
		}

		return (
			<div
				style={styles.content}
			>
				<img
					style={styles.content_img}
					src={currentImage}
					onClick={()=>window.open(currentImage)}
				/>
				<div
					style={{
						...styles.content_img_button,
						...styles.content_img_button_left,
					}}
					onClick={() => {this.onClickArrow(false);}}
				/>
				<div
					style={{
						...styles.content_img_button,
						...styles.content_img_button_right,
					}}
					onClick={() => {this.onClickArrow(true);}}
				/>
			</div>
		);
	}
}
