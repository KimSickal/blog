import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import '../styles/ArtworkComponent.css';

interface ComponentProps {
  images: string[];
  markdownAddress: string;
}

interface ComponentState {
  text: string;
}

export class ArtworkComponent extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = { text: "" };
  }
  componentDidMount() {
    fetch(require('../../data/text/README.md')).then((response) => {
      return response.text().then((markdownText) => {
        this.setState({ text: markdownText });
      })
    })
  }

  public render() {
    const {
      images,
    } = this.props;
    return (
      <div
        className='Artwork'
        style={{
          width: 600
        }}
      >
        {
          images.map((image, i) => {
            return <img src={require(`../../data/image/${image}`)} key={i} />
          })
        }
        <div className='Markdown'>
          <ReactMarkdown source={this.state.text} />
        </div>
      </div>
    );
  }
}