import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

interface ComponentProps {
  image: string[];
  markdownAddress: string;
}

interface ComponentState {
  text: string;
}

export class ArtworkComponent extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    console.log(require('../../data/text/README.md'));
    this.state = { text: "" };
  }
  componentDidMount(){
    fetch(require('../../data/text/README.md')).then((response) => {
      return response.text().then((markdownText) => {
        console.log(markdownText)
        this.setState({ text: markdownText });
      })
    })
  }
  
  public render() {
    const {
      image,
    } = this.props;
    return (
      <div className='Artwork'>
        <img src={require(`../../data/image/${image[0]}`)} />
        <ReactMarkdown source={this.state.text} />
      </div>
    );
  }
}