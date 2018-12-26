import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import '../styles/ArtworkComponent.css';
import {
	Post,
	loadImagesToComponent,
	getTitle,
	loadMarkdown,
} from 'src/models/Posts';

interface ComponentProps {
	post: Post;
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
		this.handleClick = this.handleClick.bind(this);
	}

	public handleClick() {
		const {
			post,
		} = this.props;

		this.setState({ isOpen: !this.state.isOpen });
		if (!this.state.isOpen) {
			loadMarkdown(post).then((response) => {
				return response.text().then((text) => {
					this.setState({
						markdownText: text,
					});
				});
			});
		}
	}

	public render() {
		const {
			post,
		} = this.props;

		return (
			<div className="Artwork">
				<div
					className="Title"
					onClick={this.handleClick}
				>
					<h2>
						{getTitle(post)}
					</h2>
					<h2>
						{this.state.isOpen ? '▲' : '▼'}
					</h2>
				</div>
				{this.state.isOpen ?
					<div>
						<div className="Content">
							{
								loadImagesToComponent(post)
							}
						</div>
						<div className="Markdown">
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
