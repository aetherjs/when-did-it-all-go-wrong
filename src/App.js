import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Header from './components/header/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const headerTheme = createTheme({
  typography: {
    fontFamily: [
      'Joan', 
      'serif'
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={headerTheme}>
          <Header/>
        </ThemeProvider>
        <div className="clock">
          <Clock/>
        </div>
      </div>
    );
  }
}

export default App;