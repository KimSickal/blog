import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import '../styles/ArtworkComponent.css';

interface ComponentProps {
  images: string[];
  markdownAddress: string;
  title: string;
}

interface ComponentState {
  text: string;
  isOpen: boolean;
}

export class ArtworkComponent extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      text: "",
      isOpen: false,
    };
  }

  private loadMarkdown() {
    fetch(require('../../data/text/README.md')).then((response) => {
      return response.text().then((markdownText) => {
        this.setState({ text: markdownText });
      })
    })
  }

  public render() {
    const {
      images,
      title,
    } = this.props;
    return (
      <div
        className='Artwork'
      >
        <div
          className='Title'
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
            if (!this.state.isOpen) {
              this.loadMarkdown();
            }
          }}
        >
          <h2>
            {title}
          </h2>
          <h2>
            {this.state.isOpen ? '▲' : '▼'}
          </h2>
        </div>
        {this.state.isOpen ?
          <div>
            <div
              className='Content'
            >
              {
                images.map((image, i) => {
                  return <img src={require(`../../data/image/${image}`)} key={i} />
                })
              }
            </div>
            <div
              className='Markdown'
            >
              <ReactMarkdown source={this.state.text} />
            </div>
          </div>
          :
          null
        }
      </div>
    );
  }
}