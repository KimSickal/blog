import * as React from 'react';

interface ComponentProps{
  image: string;
  text: string;
}

export class ArtworkComponent extends React.Component<ComponentProps> {
  public render() {
    const {
      image,
      text,
    } = this.props;
    return (
      <div className='Artwork'>
        <img src={require('../../data/image/' + image)} />
        <p>{text}</p>
      </div>
    );
  }
}