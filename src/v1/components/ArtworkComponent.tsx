import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import '../styles/ArtworkComponent.css';
import { getFileLocation } from 'src/helper/Parser';

interface ComponentProps {
  images: string[];
  title: string;
  date: string;
  text: string;
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
  }

  private loadMarkdown() {
    const {
      date,
      title,
      text,
    } = this.props;
    
    fetch(require(`../../data/posts/${getFileLocation(date, title, text)}`)).then((response) => {
      return response.text().then((markdownText) => {
        this.setState({ markdownText: markdownText });
      })
    })
  }

  public render() {
    const {
      images,
      date,
      title,
      text,
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
          <h1>
            {title}
          </h1>
          <h1>
            {this.state.isOpen ? '▲' : '▼'}
          </h1>
        </div>
        {this.state.isOpen ?
          <div>
            <div
              className='Content'
            >
              {
                images.map((image, i) => {
                  return <img src={require(`../../data/posts/${getFileLocation(date, title, text)}`)} key={i} />
                })
              }
            </div>
            <div
              className='Markdown'
            >
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