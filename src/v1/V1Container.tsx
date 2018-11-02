import * as React from 'react';
import './V1Container.css';
import { ArtworkComponent } from './components/ArtworkComponent';
import { ImagePost } from './models/Posts';

interface ComponentProps {
  data: ImagePost[];
}

export class V1Container extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }
  public render() {
    return (
      <div className="Container">
        <h1>
          Blog
        </h1>
        {
          this.props.data.map((value, i) => {
            return <ArtworkComponent
              images={value.images}
              markdownAddress={value.text}
              title={value.title}
              key={i}
            />
          })
        }
      </div>
    );
  }
}
