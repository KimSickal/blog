import * as React from 'react';
import '../styles/BannerComponent.css';


export class BannerComponent extends React.Component{

  public render() {
    return (
        <div
            className="banner"
            style={{width: document.body.clientWidth}}
        >
            <h1>
                있어보이는 제목
            </h1>
            <p>
                Sustainable Blog Project
            </p>
        </div>
    );
  }
}