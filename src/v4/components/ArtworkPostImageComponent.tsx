import * as React from 'react';

import {
	Post,
	getImages,
	requireFileOfPost,
	getTitle,
} from 'src/models';

import {
	LoadingComponent,
} from '.';

import {
	styles,
} from '../styles/ArtworkPostImageComponentStyle';

interface ComponentProps {
	post: Post;
}

interface ComponentStates {
	images: string[];
	title: string;
	imageNumber: number;
	currentImage: string | null;
	currentImageHeight: number;
	mouseOver: boolean;
}

export class ArtworkPostImageComponent extends React.Component<ComponentProps, ComponentStates> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			images: [],
			title: '',
			imageNumber: 0,
			currentImage: null,
			currentImageHeight: 0,
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

		this.setState({
			images: images,
			title: getTitle(post),
		});

		this.loadImage(images[0]);
	}

	public componentDidUpdate({}: ComponentProps, prevState: ComponentStates) {
		const {
			currentImage,
			title,
		} = this.state;

		if(prevState.currentImage === currentImage) {
			return;
		}
		const comp = document.getElementById(title);
		if (comp !== null) {
			this.setState({
				currentImageHeight: comp.clientHeight,
			});
			window.scrollTo({
				behavior: 'smooth',
				left: 0,
				top: 478,
			});
		}
	}

	private onClickArrow(event: React.MouseEvent<HTMLElement>, increase: boolean) {
		const {
			images,
		} = this.state;

		let {
			imageNumber,
		} = this.state;

		const maxLength = images.length;

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
			images,
			title: imageTitle,
			currentImage,
			currentImageHeight,
			mouseOver,
		} = this.state;

		if (currentImage === null) {
			return (
				<LoadingComponent
					height={currentImageHeight}
					backgroundColor={'#f8f9fa'}
				/>
			);
		}

		const opacity = mouseOver ? 0.7 : 0;

		return (
			<div
				id={imageTitle}
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
					{
						images.length > 1 ?
						<React.Fragment>
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
						</React.Fragment>
						:
						null
					}
				</div>
			</div>
		);
	}
}
