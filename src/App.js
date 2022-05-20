import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="clock">
          <Clock/>
        </div>
      </div>
    );
  }
}

export default App;