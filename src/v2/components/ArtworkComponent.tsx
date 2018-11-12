import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { styles } from '../styles/ArtworkComponentStyle';

interface ComponentProps {
  images: string[];
  markdownAddress: string;
  title: string;
  summary: string;
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
      summary,
    } = this.props;
    return (
      <div style={styles.artwork}>
        <div
          style={styles.title}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
            if (!this.state.isOpen) {
              this.loadMarkdown();
            }
          }}
        >
          <h2 style={styles.title_h2}>
            {title}
          </h2>
          <h2 style={styles.title_h2}>
            {this.state.isOpen ? '▲' : '▼'}
          </h2>
        </div>
        {this.state.isOpen ?
          <div>
            <div style={styles.content}>
              {
                images.map((image, i) => {
                  return <img
                    style={styles.content_img}
                    src={require(`../../data/image/${image}`)}
                    key={i}
                  />
                })
              }
            </div>
            <div style={styles.markdown}>
              <ReactMarkdown source={this.state.text} />
            </div>
          </div>
          :
          <div style={styles.summary}>
            {summary === '' ? 'There is no detailed description' : summary}
          </div>
        }
      </div>
    );
  }
}