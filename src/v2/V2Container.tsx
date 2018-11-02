import * as React from 'react';
import './V2Container.css';
import { ArtworkComponent } from './components/ArtworkComponent';
import { ImagePost } from './models/Posts';

interface ComponentProps {
  data: ImagePost[];
}

export class V2Container extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }
  public render() {
    return (
      <div className="Container">
        <h1>
          Banner
        </h1>
        <div className="menu">
          <p>menu1</p>
          <p>menu2</p>
          <p>menu3</p>
          <p>menu4</p>
        </div>
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