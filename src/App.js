import React, { Component } from 'react';
import './App.css';
import Clock from './clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clock">
          <Clock/>
        </div>
      </div>
    );
  }
}

export default App;