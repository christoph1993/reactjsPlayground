import React, { Component } from 'react';
import HelloWorldList from './HelloWorldList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldList />
        <p className="App-intro">
          This is the first react webpage to work. Will be building off from here.
        </p>
      </div>
    );
  }
}

export default App;
