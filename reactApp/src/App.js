import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="Human"/>
        <p className="App-intro">
          This is the first react webpage to work. Will be building off from here.
        </p>
      </div>
    );
  }
}

export default App;
