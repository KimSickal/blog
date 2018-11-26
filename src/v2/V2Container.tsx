import * as React from 'react';
import { styles } from './V2ContainerStyle';
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
      <div style={styles.container}>
        <BannerComponent />
        <div
          style={{ ...styles.container_contents, width: this.props.screenWidth }}
        >
          <div style={styles.menu}>
            <p style={styles.menu_p}>Post</p>
            <p style={styles.menu_p}>Gallery</p>
            <p style={styles.menu_p}>etc</p>
            <p style={styles.menu_p}>About</p>
          </div>
          {
            this.props.data.map((value, i) => {
              return <ArtworkComponent
                {...value}
                key={i}
              />
            })
          }
        </div>
      </div>
    );
  }
}

