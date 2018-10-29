import * as React from 'react';
import './App.css';
import { data } from './data/data'
import { ArtworkComponent } from './v1/components/ArtworkComponent';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          Comming Soon
        </p>
        {
          data.map((value, i) => {
            return <ArtworkComponent image ={value.image} markdownAddress={value.text} key = {i} />
          })
        }
      </div>
    );
  }
}

export default App;
