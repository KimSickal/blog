import * as React from 'react';
import './App.css';
import { ArtworkComponent } from './v1/components/ArtworkComponent';
import { ImagePost } from './v1/models/Posts';

interface ComponentStates {
  data: ImagePost[];
  screenWidth: number;
}

class App extends React.Component<{}, ComponentStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      screenWidth: Math.max(Math.min(document.body.clientWidth, 800), 400),
    };
  }
  componentDidMount() {
    this.setState({
      data: require('./data/data.json'),
    })
    window.addEventListener('resize', () => { this.setState({ screenWidth: document.body.clientWidth }) })
  }
  public render() {
    let maxWidth = Math.max(Math.min(document.body.clientWidth, 800), 400);
    return (
      <div className="App" style={{ width: maxWidth }}>
        <p>
          Working
        </p>
        {
          this.state.data.map((value, i) => {
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

export default App;
