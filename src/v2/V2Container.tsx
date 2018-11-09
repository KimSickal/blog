import * as React from 'react';
import './V2Container.css';
import { ArtworkComponent } from './components/ArtworkComponent';
import { ImagePost } from '../models/Posts';
import { BannerComponent } from './components/BannerComponent';

interface ComponentProps {
  data: ImagePost[];
  screenWidth: number;
}

export class V2Container extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }
  public render() {
    return (
      <div
        className="Container"
      >
        <BannerComponent />
        <div
          className="contents"
          style={{ width: this.props.screenWidth }}
        >
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
      </div>
    );
  }
}