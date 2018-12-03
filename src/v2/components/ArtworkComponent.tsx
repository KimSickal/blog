import * as React from 'react';
import ReactMarkdown from 'react-markdown'
import {
	styles
} from '../styles/ArtworkComponentStyle';
import {
	Post,
	getTitle,
	loadMarkdown,
	getPostType,
	getDate,
} from 'src/models/Posts';
import{
	ArtworkImageComponent
} from '../components/ArtworkImageComponent'

interface ComponentProps {
	post: Post;
}

interface ComponentState {
	markdownText: string;
	isOpen: boolean;
}

export class ArtworkComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props)
		this.state = {
			markdownText: "",
			isOpen: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const {
			post,
		} = this.props;

		this.setState({ isOpen: !this.state.isOpen });
		if (!this.state.isOpen) {
			loadMarkdown(post).then((response) => {
				return response.text().then((text) => {
					this.setState({
						'markdownText': text,
					});
				})
			})
		}
	}

	public render() {
		const {
			post,
		} = this.props;

		return (
			<div
				style={styles.artwork}
				onClick={this.handleClick}
			>
				<div style={styles.title}>
					<p style={styles.title_p}>
						{getTitle(post)}
					</p>
					<p style={styles.title_p}>
						{this.state.isOpen ? '▲' : '▼'}
					</p>
				</div>
				<div style={styles.title}>
					<p>
						{`분류: ${getPostType(post)}`}
					</p>
					<p>
						{getDate(post)}
					</p>
				</div>
				{this.state.isOpen ?
					<div>
						<ArtworkImageComponent
							{...this.props}
						/>
						<div style={styles.markdown}>
							<ReactMarkdown source={this.state.markdownText} />
						</div>
					</div>
					:
					null
				}
			</div>
		);
	}
}