import * as React from 'react';
import './App.css';
import { Post, requireData } from './models/Posts';
import { V1Container } from './v1/V1Container';
import { V2Container } from './v2/V2Container';
import { screenSize } from './constants/screen';

interface ComponentStates {
  data: Post[];
  screenWidth: number;
  selectedVersion: string;
}

class App extends React.Component<{}, ComponentStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      screenWidth: this.calculateScreenWidth(),
      selectedVersion: 'v2',
    };
  }

  handleSelect(event: React.FormEvent<HTMLSelectElement>) {
    this.setState({ selectedVersion: event.currentTarget.value })
  }

  calculateScreenWidth() {
    return Math.max(Math.min(document.body.clientWidth, screenSize.maxWidth), screenSize.minWidth);
  }

  componentDidMount() {
    this.setState({
      data: requireData(),
    })
    window.addEventListener('resize', () => { this.setState({ screenWidth: this.calculateScreenWidth() }) })
  }

  public render() {
    return (
      <div className="App">
        <div className="header" style={{ width: this.state.screenWidth}}>
          <div className="headerTitle"><p>Name of this page</p></div>
          <div className="headerSearchBar"><p>Search bar</p></div>
          <div className="headerVersionControl">
            <select className="versionList" onChange={event => this.handleSelect(event)} value={this.state.selectedVersion}>
              <option value='v1'>v1</option>
              <option value='v2'>v2</option>
            </select>
          </div>
        </div>
        {
          (() => {
            switch (this.state.selectedVersion) {
              case 'v1':
                return <V1Container {...this.state} />;
              case 'v2':
                return <V2Container {...this.state} />;
              default:
                return null;
            }
          })()
        }
      </div>
    );
  }
}

export default App;
