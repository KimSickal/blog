import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import '../styles/ArtworkComponent.css';

interface ComponentProps {
  images: string[];
  markdownAddress: string;
  maxWidth: number;
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
      maxWidth,
      title,
    } = this.props;
    return (
      <div
        className='Artwork'
        style={{
          width: maxWidth
        }}
      >
        <div
          className='Title'
          style={{
            width: maxWidth
          }}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
            if(!this.state.isOpen){
              console.log(this.state.isOpen);
              this.loadMarkdown();
            }
          }}
        >
          <h1>
            {title}
          </h1>
        </div>
        {this.state.isOpen ?
          <div
            className='Content'
          >
            {
              images.map((image, i) => {
                return <img src={require(`../../data/image/${image}`)} key={i} />
              })
            }
            <div
              className='Markdown'
              style={{
                width: maxWidth
              }}
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