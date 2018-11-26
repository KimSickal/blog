import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { styles } from '../styles/ArtworkComponentStyle';
import { getFileLocation } from 'src/helper/Parser';

interface ComponentProps {
  images: string[];
  title: string;
  summary: string;
  date: string;
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
      title,
      date,
    } = this.props;

    const fileLocation = getFileLocation(date, title, `${title}.md`);

    fetch(require(`../../data/posts/${fileLocation}`)).then((response) => {
      return response.text().then((markdownText) => {
        this.setState({ markdownText: markdownText });
      })
    })
  }

  public render() {
    const {
      images,
      title,
      summary,
      date,
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
                images.map((imageName, i) => {
                  const fileLocation = getFileLocation(date, title, imageName);
                  return <img
                    style={styles.content_img}
                    src={require(`../../data/posts/${fileLocation}`)}
                    key={i}
                  />
                })
              }
            </div>
            <div style={styles.markdown}>
              <ReactMarkdown source={this.state.markdownText} />
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