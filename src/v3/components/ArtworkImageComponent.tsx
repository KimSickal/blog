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
	mouseOver: boolean;
}

export class ArtworkImageComponent extends React.Component<ComponentProps, ComponentStates> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			imageNumber: 0,
			currentImage: null,
			mouseOver: false,
		};
		this.onClickArrow = this.onClickArrow.bind(this);
	}

	private loadImage(imageAddress: string) {
		this.setState({
			currentImage: null,
		});
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

	private onClickArrow(event: React.MouseEvent<HTMLElement>, increase: boolean) {
		const {
			post,
		} = this.props;

		const images = getImages(post);

		let {
			imageNumber,
		} = this.state;

		const maxLength = getImages(post).length;

		if (maxLength <= 1) {
			return;
		}

		imageNumber += (increase ? 1 : -1);

		if (imageNumber < 0) {
			imageNumber = maxLength - 1;
		}

		if (imageNumber >= maxLength) {
			imageNumber = 0;
		}

		this.setState({
			imageNumber: imageNumber,
		});

		this.loadImage(images[imageNumber]);

		event.stopPropagation();
	}

	public render() {
		const {
			currentImage,
			mouseOver,
		} = this.state;

		if (currentImage === null) {
			return (
				<LoadingComponent />
			);
		}

		const opacity = mouseOver ? 0.7 : 0;

		return (
			<div
				style={styles.content}
				onMouseOver={() => {
					this.setState({
						mouseOver: true,
					});
				}}
				onMouseOut={() => {
					this.setState({
						mouseOver: false,
					});
				}}
			>
				<img
					style={styles.content_img}
					src={currentImage}
				/>
				<div
					style={{
						...styles.content_img_shadow,
						opacity,
					}}
					onClick={() => window.open(currentImage)}
				>
					<div
						style={{
							...styles.content_img_button,
							...styles.content_img_button_left,
						}}
						onClick={(event: React.MouseEvent<HTMLElement>) => { this.onClickArrow(event, false); }}
					>
						<p
							style={styles.content_img_button_text}
						>
							{'◀'}
						</p>
					</div>
					<div
						style={{
							...styles.content_img_button,
							...styles.content_img_button_right,
						}}
						onClick={(event: React.MouseEvent<HTMLElement>) => { this.onClickArrow(event, true); }}
					>
						<p
							style={styles.content_img_button_text}
						>
							{'▶'}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
