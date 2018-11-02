import * as React from 'react';
import './App.css';
import { ImagePost } from './v1/models/Posts';
import { V1Container } from './v1/V1Container';

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
        <V1Container data={this.state.data} />
      </div>
    );
  }
}

export default App;
