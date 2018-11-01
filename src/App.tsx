import * as React from 'react';
import './App.css';
import { ArtworkComponent } from './v1/components/ArtworkComponent';
import { ImagePost } from './v1/models/Posts';

interface ComponentStates {
  data: ImagePost[];
}

class App extends React.Component<{}, ComponentStates> {
  constructor(props: {}) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.setState({
      data: require('./data/data.json'),
    })
  }
  public render() {
    return (
      <div className="App" style={{ width: 1000 }}>
        <p>
          Working
        </p>
        {
          this.state.data.map((value, i) => {
            return <ArtworkComponent
              images={value.images}
              markdownAddress={value.text}
              maxWidth={800}
              title={value.title}
              key={i}
            />
          })
        }
      </div>
    );
  }
}

export default App;
