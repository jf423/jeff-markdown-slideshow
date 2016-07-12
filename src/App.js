import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {SlideShowApp} from './Components/SlideShowApp';


export class App extends Component {
  render() {
    return (
      <div>
        <SlideShowApp />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
